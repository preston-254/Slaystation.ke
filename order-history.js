/**
 * Order History – list orders for logged-in user and link to track rider
 */
(function () {
    'use strict';

    function getCurrentUser() {
        try {
            if (typeof userAuth !== 'undefined' && userAuth && userAuth.getCurrentUser) {
                return userAuth.getCurrentUser();
            }
            var raw = localStorage.getItem('slayStationCurrentUser');
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }

    function getOrders() {
        try {
            var raw = localStorage.getItem('slayStationOrders');
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    }

    function statusClass(s) {
        if (!s) return 'status-pending';
        s = s.toLowerCase();
        if (s === 'delivered' || s === 'completed') return 'status-delivered';
        if (s === 'dispatched' || s === 'processing') return 'status-processing';
        if (s === 'cancelled') return 'status-cancelled';
        return 'status-pending';
    }

    function formatDate(iso) {
        if (!iso) return '—';
        var d = new Date(iso);
        return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    }

    function formatStatus(s) {
        if (!s) return 'Pending';
        return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    }

    function renderOrders(orders, container) {
        container.innerHTML = '';
        if (!orders.length) {
            container.innerHTML = '<p class="account-history-empty" style="padding: 2rem; text-align: center; color: #666;">No orders yet. <a href="index.html#products">Start shopping</a>.</p>';
            return;
        }
        orders.forEach(function (order) {
            var card = document.createElement('div');
            card.className = 'order-card';
            var items = order.items || [];
            var itemsHtml = items.length
                ? items.map(function (i) {
                    return '<div class="order-item-row"><span>' + (i.name || 'Item') + ' × ' + (i.quantity || 1) + '</span><span>KSH ' + ((i.price || 0) * (i.quantity || 1)).toLocaleString() + '</span></div>';
                }).join('')
                : '<div class="order-item-row"><span>No items</span><span>—</span></div>';
            var total = order.total != null ? order.total : 0;
            var canTrack = order.assignedRider && order.deliveryStarted && !order.completed;
            var trackBtn = canTrack
                ? '<a href="track-order.html?order=' + order.id + '" class="order-track-btn" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.2rem; background: linear-gradient(135deg, var(--primary-pink), #c77dff); color: #fff; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 0.95rem; margin-top: 0.5rem;"><span>📍</span> Track rider</a>'
                : '';
            card.innerHTML =
                '<div class="order-header">' +
                '<div class="order-info">' +
                '<h3>Order #' + order.id + '</h3>' +
                '<p class="order-date">' + formatDate(order.date) + '</p>' +
                (order.address ? '<p class="order-address">' + (order.address || '') + '</p>' : '') +
                '</div>' +
                '<span class="order-status ' + statusClass(order.status) + '">' + formatStatus(order.status) + '</span>' +
                '</div>' +
                '<div class="order-items">' +
                '<h4>Items</h4>' +
                itemsHtml +
                '<div class="order-item-row total-row"><span>Total</span><span><strong>KSH ' + total.toLocaleString() + '</strong></span></div>' +
                '</div>' +
                '<div class="order-actions">' +
                trackBtn +
                '</div>';
            container.appendChild(card);
        });
    }

    function initOrderHistory() {
        var user = getCurrentUser();
        var content = document.getElementById('orderHistoryContent');
        var loginPrompt = document.getElementById('orderHistoryLoginPrompt');
        var listEl = document.getElementById('orderHistoryList');

        if (!listEl) return;

        if (!user || !user.email) {
            if (content) content.style.display = 'none';
            if (loginPrompt) loginPrompt.style.display = 'block';
            return;
        }

        if (content) content.style.display = 'block';
        if (loginPrompt) loginPrompt.style.display = 'none';

        var allOrders = getOrders();
        var userEmail = (user.email || '').toLowerCase().trim();
        var myOrders = allOrders.filter(function (o) {
            return (o.email || '').toLowerCase().trim() === userEmail;
        });
        myOrders.sort(function (a, b) {
            return new Date(b.date || 0) - new Date(a.date || 0);
        });

        renderOrders(myOrders, listEl);
    }

    window.initOrderHistory = initOrderHistory;
})();
