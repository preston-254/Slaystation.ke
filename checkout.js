(function() {
    'use strict';

    var cart = [];
    var checkoutMap = null;
    var checkoutMarker = null;
    var mapInitialized = false;
    var pinnedLocation = null;
    var calculatedDeliveryFee = null;
    var calculatedDistance = null;

    var EAST_AFRICA_CITIES = {
        KE: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Malindi', 'Lamu', 'Nanyuki', 'Kakamega', 'Kisii', 'Kericho', 'Kitale', 'Garissa', 'Machakos', 'Meru', 'Nyeri', 'Embu', "Murang'a", 'Kiambu', 'Kajiado', 'Narok', 'Westlands', 'Parklands', 'Karen', 'Rongai', 'Ruaka'],
        TZ: ['Dar es Salaam', 'Mwanza', 'Arusha', 'Dodoma', 'Mbeya', 'Tanga', 'Zanzibar', 'Morogoro', 'Tabora', 'Kigoma', 'Moshi', 'Bukoba'],
        UG: ['Kampala', 'Entebbe', 'Gulu', 'Lira', 'Mbarara', 'Jinja', 'Mbale', 'Fort Portal', 'Kasese', 'Masaka', 'Hoima', 'Arua'],
        RW: ['Kigali', 'Butare', 'Gisenyi', 'Gitarama', 'Ruhengeri', 'Byumba', 'Cyangugu', 'Kibuye', 'Gikongoro'],
        BI: ['Bujumbura', 'Gitega', 'Ngozi', 'Bururi', 'Rutana', 'Makamba', 'Muyinga', 'Kayanza', 'Ruyigi'],
        SS: ['Juba', 'Malakal', 'Wau', 'Yambio', 'Rumbek', 'Bor', 'Aweil', 'Torit', 'Bentiu', 'Yei'],
        SO: ['Mogadishu', 'Hargeisa', 'Kismayo', 'Bosaso', 'Garowe', 'Baidoa', 'Beledweyne', 'Galkayo', 'Merca'],
        ET: ["Addis Ababa", "Dire Dawa", "Mek'ele", 'Gondar', 'Bahir Dar', 'Hawassa', 'Harar', 'Jimma', 'Bishoftu', 'Shashamane', 'Dessie', 'Jijiga'],
        DJ: ['Djibouti', 'Ali Sabieh', 'Tadjourah', 'Obock', 'Dikhil', 'Arta'],
        ER: ['Asmara', 'Keren', 'Massawa', 'Assab', 'Mendefera', 'Barentu', 'Teseney', 'Agordat']
    };

    function loadCart() {
        try {
            var saved = localStorage.getItem('slayStationCart');
            cart = saved ? JSON.parse(saved) : [];
        } catch (e) {
            cart = [];
        }
        return cart;
    }

    function getSubtotal() {
        return cart.reduce(function(sum, item) {
            var p = typeof item.price === 'number' ? item.price : parseInt(item.price, 10) || 0;
            var q = item.quantity || 1;
            return sum + (p * q);
        }, 0);
    }

    function renderSummary() {
        var container = document.getElementById('checkoutSummaryItems');
        var subtotalEl = document.getElementById('checkoutSubtotal');
        var deliveryEl = document.getElementById('checkoutDeliveryFee');
        var totalEl = document.getElementById('checkoutTotal');
        if (!container) return;

        var subtotal = getSubtotal();
        var deliveryFee = calculatedDeliveryFee !== null ? calculatedDeliveryFee : 0;
        var total = subtotal + deliveryFee;

        container.innerHTML = cart.map(function(item) {
            var price = typeof item.price === 'number' ? item.price : parseInt(item.price, 10) || 0;
            var qty = item.quantity || 1;
            var img = (item.image || '').indexOf('http') === 0 ? item.image : (item.image || 'images/bags/IMG_1328.jpg');
            return '<div class="checkout-summary-item">' +
                '<img src="' + img + '" alt="">' +
                '<div><div>' + (item.name || 'Item') + '</div><div>KSH ' + (price * qty).toLocaleString() + ' × ' + qty + '</div></div>' +
                '</div>';
        }).join('');

        subtotalEl.textContent = 'KSH ' + subtotal.toLocaleString();
        if (calculatedDeliveryFee !== null) {
            deliveryEl.textContent = 'KSH ' + calculatedDeliveryFee.toLocaleString();
        } else {
            deliveryEl.textContent = 'Pin location for fee';
        }
        totalEl.textContent = 'KSH ' + total.toLocaleString();
        if (typeof updateMpesaTotal === 'function') updateMpesaTotal();
    }

    function onCountryChange() {
        var country = document.getElementById('coCountry').value;
        var countySelect = document.getElementById('coCounty');
        if (!countySelect) return;
        countySelect.innerHTML = '<option value="">Select county/city</option>';
        var cities = EAST_AFRICA_CITIES[country];
        if (cities && cities.length) {
            cities.forEach(function(city) {
                var opt = document.createElement('option');
                opt.value = city;
                opt.textContent = city;
                countySelect.appendChild(opt);
            });
        }
        document.getElementById('checkoutMapWrap').style.display = 'none';
        document.getElementById('coAddress').style.display = 'block';
        document.getElementById('checkoutDeliveryMsg').style.display = 'none';
        calculatedDeliveryFee = null;
        calculatedDistance = null;
        renderSummary();
    }

    function onCountyChange() {
        var county = document.getElementById('coCounty').value;
        var mapWrap = document.getElementById('checkoutMapWrap');
        var addressInput = document.getElementById('coAddress');
        var msgEl = document.getElementById('checkoutDeliveryMsg');

        if (county === 'Nairobi') {
            mapWrap.style.display = 'block';
            addressInput.style.display = 'none';
            addressInput.removeAttribute('required');
            msgEl.style.display = 'block';
            msgEl.className = 'checkout-delivery-msg nairobi';
            msgEl.textContent = 'Pin your exact delivery location on the map. Delivery fee is calculated from Westlands Market.';
            if (!mapInitialized) {
                setTimeout(function() { initCheckoutMap(); }, 150);
            }
        } else {
            mapWrap.style.display = 'none';
            addressInput.style.display = 'block';
            addressInput.setAttribute('required', 'required');
            calculatedDeliveryFee = null;
            calculatedDistance = null;
            if (county) {
                msgEl.style.display = 'block';
                msgEl.className = 'checkout-delivery-msg other';
                msgEl.textContent = 'For this county/city you will be contacted to pay the delivery fee. We will get in touch after you place your order.';
            } else {
                msgEl.style.display = 'none';
            }
        }
        renderSummary();
    }

    function initCheckoutMap() {
        var mapEl = document.getElementById('checkoutMapPicker');
        if (!mapEl || !window.L) return;
        var center = [-1.2654, 36.8067];
        var shopLocation = [-1.2654, 36.8067]; // Westlands Market, Shop B15
        checkoutMap = L.map('checkoutMapPicker', { center: center, zoom: 13 });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap', maxZoom: 19 }).addTo(checkoutMap);
        // Shop pin (fixed)
        var shopIcon = L.divIcon({
            className: 'map-shop-pin',
            html: '<span style="font-size:24px;line-height:1;" aria-hidden="true">🏪</span>',
            iconSize: [32, 32],
            iconAnchor: [16, 32]
        });
        L.marker(shopLocation, { icon: shopIcon, draggable: false }).addTo(checkoutMap).bindPopup('<strong>Slay Station</strong><br>Westlands Market, Shop B15, Nairobi');
        // User delivery pin (draggable)
        checkoutMarker = L.marker(center, { draggable: true }).addTo(checkoutMap);
        checkoutMarker.bindPopup('Click map or drag marker. Fee updates automatically.').openPopup();

        var msgEl = document.getElementById('checkoutDeliveryMsg');

        function updateFromMarker() {
            var latlng = checkoutMarker.getLatLng();
            var lat = latlng.lat;
            var lng = latlng.lng;
            pinnedLocation = { lat: lat, lng: lng };
            var addr = lat.toFixed(5) + ', ' + lng.toFixed(5) + ', Nairobi, Kenya';
            var coAddress = document.getElementById('coAddress');
            if (coAddress) coAddress.value = addr;

            function applyFeeResult(result) {
                if (msgEl) msgEl.style.display = 'block';
                if (result && result.calculated && result.fee != null && result.withinNairobi) {
                    calculatedDeliveryFee = result.fee;
                    calculatedDistance = result.distance;
                    if (msgEl) {
                        msgEl.innerHTML = '✓ Delivery fee: <strong>KSH ' + result.fee.toLocaleString() + '</strong>' + (result.distance ? ' (' + result.distance + ' km from Westlands Market)' : '');
                        msgEl.className = 'checkout-delivery-msg nairobi';
                    }
                } else {
                    calculatedDeliveryFee = null;
                    calculatedDistance = null;
                    if (msgEl) {
                        msgEl.textContent = result && result.outsideNairobi ? 'Location outside Nairobi. We will contact you for delivery fee.' : 'Pin your exact delivery location on the map.';
                        msgEl.className = 'checkout-delivery-msg ' + (result && result.outsideNairobi ? 'other' : 'nairobi');
                    }
                }
                renderSummary();
            }

            if (typeof window.calculateDeliveryFeeFromCoords === 'function') {
                window.calculateDeliveryFeeFromCoords(lat, lng, applyFeeResult);
            } else {
                fallbackCalculateFeeFromCoords(lat, lng, applyFeeResult);
            }
        }

        checkoutMap.on('click', function(e) {
            checkoutMarker.setLatLng(e.latlng);
            updateFromMarker();
        });
        checkoutMarker.on('dragend', updateFromMarker);
        updateFromMarker();

        setTimeout(function() {
            if (checkoutMap) checkoutMap.invalidateSize();
        }, 200);
        mapInitialized = true;
    }

    function setupPaymentToggle() {
        var options = document.querySelectorAll('.payment-option');
        var cardFields = document.getElementById('cardFields');
        var mpesaFields = document.getElementById('mpesaFields');
        var mpesaPhoneInput = document.getElementById('coMpesaPhone');
        function updatePaymentUI(value) {
            options.forEach(function(o) { o.classList.remove('selected'); });
            var opt = Array.prototype.find.call(options, function(o) { return o.querySelector('input').value === value; });
            if (opt) opt.classList.add('selected');
            if (cardFields) cardFields.style.display = value === 'card' ? 'block' : 'none';
            if (mpesaFields) mpesaFields.style.display = value === 'mpesa' ? 'block' : 'none';
            if (mpesaPhoneInput) {
                if (value === 'mpesa') {
                    mpesaPhoneInput.setAttribute('required', 'required');
                } else {
                    mpesaPhoneInput.removeAttribute('required');
                }
            }
            updateMpesaTotal();
        }
        options.forEach(function(opt) {
            opt.addEventListener('click', function() {
                var value = opt.querySelector('input').value;
                updatePaymentUI(value);
            });
        });
        updatePaymentUI(document.querySelector('input[name="payment"]:checked') && document.querySelector('input[name="payment"]:checked').value || 'mpesa');
    }

    function updateMpesaTotal() {
        var payment = document.querySelector('input[name="payment"]:checked') && document.querySelector('input[name="payment"]:checked').value;
        var el = document.getElementById('coMpesaTotal');
        if (!el || payment !== 'mpesa') return;
        var subtotal = getSubtotal();
        var deliveryFee = calculatedDeliveryFee !== null ? calculatedDeliveryFee : 0;
        el.textContent = 'KSH ' + (subtotal + deliveryFee).toLocaleString();
    }

    function getAddressForOrder() {
        var mapWrap = document.getElementById('checkoutMapWrap');
        if (mapWrap && mapWrap.style && mapWrap.style.display !== 'none') {
            var addr = document.getElementById('coAddress');
            return (addr && addr.value) ? addr.value.trim() : (pinnedLocation ? pinnedLocation.lat + ', ' + pinnedLocation.lng + ', Nairobi, Kenya' : '');
        }
        var addr = document.getElementById('coAddress');
        return addr ? addr.value.trim() : '';
    }

    function placeOrder() {
        var name = (document.getElementById('coName') && document.getElementById('coName').value || '').trim();
        var email = (document.getElementById('coEmail') && document.getElementById('coEmail').value || '').trim();
        var phone = (document.getElementById('coPhone') && document.getElementById('coPhone').value || '').trim();
        var address = getAddressForOrder();
        var payment = document.querySelector('input[name="payment"]:checked') && document.querySelector('input[name="payment"]:checked').value;
        var country = 'KE';
        var county = 'Nairobi';

        if (!name || !email || !phone || !address) {
            alert('Please fill in all required fields (name, email, phone, address). Pin your location on the map for Nairobi delivery.');
            return;
        }

        var mpesaPhone = (document.getElementById('coMpesaPhone') && document.getElementById('coMpesaPhone').value || '').trim().replace(/[\s-]/g, '');
        if (payment === 'mpesa') {
            alert('M-Pesa payment will be available soon.\n\nPlease use Cash on Delivery or Card payment for now. Thank you for your patience!');
            return;
        }

        var subtotal = getSubtotal();
        var deliveryFee = calculatedDeliveryFee !== null ? calculatedDeliveryFee : 0;
        var total = subtotal + deliveryFee;

        var orderData = {
            name: name,
            email: email,
            phone: phone,
            mpesaPhone: payment === 'mpesa' ? mpesaPhone : phone,
            address: address,
            orderCountry: country,
            orderCounty: county,
            payment: payment,
            items: cart.map(function(i) { return { id: i.id, name: i.name, price: i.price, quantity: i.quantity || 1, image: i.image }; }),
            giftWrap: false,
            subtotal: subtotal,
            total: payment === 'card' ? total : total,
            deliveryFee: deliveryFee,
            deliveryFeeAutoCalculated: calculatedDeliveryFee !== null,
            deliveryDistance: calculatedDistance,
            withinNairobi: county === 'Nairobi' && calculatedDeliveryFee !== null,
            pinnedLocation: pinnedLocation,
            paymentStatus: 'pending',
            deliveryFeePaid: false,
            itemsPaid: false,
            mpesaCode: null
        };

        var order;
        if (typeof window.createOrder === 'function') {
            order = window.createOrder(orderData);
        } else {
            var orders = JSON.parse(localStorage.getItem('slayStationOrders') || '[]');
            var orderId = orders.length ? Math.max.apply(null, orders.map(function(o) { return o.id; })) + 1 : 1;
            order = {
                id: orderId,
                date: new Date().toISOString(),
                status: 'pending',
                deliveryFeeSet: deliveryFee != null,
                deliveryFeeNotificationSent: false,
                notifications: [],
                mpesaCode: null,
                itemsPaid: false,
                itemsPaymentMethod: null,
                deliveryFeePaid: false
            };
            for (var k in orderData) order[k] = orderData[k];
            orders.push(order);
            localStorage.setItem('slayStationOrders', JSON.stringify(orders));
        }

        cart = [];
        localStorage.setItem('slayStationCart', JSON.stringify([]));

        var msg = 'Order #' + order.id + ' placed successfully. ';
        if (county !== 'Nairobi' && !deliveryFee) {
            msg += 'You will be contacted to pay the delivery fee.';
        } else if (deliveryFee) {
            msg += 'Delivery fee: KSH ' + deliveryFee.toLocaleString() + '.';
        }
        alert(msg + '\n\nRedirecting to track your order.');
        window.location.href = 'track-order.html?order=' + order.id;
    }

    function init() {
        loadCart();
        if (cart.length === 0) {
            document.getElementById('checkoutEmpty').style.display = 'block';
            document.getElementById('checkoutContent').style.display = 'none';
            return;
        }

        setupPaymentToggle();
        renderSummary();
        var mapWrap = document.getElementById('checkoutMapWrap');
        if (mapWrap && mapWrap.style) mapWrap.style.display = 'block';
        if (!mapInitialized) setTimeout(function() { initCheckoutMap(); }, 150);

        var btn = document.getElementById('btnPlaceOrder');
        if (btn) btn.addEventListener('click', placeOrder);

        var user = null;
        try {
            var u = localStorage.getItem('slayStationCurrentUser');
            if (u) user = JSON.parse(u);
        } catch (e) {}
        if (user) {
            var nameEl = document.getElementById('coName');
            var emailEl = document.getElementById('coEmail');
            var phoneEl = document.getElementById('coPhone');
            if (nameEl) nameEl.value = user.name || '';
            if (emailEl) emailEl.value = user.email || '';
            if (phoneEl) phoneEl.value = user.phone || '';
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
