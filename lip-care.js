// Product Data - Lip Care
const lipCareProducts = [
    {
        id: 301,
        name: "Hydrating Lip Balm Set",
        description: "Nourishing lip balms with shea butter and vitamin E. Keeps lips soft and protected.",
        price: 850,
        image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&h=400&fit=crop",
        category: "lip-balm"
    },
    {
        id: 302,
        name: "Sugar Lip Scrub",
        description: "Gentle exfoliating lip scrub with natural sugar and jojoba oil. Reveals smoother lips.",
        price: 650,
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
        category: "lip-scrub"
    },
    {
        id: 303,
        name: "Tinted Lip Oil",
        description: "Lightweight lip oil with a hint of color and shine. Non-sticky, long-lasting moisture.",
        price: 1200,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
        category: "lip-oil"
    },
    {
        id: 304,
        name: "Overnight Lip Mask",
        description: "Intensive overnight lip treatment. Wake up to visibly plumper, hydrated lips.",
        price: 950,
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop",
        category: "lip-mask"
    },
    {
        id: 305,
        name: "SPF Lip Balm",
        description: "Broad-spectrum SPF 30 lip protection. Essential for sun-safe, healthy lips.",
        price: 720,
        image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&h=400&fit=crop",
        category: "lip-balm"
    },
    {
        id: 306,
        name: "Lip Care Duo",
        description: "Scrub + balm in one. Exfoliate then moisturize for a complete lip routine.",
        price: 1100,
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
        category: "lip-set"
    }
];

// Cart Management (shared across all pages) – use window.cart only to avoid duplicate declaration with script.js
if (typeof window.cart === 'undefined') {
    window.cart = [];
}

// Taupe editorial banners – lip care product images in animated layout
var lipBannerLeft = lipCareProducts.slice(0, 2).map(function(p) { return p.image; });
var lipBannerRight = lipCareProducts.slice(2, 4).map(function(p) { return p.image; });
const editorialBanners = [
    { headline: 'Meet the', title: 'Lip Care Collection', body: 'Healthy lips are an essential part of your look. Balms, scrubs, oils and masks.', ctaText: 'Learn More', ctaUrl: 'lip-care.html', leftImgs: lipBannerLeft, rightImgs: lipBannerRight }
];
function createEditorialBanner(config) {
    const section = document.createElement('section');
    section.className = 'editorial-banner editorial-banner--animated-imagery';
    section.setAttribute('aria-label', config.title);
    var leftHtml = (config.leftImgs || []).map(function(src, i) { return '<img src="' + src + '" alt="" loading="lazy" class="editorial-banner-img-animate" style="animation-delay: ' + (i * 0.15) + 's">'; }).join('');
    var rightHtml = (config.rightImgs || []).map(function(src, i) { return '<img src="' + src + '" alt="" loading="lazy" class="editorial-banner-img-animate" style="animation-delay: ' + (i * 0.15 + 0.2) + 's">'; }).join('');
    section.innerHTML = '<div class="editorial-banner-inner"><div class="editorial-banner-imagery editorial-banner-imagery-left">' + leftHtml + '</div><div class="editorial-banner-content"><p class="editorial-banner-headline">' + config.headline + '</p><h2 class="editorial-banner-title">' + config.title + '</h2><p class="editorial-banner-body">' + config.body + '</p><a href="' + config.ctaUrl + '" class="editorial-banner-cta">' + config.ctaText + '</a></div><div class="editorial-banner-imagery editorial-banner-imagery-right">' + rightHtml + '</div></div>';
    return section;
}
function observeEditorialBanners() {
    var banners = document.querySelectorAll('.editorial-banner');
    if (!banners.length) return;
    var observer = new IntersectionObserver(function(entries) { entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('editorial-banner-visible'); }); }, { rootMargin: '0px 0px -80px 0px', threshold: 0.1 });
    banners.forEach(function(b) { observer.observe(b); });
}

// Apply lip care filters (product type, price in KSH) – apply immediately when checkbox changes
function getFilteredLipCareProducts() {
    var typeChecks = document.querySelectorAll('input[name="lipCareType"]:checked');
    var priceChecks = document.querySelectorAll('input[name="lipCarePrice"]:checked');
    var list = lipCareProducts;
    if (typeChecks.length) {
        var types = Array.from(typeChecks).map(function(c) { return c.value; });
        list = list.filter(function(p) { return types.indexOf(p.category) !== -1; });
    }
    if (priceChecks.length) {
        var ranges = Array.from(priceChecks).map(function(c) { return c.value; });
        list = list.filter(function(p) {
            var pr = p.price || 0;
            return ranges.some(function(r) {
                if (r === 'under800') return pr < 800;
                if (r === '800-1000') return pr >= 800 && pr < 1000;
                if (r === '1000-1500') return pr >= 1000 && pr < 1500;
                if (r === 'over1500') return pr >= 1500;
                return false;
            });
        });
    }
    return list;
}

function applyLipCareFilters() {
    var filtered = getFilteredLipCareProducts();
    renderProducts(filtered);
    var countEl = document.getElementById('lipCareItemCount');
    if (countEl) countEl.textContent = filtered.length;
    var countMobile = document.getElementById('lipCareItemCountMobile');
    if (countMobile) countMobile.textContent = filtered.length;
}

function initLipCareMobileFilter() {
    var filterBtn = document.getElementById('lipCareMobileFilterBtn');
    var backdrop = document.getElementById('lipCareFilterBackdrop');
    var closeBtn = document.getElementById('lipCareFilterClose');
    function closeFilter() {
        document.body.classList.remove('page-filter-open');
        if (backdrop) backdrop.setAttribute('aria-hidden', 'true');
    }
    if (filterBtn) filterBtn.addEventListener('click', function() {
        document.body.classList.add('page-filter-open');
        if (backdrop) backdrop.setAttribute('aria-hidden', 'false');
    });
    if (backdrop) backdrop.addEventListener('click', closeFilter);
    if (closeBtn) closeBtn.addEventListener('click', closeFilter);
}

document.addEventListener('DOMContentLoaded', function() {
    renderProducts(lipCareProducts);
    var countEl = document.getElementById('lipCareItemCount');
    if (countEl) countEl.textContent = lipCareProducts.length;
    var countMobile = document.getElementById('lipCareItemCountMobile');
    if (countMobile) countMobile.textContent = lipCareProducts.length;
    document.querySelectorAll('input[name="lipCareType"], input[name="lipCarePrice"]').forEach(function(input) {
        input.addEventListener('change', applyLipCareFilters);
    });
    initLipCareMobileFilter();
    loadCartFromStorage();
    updateCartCount();
});

function renderProducts(filteredProducts) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    productsGrid.innerHTML = '';
    var list = filteredProducts || lipCareProducts;
    var bannerIndex = 0;
    list.forEach(function(product, i) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.onclick = function() { window.location.href = 'product-detail.html?id=' + product.id + '&category=lip-care'; };
        productCard.style.cursor = 'pointer';
        productCard.innerHTML = `
            <div class="product-image" style="background: #fff;">
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='💄';">
            </div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">KSH ${product.price.toLocaleString()}</div>
        `;
        productsGrid.appendChild(productCard);
        if ((i + 1) % 2 === 0 && i + 1 < list.length && editorialBanners.length > 0) {
            var config = editorialBanners[bannerIndex % editorialBanners.length];
            productsGrid.appendChild(createEditorialBanner(config));
            bannerIndex++;
        }
    });
    observeEditorialBanners();
}

function getSharedCart() {
    const savedCart = localStorage.getItem('slayStationCart');
    if (savedCart) return JSON.parse(savedCart);
    return [];
}

function addToCart(productId) {
    const product = lipCareProducts.find(p => p.id === productId);
    if (!product) return;

    const allCartItems = getSharedCart();
    const existingItem = allCartItems.find(item => item.id === productId && item.category === product.category);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        allCartItems.push({
            ...product,
            quantity: 1,
            category: product.category || 'lip-care'
        });
    }
    window.cart = allCartItems;
    saveCartToStorage();
    updateCartCount();
    if (typeof showNotification === 'function') {
        showNotification(`${product.name} added to cart! ✨`);
    } else {
        alert(`${product.name} added to cart! ✨`);
    }
    if (document.getElementById('cartOverlay') && document.getElementById('cartOverlay').classList.contains('active')) {
        renderCart();
        if (typeof renderYouMayAlsoLike === 'function') renderYouMayAlsoLike('cartYouMayAlsoLike');
    }
}

function removeFromCart(productId) {
    const allCartItems = getSharedCart().filter(item => item.id !== productId);
    window.cart = allCartItems;
    saveCartToStorage();
    updateCartCount();
    renderCart();
}

function updateQuantity(productId, change) {
    const allCartItems = getSharedCart();
    const item = allCartItems.find(i => i.id === productId);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) {
        window.cart = allCartItems.filter(i => i.id !== productId);
    } else {
        window.cart = allCartItems;
    }
    saveCartToStorage();
    updateCartCount();
    renderCart();
}

function saveCartToStorage() {
    localStorage.setItem('slayStationCart', JSON.stringify(window.cart || getSharedCart()));
}

function loadCartFromStorage() {
    window.cart = getSharedCart();
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    if (!cartItems || !cartTotal) return;

    const allCartItems = getSharedCart();
    if (allCartItems.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty. Start shopping!</p>';
        cartTotal.textContent = '0';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;
    allCartItems.forEach(item => {
        const imageHTML = item.image
            ? `<img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.parentElement.innerHTML='💄';">`
            : '💄';
        cartItems.innerHTML += `
            <div class="cart-item">
                <div class="cart-item-image">${imageHTML}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">KSH ${item.price.toLocaleString()}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span>Qty: ${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})" style="margin-left: auto;">Remove</button>
                    </div>
                </div>
            </div>
        `;
        total += item.price * item.quantity;
    });
    cartTotal.textContent = total.toLocaleString();
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (!cartCount) return;
    const total = getSharedCart().reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = total;
}

function toggleCart() {
    const cartOverlay = document.getElementById('cartOverlay');
    if (!cartOverlay) return;
    cartOverlay.classList.toggle('active');
    if (cartOverlay.classList.contains('active')) {
        loadCartFromStorage();
        renderCart();
        if (typeof renderYouMayAlsoLike === 'function') renderYouMayAlsoLike('cartYouMayAlsoLike');
        var section = document.getElementById('cartYouMayAlsoLikeSection') || document.querySelector('.you-may-also-like--cart');
        if (section) {
            try {
                if (sessionStorage.getItem('cartYmalDismissed') === 'true') section.classList.add('is-dismissed');
                else section.classList.remove('is-dismissed');
            } catch (e) {}
        }
    }
}

// You May Also Like – render carousel (Fashionphile-style)
function renderYouMayAlsoLike(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const productList = typeof lipCareProducts !== 'undefined' ? lipCareProducts : (window.lipCareProducts || []);
    const cartIds = (typeof cart !== 'undefined' ? cart : (window.cart || [])).map(function (item) { return item.id; });
    const exclude = new Set(cartIds);
    const available = productList.filter(function (p) { return p.id && !exclude.has(p.id); });
    const shuffled = available.slice().sort(function () { return 0.5 - Math.random(); });
    const toShow = shuffled.slice(0, 8);
    if (toShow.length === 0) {
        container.innerHTML = '<p class="empty-cart" style="padding:1rem 0;color:#6b6b6b;font-size:0.85rem;">No recommendations right now.</p>';
        return;
    }
    const wishlistCounts = [22, 56, 39, 40, 237, 19, 17, 24];
    var openInNewTab = containerId === 'checkoutYouMayAlsoLike';
    var linkAttrs = openInNewTab ? ' target="_blank" rel="noopener noreferrer"' : '';
    var isCartYmal = containerId === 'cartYouMayAlsoLike';
    container.innerHTML = toShow.map(function (p, i) {
        const price = typeof p.price === 'number' ? p.price : parseInt(p.price, 10) || 0;
        const count = wishlistCounts[i % wishlistCounts.length];
        const href = 'product-detail.html?id=' + (p.id || '') + '&category=lip-care';
        const img = (p.image || '').indexOf('http') === 0 ? p.image : (p.image || 'images/bags/IMG_1328.jpg');
        const name = (p.name || 'Product').substring(0, 45);
        const escName = name.replace(/"/g, '&quot;');
        if (isCartYmal) {
            return '<div class="ymal-card ymal-card--cart">' +
                '<a href="' + href + '" class="ymal-card-link">' +
                '<div class="ymal-card-image-wrap">' +
                '<img src="' + img + '" alt="' + escName + '" loading="lazy">' +
                '<span class="ymal-card-wishlist" aria-hidden="true">' +
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
                count + '</span></div>' +
                '<span class="ymal-card-brand">Slay Station</span>' +
                '<span class="ymal-card-name">' + name + '</span>' +
                '<span class="ymal-card-condition">Condition: New</span>' +
                '<span class="ymal-card-price">KSH ' + price.toLocaleString() + '</span></a>' +
                '<button type="button" class="ymal-card-add-btn" onclick="event.stopPropagation(); addToCart(' + p.id + ');">Add to Cart</button></div>';
        }
        return '<a href="' + href + '" class="ymal-card"' + linkAttrs + '>' +
            '<div class="ymal-card-image-wrap">' +
            '<img src="' + img + '" alt="' + escName + '" loading="lazy">' +
            '<span class="ymal-card-wishlist" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
            count + '</span></div>' +
            '<span class="ymal-card-brand">Slay Station</span>' +
            '<span class="ymal-card-name">' + name + '</span>' +
            '<span class="ymal-card-condition">Condition: New</span>' +
            '<span class="ymal-card-price">KSH ' + price.toLocaleString() + '</span></a>';
    }).join('');
}

function dismissCartRecommendations() {
    var section = document.getElementById('cartYouMayAlsoLikeSection') || document.querySelector('.you-may-also-like--cart');
    if (section) {
        section.classList.add('is-dismissed');
        try { sessionStorage.setItem('cartYmalDismissed', 'true'); } catch (e) {}
    }
}

function scrollYouMayAlsoLike(containerId, direction) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const step = 160;
    container.scrollBy({ left: direction * step, behavior: 'smooth' });
}

function checkout() {
    const allCartItems = getSharedCart();
    if (allCartItems.length === 0) {
        alert('Your cart is empty! Add some items first. 💕');
        return;
    }
    const orderModal = document.getElementById('orderModal');
    const orderSummary = document.getElementById('orderSummary');
    if (!orderModal || !orderSummary) return;

    let summaryHTML = '';
    let total = 0;
    allCartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        summaryHTML += `<div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;"><span>${item.name} x${item.quantity}</span><span>KSH ${itemTotal.toLocaleString()}</span></div>`;
    });
    summaryHTML += `<div style="display: flex; justify-content: space-between; margin-top: 1rem; padding-top: 1rem; border-top: 2px solid white; font-weight: bold; font-size: 1.2rem;"><span>Total</span><span>KSH ${total.toLocaleString()}</span></div>`;
    orderSummary.innerHTML = summaryHTML;

    cartOverlay.classList.remove('active');
    orderModal.classList.add('active');
    if (typeof renderYouMayAlsoLike === 'function') renderYouMayAlsoLike('checkoutYouMayAlsoLike');
}

function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    if (modal) modal.classList.remove('active');
}

const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const subtotal = getSharedCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
        const orderData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            payment: formData.get('payment'),
            items: getSharedCart().map(item => ({ ...item })),
            subtotal,
            total: subtotal
        };
        let userId = null;
        if (typeof window.getCurrentUser === 'function') {
            const user = window.getCurrentUser();
            if (user) { userId = user.id; orderData.userId = userId; }
        }
        let order;
        if (typeof window.createOrder === 'function') {
            order = window.createOrder(orderData);
        } else {
            const orders = JSON.parse(localStorage.getItem('slayStationOrders') || '[]');
            const orderId = orders.length ? Math.max(...orders.map(o => o.id)) + 1 : 1;
            order = { id: orderId, date: new Date().toISOString(), ...orderData, status: 'pending' };
            orders.push(order);
            localStorage.setItem('slayStationOrders', JSON.stringify(orders));
        }
        alert(`🎉 Order Placed! Order #${order.id}. Total: KSH ${subtotal.toLocaleString()}`);
        localStorage.setItem('slayStationCart', JSON.stringify([]));
        window.cart = [];
        updateCartCount();
        closeOrderModal();
        if (document.getElementById('cartItems')) renderCart();
    });
}
