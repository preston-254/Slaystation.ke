// Product Data - Bags
// Big coach bags (3800 KSH) vs regular bags (3500 KSH)
const products = [
    {
        id: 1,
        name: "Tory burch bag",
        description: "Perfect for lounging at home in style! Soft and comfortable - extra spacious!",
        price: 3800,
        image: "images/bags/IMG_1328.jpg",
        category: "coach-bag",
        size: "big"
    },
    {
        id: 2,
        name: "Fully boxed Teri Coach Bag",
        description: "Add some sparkle to your style! Elegant and chic - large size!",
        price: 3700,
        image: "images/bags/IMG_1329.jpg",
        category: "on sale",
        size: "big"
    },
    {
        id: 3,
        name: "white satchel Coach Bag",
        description: "Luxurious velvet coach bag for ultimate style - premium size!",
        price: 3800,
        image: "images/bags/IMG_1330.jpg",
        category: "coach-bag",
        size: "big"
    },
    {
        id: 4,
        name: "bloom into style",
        description: "Beautiful floral pattern tote bag for everyday use.",
        price: 3900,
        image: "images/bags/IMG_1331.jpg",
        category: "tote-bag",
        size: "regular"
    },
    {
        id: 5,
        name: "LV gold Alma",
        description: "Pretty in pink! The perfect bag for any occasion.",
        price: 3500,
        image: "images/bags/IMG_1332.jpg",
        category: "tote-bag",
        size: "regular"
    },
    {
        id: 6,
        name: "LV capucines",
        description: "Free-spirited boho design that screams style!",
        price: 4100,
        image: "images/bags/IMG_1333.jpg",
        category: "tote-bag",
        size: "regular"
    },
    {
        id: 7,
        name: "leather black coach ",
        description: "Cute and compact, perfect for on-the-go adventures.",
        price: 3800,
        image: "images/bags/IMG_1334.jpg",
        category: "coach-bag",
        size: "regular"
    },
  
    {
        id: 9,
        name: "Coach Rowan bag",
        description: "Perfect for special occasions and evening events.",
        price: 3800,
        image: "images/bags/IMG_1336.jpg",
        category: "coach-bag",
        size: "regular"
    },

    {
        id: 12,
        name: "Miu Miu Bag",
        description: "Beautiful floral pattern bag that matches your style.",
        price: 3200,
        image: "images/bags/IMG_1339.jpg",
        category: "miu miu-bag",
        size: "regular"
    },
    {
        id: 13,
        name: "Compact Zipper Bag",
        description: "Compact design with zipper closure for secure storage.",
        price: 3700,
        image: "images/bags/IMG_1340.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 14,
        name: "coach teri shoulder Bag",
        description: "Elegant designer-inspired bag with premium finish.",
        price: 3700,
        image: "images/bags/IMG_1341.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 15,
        name: "pink princess coach Bag",
        description: "Vibrant colors with quilted texture for a unique look.",
        price: 3700,
        image: "images/bags/IMG_1342.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 16,
        name: "white tabby Bag",
        description: "Trendy shoulder bag perfect for everyday elegance.",
        price: 3800,
        image: "images/bags/IMG-20251123-WA0004.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 18,
        name: "cherry print coach bag",
        description: "Sophisticated handbag for the modern woman.",
        price: 3900,
        image: "images/bags/IMG-20251123-WA0006.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 19,
        name: "Coach Lana Bag",
        description: "Fashion-forward tote bag with contemporary design.",
        price: 3900,
        image: "images/bags/IMG-20251123-WA0007.jpg",
        category: "Coach-bag",
        size: "regular"
    },
    {
        id: 20,
        name: "floral black coach Bag",
        description: "Premium evening bag for special occasions.",
        price: 3500,
        image: "images/bags/IMG-20251123-WA0008.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 21,
        name: "white crossbody Bag",
        description: "Perfect casual bag for your daily adventures.",
        price: 3800,
        image: "images/bags/IMG-20251123-WA0009.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 22,
        name: "slay pink tote ",
        description: "Stylish shoulder tote with modern appeal.",
        price: 3600,
        image: "images/bags/IMG-20251123-WA0010.jpg",
        category: "tote-bag",
        size: "regular"
    },
    {
        id: 23,
        name: "claret rowan",
        description: "Timeless crossbody bag with versatile design.",
        price: 3500,
        image: "images/bags/IMG-20251123-WA0011.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 24,
        name: "kiss coach tabby",
        description: "Sophisticated clutch perfect for evening events.",
        price: 3900,
        image: "images/bags/IMG-20251123-WA0012.jpg",
        category: "shoulder-bag",
        size: "regular"
    },
    {
        id: 26,
        name: "Stylish black",
        description: "Chic handbag that complements any outfit.",
        price: 3500,
        image: "images/bags/IMG-20251123-WA0014.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 27,
        name: "classy in biege",
        description: "Fashionable shoulder bag with unique details.",
        price: 3500,
        image: "images/bags/IMG-20251123-WA0015.jpg",
        category: "shoulder-bag",
        size: "regular"
    },
    {
        id: 28,
        name: "mini cargo",
        description: "Refined crossbody bag for everyday elegance.",
        price: 3100,
        image: "images/bags/IMG-20251123-WA0016.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 29,
        name: "cherry Nolita",
        description: "Premium tote bag with sophisticated styling.",
        price: 3800,
        image: "images/bags/IMG-20251123-WA0017.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 30,
        name: "mini sierra satchel",
        description: "Glamorous evening bag for special nights out.",
        price: 3800,
        image: "images/bags/IMG-20251123-WA0018.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 31,
        name: "sleek black",
        description: "Trendy bag that keeps you ahead of the style curve.",
        price: 3700,
        image: "images/bags/IMG-20251123-WA0019.jpg",
        category: "tote-bag",
        size: "regular"
    },

    {
        id: 33,
        name: "Modern Crossbody",
        description: "Contemporary crossbody with sleek lines.",
        price: 3700,
        image: "images/bags/IMG-20251123-WA0021.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 34,
        name: "Elegant purse white",
        description: "Sophisticated tote bag for the discerning fashionista.",
        price: 3700,
        image: "images/bags/IMG-20251123-WA0023.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 36,
        name: "lv capucines",
        description: "Fashionable shoulder tote with modern flair.",
        price: 4100,
        image: "images/bags/IMG-20251123-WA0026.jpg",
        category: "shoulder-bag",
        size: "regular"
    },
    {
        id: 37,
        name: "cheetah print ysl",
        description: "Premium crossbody bag with refined elegance.",
        price: 3200,
        image: "images/bags/IMG-20251123-WA0027.jpg",
        category: "crossbody",
        size: "regular"
    },
    {
        id: 38,
        name: "dark brown teri",
        description: "Sophisticated clutch for glamorous occasions.",
        price: 3500,
        image: "images/bags/IMG-20251123-WA0028.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 39,
        name: "timeless coach lana",
        description: "Contemporary tote with cutting-edge design.",
        price: 3900,
        image: "images/bags/IMG-20251123-WA0029.jpg",
        category: "tote-bag",
        size: "regular"
    },
    {
        id: 40,
        name: "sweet teri",
        description: "Stylish shoulder bag with chic appeal.",
        price: 3900,
        image: "images/bags/IMG-20251123-WA0030.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 42,
        name: "coach Lana Rich Red",
        description: "Refined handbag with timeless elegance.",
        price: 3800,
        image: "images/bags/IMG-20251123-WA0032.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 43,
        name: "Laurel Beige",
        description: "Premium tote bag with sophisticated design.",
        price: 3800,
        image: "images/bags/IMG-20251123-WA0033.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 44,
        name: "Clarey Rowan ",
        description: "Glamorous evening bag for special events.",
        price: 3500,
        image: "images/bags/IMG-20251123-WA0034.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 45,
        name: "TH bag ",
        description: "Contemporary shoulder bag with sleek design.",
        price: 3800,
        image: "images/bags/IMG-20251123-WA0037.jpg",
        category: "shoulder-bag",
        size: "regular"
    },
    {
        id: 46,
        name: "plain Black Tote",
        description: "Fashionable crossbody bag with modern style.",
        price: 3500,
        image: "images/bags/IMG-20251123-WA0038.jpg",
        category: "tote-bag",
        size: "regular"
    },
    {
        id: 47,
        name: "plain Black Gallery Crossboady",
        description: "Sophisticated tote for everyday elegance.",
        price: 3700,
        image: "images/bags/IMG-20251123-WA0039.jpg",
        category: "tote-bag",
        size: "regular"
    },
    {
        id: 48,
        name: "White Lv ",
        description: "Fashion-forward handbag with unique character.",
        price: 3500,
        image: "images/bags/IMG-20251123-WA0040.jpg",
        category: "handbag",
        size: "regular"
    },
    {
        id: 49,
        name: "Luxury Shoulder Bag",
        description: "Premium shoulder bag with refined details.",
        price: 3500,
        image: "images/bags/IMG-20251123-WA0041.jpg",
        category: "shoulder-bag",
        size: "regular"
    },
    {
        id: 50,
        name: "Leopard print YSL",
        description: "Timeless crossbody bag with versatile appeal.",
        price: 3200,
        image: "images/bags/IMG-20251123-WA0042.jpg",
        category: "crossbody",
        size: "regular"
    },
    {
        id: 51,
        name: "Denim Lauren",
        description: "Glamorous evening bag for special occasions.",
        price: 3800,
        image: "images/bags/IMG-20251123-WA0043.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 52,
        name: "Miu Miu Shoulder Bag",
        description: "Contemporary tote with innovative design.",
        price: 2700,
        image: "images/bags/IMG-20251123-WA0044.jpg",
        category: "shoulder-bag",
        size: "regular"
    },
    {
        id: 53,
        name: "Black Jaxquemus",
        description: "Chic shoulder tote with elegant styling.",
        price: 3500,
        image: "images/bags/IMG-20251123-WA0045.jpg",
        category: "shoulder-bag",
        size: "regular"
    },
    {
        id: 54,
        name: "Black Teri",
        description: "Trendy crossbody bag for modern style.",
        price: 3700,
        image: "images/bags/IMG-20251123-WA0046.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 55,
        name: "White Satchel",
        description: "Comes with optional Hello kitty charm at Ksh 700",
        price: 3800,
        image: "images/bags/IMG-20251123-WA0047.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 56,
        name: "Black Coach ",
        description: "Refined tote bag for the style-savvy.",
        price: 3500,
        image: "images/bags/IMG-20251123-WA0049.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 57,
        name: "Black Mini Lauren",
        description: "Stylish shoulder bag with contemporary flair.",
        price: 3800,
        image: "images/bags/IMG-20251123-WA0051.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 59,
        name: "Fully boxed Miu Miu Bag",
        description: "Fashionable evening bag for glamorous nights.",
        price: 3500,
        image: "images/bags/IMG-20251123-WA0053.jpg",
        category: "miu miu-bag",
        size: "regular"
    },
    {
        id: 60,
        name: "Young $ Smart",
        description: "Sophisticated handbag with timeless design.",
        price: 3800,
        image: "images/bags/IMG-20251123-WA0055.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 61,
        name: "Luxury Brown Tote Bag",
        description: "Premium tote bag with elegant sophistication.",
        price: 3500,
        image: "images/bags/IMG-20251123-WA0056.jpg",
        category: "tote-bag",
        size: "regular"
    },
    {
        id: 62,
        name: "Leopard print Teri",
        description: "Chic crossbody bag for everyday style.",
        price: 3500,
        image: "images/bags/IMG-20251123-WA0058.jpg",
        category: "coach-bag",
        size: "regular"
    },
    {
        id: 63,
        name: "Mini Kelly",
        description: "Contemporary shoulder bag with innovative design.",
        price: 3500,
        image: "images/bags/IMG-20251123-WA0060.jpg",
        category: "shoulder-bag",
        size: "regular"
    },
    {
        id: 64,
        name: "plain White Coach Teri",
        description: "Glamorous clutch for special evening events.",
        price: 3500,
        image: "images/bags/IMG-20251123-WA0061.jpg",
        category: "evening-bag",
        size: "regular"
    },
    {
        id: 66,
        name: "Chic Handbag",
        description: "Stylish handbag that complements your wardrobe.",
        price: 3500,
        image: "images/bags/WhatsApp Image 2025-11-23 at 13.52.07_7bbb9823.jpg",
        category: "handbag",
        size: "regular"
    }
];

// Cart Management
let cart = [];
let wishlist = [];

// Make DELIVERY_FEE globally available to avoid conflicts
// Use a function instead of const to avoid redeclaration errors
if (typeof window !== 'undefined' && typeof window.DELIVERY_FEE === 'undefined') {
    window.DELIVERY_FEE = 200;
}

// Function to get delivery fee (avoids const redeclaration issues)
function getDeliveryFee() {
    return (typeof window !== 'undefined' && window.DELIVERY_FEE) ? window.DELIVERY_FEE : 200;
}

// Product likes system
function getProductLikes(productId) {
    const likes = JSON.parse(localStorage.getItem('slayStationProductLikes') || '{}');
    return likes[productId] || { count: 0, likedBy: [] };
}

function likeProduct(productId) {
    const user = userAuth ? userAuth.getCurrentUser() : null;
    if (!user) {
        alert('Please login to like products! 💕');
        window.location.href = 'login.html';
        return;
    }
    
    const likes = JSON.parse(localStorage.getItem('slayStationProductLikes') || '{}');
    if (!likes[productId]) {
        likes[productId] = { count: 0, likedBy: [] };
    }
    
    const userIndex = likes[productId].likedBy.indexOf(user.id);
    if (userIndex > -1) {
        // Unlike
        likes[productId].likedBy.splice(userIndex, 1);
        likes[productId].count = Math.max(0, likes[productId].count - 1);
    } else {
        // Like
        likes[productId].likedBy.push(user.id);
        likes[productId].count = (likes[productId].count || 0) + 1;
    }
    
    localStorage.setItem('slayStationProductLikes', JSON.stringify(likes));
    return likes[productId];
}

function isProductLiked(productId) {
    const user = userAuth ? userAuth.getCurrentUser() : null;
    if (!user) return false;
    
    const likes = JSON.parse(localStorage.getItem('slayStationProductLikes') || '{}');
    if (!likes[productId]) return false;
    
    return likes[productId].likedBy.includes(user.id);
}

// Add ratings and badges to products
products.forEach((product, index) => {
    product.rating = (4 + Math.random()).toFixed(1); // 4.0 to 5.0
    product.reviewCount = Math.floor(Math.random() * 50) + 10;
    
    // Initialize likes
    const likes = getProductLikes(product.id);
    product.likes = likes.count;
    
    // Initialize stock and colors if not set
    if (product.stock === undefined) {
        product.stock = 10; // Default stock
    }
    if (!product.colors || product.colors.length === 0) {
        product.colors = [{name: 'Black', hex: '#000000'}, {name: 'White', hex: '#FFFFFF'}, {name: 'Pink', hex: '#FF69B4'}, {name: 'Brown', hex: '#8B4513'}]; // Default colors
    } else if (product.colors.length > 0 && typeof product.colors[0] === 'string') {
        // Convert old format to new format
        const colorMap = {
            'black': {name: 'Black', hex: '#000000'},
            'white': {name: 'White', hex: '#FFFFFF'},
            'pink': {name: 'Pink', hex: '#FF69B4'},
            'brown': {name: 'Brown', hex: '#8B4513'},
            'red': {name: 'Red', hex: '#FF0000'},
            'blue': {name: 'Blue', hex: '#0000FF'},
            'green': {name: 'Green', hex: '#008000'},
            'yellow': {name: 'Yellow', hex: '#FFFF00'}
        };
        product.colors = product.colors.map(c => colorMap[c.toLowerCase()] || {name: c, hex: '#808080'});
    }
    
    // Badges and sale prices are now controlled by admin in the admin portal
    // No automatic assignment - admins can set badge and originalPrice through admin panel
});

// Save products to localStorage after initialization
if (typeof products !== 'undefined' && products.length > 0) {
    try {
        localStorage.setItem('slayStationProducts', JSON.stringify(products));
    } catch (e) {
        console.error('Error saving products to localStorage:', e);
    }
}


// Send product to friend
function sendToFriend(productId) {
    const user = userAuth ? userAuth.getCurrentUser() : null;
    if (!user) {
        alert('Please login to send products to friends! 💕');
        window.location.href = 'login.html';
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Get all users (friends)
    const allUsers = userAuth ? userAuth.getUsers() : [];
    const friends = allUsers.filter(u => u.id !== user.id);
    
    if (friends.length === 0) {
        alert('No friends found! Share Slay Station with your friends so they can join! ✨');
        return;
    }
    
    // Create friend selection modal
    showFriendSelectionModal(friends, product, 'product');
}

// Show friend selection modal
function showFriendSelectionModal(friends, item, type) {
    const modal = document.createElement('div');
    modal.className = 'friend-selection-modal';
    modal.innerHTML = `
        <div class="friend-selection-content">
            <div class="friend-selection-header">
                <h2>💌 Send to Friend</h2>
                <button class="close-friend-modal" onclick="this.closest('.friend-selection-modal').remove()">✕</button>
            </div>
            <div class="friend-selection-body">
                <p style="margin-bottom: 1.5rem; color: #666;">Select a friend to send this product to:</p>
                <div class="friends-list" id="friendsList">
                    ${friends.map(friend => `
                        <div class="friend-item" onclick="selectFriend(${friend.id}, ${item.id})">
                            <div class="friend-avatar">${friend.profilePicture ? `<img src="${friend.profilePicture}" alt="${friend.name}">` : '👤'}</div>
                            <div class="friend-info">
                                <div class="friend-name">${friend.name}</div>
                                <div class="friend-email">${friend.email}</div>
                            </div>
                            <div class="friend-select-icon">→</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.classList.add('active');
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Select friend and send/share
function selectFriend(friendId, productId) {
    const user = userAuth ? userAuth.getCurrentUser() : null;
    if (!user) return;
    
    const friend = userAuth.getUsers().find(u => u.id === friendId);
    if (!friend) return;
    
    // Create notification for friend
    const notifications = friend.notifications || [];
    
    if (productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
        const fromUser = userAuth.getUsers().find(u => u.id === user.id);
        notifications.push({
            type: 'product_shared',
            message: `${user.name} sent you a product: ${product.name}`,
            productId: productId,
            fromUserId: user.id,
            fromUserName: user.name,
            fromUserProfilePicture: fromUser ? fromUser.profilePicture : null,
            date: new Date().toISOString(),
            read: false
        });
        }
    }
    
    // Update friend's notifications
    userAuth.updateUser(friendId, { notifications: notifications });
    
    // Close modal
    document.querySelector('.friend-selection-modal')?.remove();
    
    // Show success message
    alert(`Sent to ${friend.name} successfully! ✨`);
}

// Filter and search variables
let currentFilter = 'all';
let searchQuery = '';

// Taupe editorial banners – ad video from images/ad-videos/ as background
const editorialBanners = [
    {
        headline: 'Watch',
        title: 'Bags & Style',
        body: 'Discover the look, feel and quality of Slay Station—luxury that moves with you.',
        ctaText: 'Shop Now',
        ctaUrl: 'index.html#products',
        useVideo: true,
        videoUrl: 'images/ad-videos/ad1.mp4'
    },
    {
        headline: 'Meet the',
        title: 'Lip Care Collection',
        body: 'Healthy lips are an essential part of your look. Our curated lip care range—balms, scrubs, oils and masks.',
        ctaText: 'Learn More',
        ctaUrl: 'lip-care.html',
        useVideo: true,
        videoUrl: 'images/ad-videos/ad1.mp4'
    },
    {
        headline: 'Shop',
        title: 'Premium Wallets',
        body: 'Refined leather and compact styles for every occasion. Quality and style that last.',
        ctaText: 'Shop Wallets',
        ctaUrl: 'wallets.html',
        useVideo: true,
        videoUrl: 'images/ad-videos/ad1.mp4'
    },
    {
        headline: 'Discover',
        title: 'Bag Accessories',
        body: 'Belts, MP3 players and more to complete your look. Customize your style.',
        ctaText: 'View Accessories',
        ctaUrl: 'accessories.html',
        useVideo: true,
        videoUrl: 'images/ad-videos/ad1.mp4'
    }
];

function createEditorialBanner(config, bannerIndex) {
    const section = document.createElement('section');
    section.className = 'editorial-banner' + (config.useVideo ? ' editorial-banner--video' : '');
    section.setAttribute('aria-label', config.title);

    if (config.useVideo && config.videoUrl) {
        section.innerHTML = `
            <div class="editorial-banner-video-wrap">
                <video class="editorial-banner-video" autoplay muted loop playsinline>
                    <source src="${config.videoUrl}" type="video/mp4">
                </video>
                <div class="editorial-banner-video-overlay"></div>
            </div>
            <div class="editorial-banner-inner editorial-banner-inner--center">
                <div class="editorial-banner-content">
                    <p class="editorial-banner-headline">${config.headline}</p>
                    <h2 class="editorial-banner-title">${config.title}</h2>
                    <p class="editorial-banner-body">${config.body}</p>
                    <a href="${config.ctaUrl}" class="editorial-banner-cta">${config.ctaText}</a>
                </div>
            </div>
        `;
    } else {
        const leftImgs = (config.leftImgs || []).map((src) => `<img src="${src}" alt="" loading="lazy">`).join('');
        const rightImgs = (config.rightImgs || []).map((src) => `<img src="${src}" alt="" loading="lazy">`).join('');
        section.innerHTML = `
            <div class="editorial-banner-inner">
                <div class="editorial-banner-imagery editorial-banner-imagery-left">${leftImgs}</div>
                <div class="editorial-banner-content">
                    <p class="editorial-banner-headline">${config.headline}</p>
                    <h2 class="editorial-banner-title">${config.title}</h2>
                    <p class="editorial-banner-body">${config.body}</p>
                    <a href="${config.ctaUrl}" class="editorial-banner-cta">${config.ctaText}</a>
                </div>
                <div class="editorial-banner-imagery editorial-banner-imagery-right">${rightImgs}</div>
            </div>
        `;
    }
    return section;
}

function observeEditorialBanners() {
    const banners = document.querySelectorAll('.editorial-banner');
    if (!banners.length) return;
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('editorial-banner-visible');
            }
        });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.1 });
    banners.forEach(function(b) { observer.observe(b); });
}

function observeValentineBanner() {
    const banner = document.querySelector('.valentine-banner');
    if (!banner) return;
    const video = document.getElementById('valentineBannerVideo');
    function playValentineVideo() {
        if (video && video.paused) {
            video.play().catch(function() {});
        }
    }
    playValentineVideo();
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('valentine-banner-visible');
                playValentineVideo();
            }
        });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.15 });
    observer.observe(banner);
}

// Render Products with enhanced features
function renderProducts(filteredProducts = null) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';

    const productsToShow = filteredProducts || products;
    const BANNER_EVERY = 8;
    let bannerIndex = 0;

    for (let i = 0; i < productsToShow.length; i++) {
        const product = productsToShow[i];
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const isInWishlist = wishlist.some(item => item.id === product.id && item.category === product.category);
        
        // Calculate discount percentage if originalPrice exists
        let discountHTML = '';
        if (product.originalPrice && product.originalPrice > product.price) {
            const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
            discountHTML = `<div class="product-badge badge-sale">SAVE ${discountPercent}%</div>`;
        } else if (product.badge) {
            discountHTML = `<div class="product-badge badge-${product.badge}">${product.badge === 'sale' ? 'SALE' : product.badge === 'new' ? 'NEW' : 'HOT'}</div>`;
        }
        
        const originalPriceHTML = product.originalPrice && product.originalPrice > product.price ? 
            `<span class="original-price">KSH ${product.originalPrice.toLocaleString()}</span>` : '';
        
        const ratingHTML = product.rating ? `<div class="product-rating"><span class="stars">${'⭐'.repeat(Math.floor(product.rating))}</span><span class="rating-count">(${product.reviewCount || 0})</span></div>` : '';
        
        // Check stock
        const stock = product.stock !== undefined ? product.stock : 10; // Default to 10 if not set
        const isSoldOut = stock === 0;
        
        // Parse colors - support both old format (array of strings) and new format (array of objects)
        let colors = product.colors || [{name: 'Black', hex: '#000000'}, {name: 'White', hex: '#FFFFFF'}, {name: 'Pink', hex: '#FF69B4'}, {name: 'Brown', hex: '#8B4513'}];
        if (colors.length > 0 && typeof colors[0] === 'string') {
            // Convert old format to new format
            colors = colors.map(c => {
                const colorMap = {
                    'black': {name: 'Black', hex: '#000000'},
                    'white': {name: 'White', hex: '#FFFFFF'},
                    'pink': {name: 'Pink', hex: '#FF69B4'},
                    'brown': {name: 'Brown', hex: '#8B4513'},
                    'red': {name: 'Red', hex: '#FF0000'},
                    'blue': {name: 'Blue', hex: '#0000FF'},
                    'green': {name: 'Green', hex: '#008000'},
                    'yellow': {name: 'Yellow', hex: '#FFFF00'}
                };
                return colorMap[c.toLowerCase()] || {name: c, hex: '#808080'};
            });
        }
        
        // Create color swatches HTML
        const colorsHTML = colors.length > 0 ? `
            <div style="margin: 0.5rem 0; display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                <strong style="font-size: 0.85rem; color: #666;">Colors:</strong>
                ${colors.map(c => `
                    <div style="display: flex; align-items: center; gap: 0.3rem;">
                        <div style="width: 24px; height: 24px; border-radius: 50%; background: ${c.hex || '#808080'}; border: 2px solid #ddd; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" title="${c.name || c}"></div>
                        <span style="font-size: 0.85rem; color: #666;">${c.name || c}</span>
                    </div>
                `).join('')}
            </div>
        ` : '';
        const soldOutHTML = isSoldOut ? `<div style="position: absolute; top: 10px; right: 10px; background: #d32f2f; color: white; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 700; font-size: 0.9rem; z-index: 10; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">SOLD OUT</div>` : '';
        
        // Check if user is admin (function to check dynamically)
        function checkIfAdmin() {
            const ADMIN_EMAILS = [
                'preston.mwendwa@riarauniversity.ac.ke',
                'isabellewambui@gmail.com'
            ];
            const isAdminEmail = (email) => {
                if (!email) return false;
                const normalizedEmail = email.toLowerCase().trim();
                return ADMIN_EMAILS.some(adminEmail => adminEmail.toLowerCase() === normalizedEmail);
            };
            
            if (typeof userAuth !== 'undefined' && userAuth) {
                const currentUser = userAuth.getCurrentUser();
                if (currentUser && currentUser.email && isAdminEmail(currentUser.email)) {
                    return true;
                }
            }
            // Check localStorage
            const currentUserJson = localStorage.getItem('slayStationCurrentUser');
            if (currentUserJson) {
                try {
                    const currentUser = JSON.parse(currentUserJson);
                    if (currentUser && currentUser.email && isAdminEmail(currentUser.email)) {
                        return true;
                    }
                } catch (e) {}
            }
            // Check admin login flag
            const adminLoggedIn = localStorage.getItem('slayStationAdminLoggedIn');
            const adminEmail = localStorage.getItem('slayStationAdminEmail');
            if (adminLoggedIn === 'true' && adminEmail && isAdminEmail(adminEmail)) {
                return true;
            }
            return false;
        }
        const isAdmin = checkIfAdmin();
        const editButtonHTML = isAdmin ? `<button class="edit-product-btn-frontend" onclick="editProductFromFrontend(${product.id}, '${product.category || 'bag'}')" style="width: 100%; margin-top: 0.5rem; padding: 0.6rem; background: linear-gradient(135deg, var(--primary-pink), var(--purple)); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.9rem; transition: all 0.3s;">✏️ Edit Product</button>` : '';
        
        // Luxury-style: derive brand from category or product name
        const categoryToBrand = {
            'coach-bag': 'Coach',
            'Coach-bag': 'Coach',
            'tote-bag': 'Tote',
            'on sale': 'Coach',
            'shoulder-bag': 'Coach',
            'miu miu-bag': 'Miu Miu'
        };
        const brand = product.brand || categoryToBrand[product.category] || (product.name.toLowerCase().indexOf('lv') !== -1 ? 'Louis Vuitton' : (product.name.split(' ')[0] || 'Slay Station'));
        const condition = product.condition || 'Excellent';

        // Make card clickable to navigate to detail page
        productCard.onclick = (e) => {
            if (e.target.closest('button') || e.target.closest('a')) return;
            window.location.href = `product-detail.html?id=${product.id}`;
        };

        productCard.innerHTML = `
            ${discountHTML}
            ${soldOutHTML}
            <span class="product-likes" aria-label="Favorites">❤️ ${(product.wishlistCount || Math.floor(Math.random() * 80) + 10)}</span>
            <button class="wishlist-heart ${isInWishlist ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlistItem(${product.id})" title="${isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}">
                ${isInWishlist ? '❤️' : '🤍'}
            </button>
            <div class="product-image" style="background: #fff; ${isSoldOut ? 'opacity: 0.6; filter: grayscale(50%);' : ''}">
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='👜';">
            </div>
            <div class="product-card-body">
                <span class="product-brand">${brand.toUpperCase()}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-condition">Condition: ${condition}</p>
                <div class="product-price">
                    ${product.originalPrice && product.originalPrice > product.price ? `<span class="original-price">KSH ${product.originalPrice.toLocaleString()}</span>` : ''}
                    <span class="product-price-current">KSH ${product.price.toLocaleString()}</span>
                    ${product.originalPrice && product.originalPrice > product.price ? `<span class="product-price-off">${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off</span>` : ''}
                </div>
                ${editButtonHTML}
            </div>
        `;
        productsGrid.appendChild(productCard);

        if ((i + 1) % BANNER_EVERY === 0 && i + 1 < productsToShow.length && editorialBanners.length > 0) {
            const config = editorialBanners[bannerIndex % editorialBanners.length];
            productsGrid.appendChild(createEditorialBanner(config, bannerIndex));
            bannerIndex++;
        }
    }
    observeEditorialBanners();
    var bagsItemCount = document.getElementById('bagsItemCount');
    if (bagsItemCount) bagsItemCount.textContent = productsToShow.length;
}

// Render Featured Offers
function renderFeaturedOffers() {
    const featuredGrid = document.getElementById('featuredProductsGrid');
    if (!featuredGrid) return;
    
    // Get products with offers (have originalPrice or badge 'sale')
    const featuredProducts = products.filter(p => 
        (p.originalPrice && p.originalPrice > p.price) || 
        p.badge === 'sale' || 
        p.category === 'on sale'
    ).slice(0, 4); // Show first 4 featured products
    
    featuredGrid.innerHTML = '';
    
    featuredProducts.forEach(product => {
        const discountPercent = product.originalPrice && product.originalPrice > product.price ? 
            Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 
            (product.badge === 'sale' ? 20 : 15);
        
        const originalPriceHTML = product.originalPrice && product.originalPrice > product.price ? 
            `<span class="original-price">KSH ${product.originalPrice.toLocaleString()}</span>` : '';
        
        const card = document.createElement('div');
        card.className = 'featured-product-card';
        card.onclick = () => window.location.href = `product-detail.html?id=${product.id}`;
        
        card.innerHTML = `
            <div class="featured-product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='👜';">
                <div class="featured-product-badge">SAVE ${discountPercent}%</div>
            </div>
            <div class="featured-product-name">${product.name.toUpperCase()}</div>
            <div class="featured-product-price">
                <span>KSH ${product.price.toLocaleString()} KES</span>
                ${originalPriceHTML}
            </div>
        `;
        
        featuredGrid.appendChild(card);
    });
}

// Render Scrolling Products
function renderScrollingProducts() {
    const scrollContent = document.getElementById('scrollContent');
    if (!scrollContent) return;
    
    // Get a selection of products for scrolling
    const scrollProducts = products.slice(0, 8); // Use first 8 products
    
    // Create the scrolling content structure
    let html = '';
    
    // First set: "IN OUR BAG" + products + "SO YOU CAN BE IN YOURS" + products
    html += '<div class="scroll-text">IN OUR BAG</div>';
    html += '<div class="scroll-products">';
    scrollProducts.forEach(product => {
        html += `<div class="scroll-product-item"><img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='👜';"></div>`;
    });
    html += '</div>';
    html += '<div class="scroll-text">SO YOU CAN BE IN YOURS</div>';
    html += '<div class="scroll-products">';
    scrollProducts.forEach(product => {
        html += `<div class="scroll-product-item"><img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='👜';"></div>`;
    });
    html += '</div>';
    
    // Duplicate for seamless loop
    html += '<div class="scroll-text">IN OUR BAG</div>';
    html += '<div class="scroll-products">';
    scrollProducts.forEach(product => {
        html += `<div class="scroll-product-item"><img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='👜';"></div>`;
    });
    html += '</div>';
    html += '<div class="scroll-text">SO YOU CAN BE IN YOURS</div>';
    html += '<div class="scroll-products">';
    scrollProducts.forEach(product => {
        html += `<div class="scroll-product-item"><img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='👜';"></div>`;
    });
    html += '</div>';
    
    scrollContent.innerHTML = html;
}

// Render Brand Banner (Product Showcase Style)
function renderBrandBanner() {
    const brandBannerContent = document.getElementById('brandBannerContent');
    if (!brandBannerContent) return;
    
    // Get more products for the banner (use more products to show lots on screen)
    const bannerProducts = products.slice(0, 20); // Use 20 products for better showcase
    
    let html = '';
    
    // Create product cards with discount badges
    bannerProducts.forEach(product => {
        // Calculate discount if originalPrice exists
        let discountHTML = '';
        let originalPriceHTML = '';
        
        if (product.originalPrice && product.originalPrice > product.price) {
            const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
            discountHTML = `<div class="banner-product-badge">SAVE ${discountPercent}%</div>`;
            originalPriceHTML = `<span class="original-price">KSH ${product.originalPrice.toLocaleString()}</span>`;
        } else if (product.badge === 'sale') {
            discountHTML = `<div class="banner-product-badge">SAVE 15%</div>`;
        }
        
        html += `
            <div class="banner-product-card" onclick="window.location.href='product-detail.html?id=${product.id}'">
                <div class="banner-product-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='👜';">
                    ${discountHTML}
                </div>
                <div class="banner-product-info">
                    <div class="banner-product-name">${product.name.toUpperCase()}</div>
                    <div class="banner-product-price">
                        <span>KSH ${product.price.toLocaleString()} KES</span>
                        ${originalPriceHTML}
                    </div>
                </div>
            </div>
        `;
    });
    
    // Duplicate for seamless loop
    bannerProducts.forEach(product => {
        let discountHTML = '';
        let originalPriceHTML = '';
        
        if (product.originalPrice && product.originalPrice > product.price) {
            const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
            discountHTML = `<div class="banner-product-badge">SAVE ${discountPercent}%</div>`;
            originalPriceHTML = `<span class="original-price">KSH ${product.originalPrice.toLocaleString()}</span>`;
        } else if (product.badge === 'sale') {
            discountHTML = `<div class="banner-product-badge">SAVE 15%</div>`;
        }
        
        html += `
            <div class="banner-product-card" onclick="window.location.href='product-detail.html?id=${product.id}'">
                <div class="banner-product-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='👜';">
                    ${discountHTML}
                </div>
                <div class="banner-product-info">
                    <div class="banner-product-name">${product.name.toUpperCase()}</div>
                    <div class="banner-product-price">
                        <span>KSH ${product.price.toLocaleString()} KES</span>
                        ${originalPriceHTML}
                    </div>
                </div>
            </div>
        `;
    });
    
    brandBannerContent.innerHTML = html;
}

// Filter Products
function filterProducts(filter) {
    currentFilter = filter;
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    var target = (typeof event !== 'undefined' && event && event.target) ? event.target : null;
    if (target && target.classList && target.classList.contains('filter-btn')) {
        target.classList.add('active');
    } else {
        var match = document.querySelector('.filter-btn[data-filter="' + filter + '"]');
        if (match) match.classList.add('active');
    }
    
    let filtered = products;
    
    if (filter === 'coach-bag') {
        filtered = products.filter(p => p.category === 'coach-bag');
    } else if (filter === 'tote-bag') {
        filtered = products.filter(p => p.category === 'tote-bag');
    } else if (filter === 'sale') {
        filtered = products.filter(p => p.badge === 'sale');
    } else if (filter === 'new') {
        filtered = products.filter(p => p.badge === 'new');
    }
    
    // Apply search query if exists
    if (searchQuery) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Bags page: apply sidebar filters (designers, bag type, price) – apply immediately when any checkbox/Apply is used
    filtered = applyBagsSidebarFilters(filtered);

    // Bags page: apply sort
    var sortSelect = document.getElementById('bagsSortBy');
    var sortMobile = document.getElementById('bagsSortByMobile');
    var sortValue = (sortSelect && sortSelect.value) || (sortMobile && sortMobile.value) || 'newest';
    if (sortSelect) sortSelect.value = sortValue;
    if (sortMobile) sortMobile.value = sortValue;
    if (sortValue === 'price-asc') filtered = filtered.slice().sort(function(a, b) { return (a.price || 0) - (b.price || 0); });
    else if (sortValue === 'price-desc') filtered = filtered.slice().sort(function(a, b) { return (b.price || 0) - (a.price || 0); });
    else if (sortValue === 'newest') filtered = filtered.slice().sort(function(a, b) { return (b.id || 0) - (a.id || 0); });
    
    renderProducts(filtered);

    // Bags page: update item count (sidebar + mobile toolbar)
    var countEl = document.getElementById('bagsItemCount');
    if (countEl) countEl.textContent = filtered.length;
    var countMobile = document.getElementById('bagsItemCountMobile');
    if (countMobile) countMobile.textContent = filtered.length;
    
    // Show message if no results
    if (filtered.length === 0) {
        const productsGrid = document.getElementById('productsGrid');
        if (productsGrid) {
            productsGrid.innerHTML = '<p style="text-align: center; padding: 3rem; color: #666; grid-column: 1 / -1;">No products found. Try a different search or filter! 💕</p>';
        }
    }
}

// Bags page: apply sidebar filters (designers, bag type, price). Returns filtered array.
function applyBagsSidebarFilters(arr) {
    if (!arr || !arr.length) return arr;
    var sidebar = document.querySelector('.bags-sidebar');
    if (!sidebar) return arr;
    var filtered = arr;

    // Designers: any checked -> product name or category matches
    var designerChecks = sidebar.querySelectorAll('input[name="designer"]:checked');
    if (designerChecks.length) {
        var designerValues = Array.from(designerChecks).map(function(c) { return c.value.toLowerCase(); });
        filtered = filtered.filter(function(p) {
            var name = (p.name || '').toLowerCase();
            var cat = (p.category || '').toLowerCase();
            return designerValues.some(function(d) {
                if (d === 'coach') return name.indexOf('coach') !== -1 || cat.indexOf('coach') !== -1;
                if (d === 'louis vuitton') return name.indexOf('lv') !== -1 || name.indexOf('louis') !== -1;
                return name.indexOf(d) !== -1 || cat.indexOf(d.replace(/\s/g, '')) !== -1;
            });
        });
    }

    // Bag type: any checked -> name/description contains type
    var bagTypeChecks = sidebar.querySelectorAll('input[name="bagType"]:checked');
    if (bagTypeChecks.length) {
        var typeValues = Array.from(bagTypeChecks).map(function(c) { return c.value.toLowerCase(); });
        filtered = filtered.filter(function(p) {
            var text = ((p.name || '') + ' ' + (p.description || '')).toLowerCase();
            return typeValues.some(function(t) { return text.indexOf(t) !== -1; });
        });
    }

    // Price: checkboxes (KSH ranges)
    var priceChecks = sidebar.querySelectorAll('input[name="price"]:checked');
    if (priceChecks.length) {
        var priceRanges = Array.from(priceChecks).map(function(c) { return c.value; });
        filtered = filtered.filter(function(p) {
            var pr = p.price || 0;
            return priceRanges.some(function(r) {
                if (r === 'under3000') return pr < 3000;
                if (r === '3000-4000') return pr >= 3000 && pr < 4000;
                if (r === '4000-5000') return pr >= 4000 && pr < 5000;
                if (r === '5000-6000') return pr >= 5000 && pr < 6000;
                if (r === 'over6000') return pr >= 6000;
                return false;
            });
        });
    }

    // Min/Max price inputs (KSH)
    var minIn = document.getElementById('bagsPriceMin');
    var maxIn = document.getElementById('bagsPriceMax');
    if (minIn && minIn.value !== '') {
        var minVal = parseInt(minIn.value, 10);
        if (!isNaN(minVal)) filtered = filtered.filter(function(p) { return (p.price || 0) >= minVal; });
    }
    if (maxIn && maxIn.value !== '') {
        var maxVal = parseInt(maxIn.value, 10);
        if (!isNaN(maxVal)) filtered = filtered.filter(function(p) { return (p.price || 0) <= maxVal; });
    }

    return filtered;
}

// Bags page: when any filter checkbox or Apply is used, apply immediately
function initBagsSidebarImmediateFilter() {
    var sidebar = document.querySelector('.bags-sidebar');
    if (!sidebar) return;
    sidebar.querySelectorAll('input[name="designer"], input[name="bagType"], input[name="price"]').forEach(function(input) {
        input.addEventListener('change', function() {
            if (typeof filterProducts === 'function') filterProducts(currentFilter);
        });
    });
    var applyBtn = document.getElementById('bagsApplyPrice');
    if (applyBtn) {
        applyBtn.addEventListener('click', function() {
            if (typeof filterProducts === 'function') filterProducts(currentFilter);
        });
    }
}

// Search Products
function searchProducts() {
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchQuery = searchInput.value.trim();
        filterProducts(currentFilter);
    }
}

// Mobile header search: sync to productSearch, run search, scroll to products
function mobileSearchSubmit() {
    const mobileInput = document.getElementById('mobileProductSearch');
    const productInput = document.getElementById('productSearch');
    if (mobileInput && productInput) {
        productInput.value = mobileInput.value.trim();
        searchQuery = mobileInput.value.trim();
        filterProducts(currentFilter);
    }
    const productsEl = document.getElementById('products');
    if (productsEl) productsEl.scrollIntoView({ behavior: 'smooth' });
}

// Header search icon: show search bar, focus input (desktop and mobile)
function focusProductSearch() {
    var navSearchBar = document.getElementById('navSearchBar');
    var navSearchInput = document.getElementById('navSearchInput');
    if (navSearchBar && navSearchInput) {
        document.body.classList.add('search-open');
        if (document.querySelector('.navbar')) document.querySelector('.navbar').classList.add('search-open');
        navSearchBar.setAttribute('aria-hidden', 'false');
        navSearchInput.focus();
    }
}

// Header search bar: submit search and close
function submitHeaderSearch() {
    var navSearchInput = document.getElementById('navSearchInput');
    var productInput = document.getElementById('productSearch');
    if (navSearchInput && productInput) {
        var q = navSearchInput.value.trim();
        productInput.value = q;
        if (typeof searchQuery !== 'undefined') searchQuery = q;
        if (typeof filterProducts === 'function') filterProducts(typeof currentFilter !== 'undefined' ? currentFilter : 'all');
    }
    var productsEl = document.getElementById('products');
    if (productsEl) productsEl.scrollIntoView({ behavior: 'smooth' });
    document.body.classList.remove('search-open');
    var nav = document.querySelector('.navbar');
    if (nav) nav.classList.remove('search-open');
    var navSearchBar = document.getElementById('navSearchBar');
    if (navSearchBar) navSearchBar.setAttribute('aria-hidden', 'true');
}

function initHeaderSearchBar() {
    var navSearchBtn = document.getElementById('navSearchBtn');
    var navSearchBar = document.getElementById('navSearchBar');
    var navSearchInput = document.getElementById('navSearchInput');
    var navSearchClose = document.getElementById('navSearchClose');
    if (!navSearchBar || !navSearchInput) return;
    if (navSearchBtn) {
        navSearchBtn.addEventListener('click', function() { focusProductSearch(); });
    }
    if (navSearchClose) {
        navSearchClose.addEventListener('click', function() {
            document.body.classList.remove('search-open');
            var nav = document.querySelector('.navbar');
            if (nav) nav.classList.remove('search-open');
            navSearchBar.setAttribute('aria-hidden', 'true');
            navSearchInput.value = '';
        });
    }
    navSearchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            submitHeaderSearch();
        }
    });
}

// Bags page: Read More / Read Less (Fashionphile-style)
function toggleBagsIntro() {
    const intro = document.querySelector('.bags-page-intro');
    const btn = document.getElementById('bagsReadMore');
    if (!intro || !btn) return;
    intro.classList.toggle('expanded');
    btn.textContent = intro.classList.contains('expanded') ? 'Read Less' : 'Read More';
    btn.setAttribute('aria-expanded', intro.classList.contains('expanded'));
}

// Bags page: style links and type cards – set search/filter and run search
function initBagsPageLinks() {
    document.querySelectorAll('.bags-style-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const productSearch = document.getElementById('productSearch');
            if (this.dataset.filter) {
                if (typeof filterProducts === 'function') filterProducts(this.dataset.filter);
                if (productSearch) productSearch.value = '';
            } else if (this.dataset.style && productSearch) {
                productSearch.value = this.dataset.style;
                if (typeof searchProducts === 'function') searchProducts();
            }
        });
    });
    document.querySelectorAll('.bag-type-card').forEach(function(card) {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            var productSearch = document.getElementById('productSearch');
            if (this.dataset.filter) {
                if (typeof filterProducts === 'function') filterProducts(this.dataset.filter);
                if (productSearch) productSearch.value = '';
            } else if (this.dataset.style && productSearch) {
                productSearch.value = this.dataset.style;
                if (typeof searchProducts === 'function') searchProducts();
            }
        });
    });
}

// Bags page: horizontal scroll arrows (left and right)
function initBagsTypesScroll() {
    var scrollEl = document.getElementById('bagTypesScroll');
    var prevBtn = document.getElementById('bagTypesScrollPrev');
    var nextBtn = document.getElementById('bagTypesScrollNext');
    if (scrollEl && prevBtn) {
        prevBtn.addEventListener('click', function() {
            scrollEl.scrollBy({ left: -220, behavior: 'smooth' });
        });
    }
    if (scrollEl && nextBtn) {
        nextBtn.addEventListener('click', function() {
            scrollEl.scrollBy({ left: 220, behavior: 'smooth' });
        });
    }
}

// Bags page: collapsible filter groups
function initBagsFilterGroups() {
    document.querySelectorAll('.bags-filter-group-toggle').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var group = this.closest('.bags-filter-group');
            if (group) group.classList.toggle('collapsed');
            var expanded = group && !group.classList.contains('collapsed');
            this.setAttribute('aria-expanded', expanded);
        });
    });
}

// Bags page: sort select (desktop + mobile)
function initBagsSort() {
    var sortSelect = document.getElementById('bagsSortBy');
    var sortMobile = document.getElementById('bagsSortByMobile');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            if (sortMobile) sortMobile.value = sortSelect.value;
            if (typeof filterProducts === 'function') filterProducts(currentFilter);
        });
    }
    if (sortMobile) {
        sortMobile.addEventListener('change', function() {
            if (sortSelect) sortSelect.value = sortMobile.value;
            if (typeof filterProducts === 'function') filterProducts(currentFilter);
        });
    }
}

// Bags page: Save Search (placeholder)
function initBagsSaveSearch() {
    var btn = document.getElementById('bagsSaveSearch');
    var btnMobile = document.getElementById('bagsSaveSearchMobile');
    if (btn) {
        btn.addEventListener('click', function() {
            if (typeof showNotification === 'function') showNotification('Search saved!');
            else alert('Search saved!');
        });
    }
    if (btnMobile) {
        btnMobile.addEventListener('click', function() {
            if (typeof showNotification === 'function') showNotification('Search saved!');
            else alert('Search saved!');
        });
    }
}

// Bags page: mobile filter panel – open/close
function initBagsMobileFilter() {
    var filterBtn = document.getElementById('bagsMobileFilterBtn');
    var sidebar = document.getElementById('bagsSidebar');
    var backdrop = document.getElementById('bagsFilterBackdrop');
    var closeBtn = document.getElementById('bagsSidebarClose');
    function openFilter() {
        document.body.classList.add('bags-filter-open');
        if (backdrop) backdrop.setAttribute('aria-hidden', 'false');
    }
    function closeFilter() {
        document.body.classList.remove('bags-filter-open');
        if (backdrop) backdrop.setAttribute('aria-hidden', 'true');
    }
    if (filterBtn) filterBtn.addEventListener('click', openFilter);
    if (backdrop) backdrop.addEventListener('click', closeFilter);
    if (closeBtn) closeBtn.addEventListener('click', closeFilter);
    var applyBtn = document.getElementById('bagsApplyPrice');
    if (applyBtn) applyBtn.addEventListener('click', function() { closeFilter(); });
}

// Allow Enter key to search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
    const mobileSearchInput = document.getElementById('mobileProductSearch');
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                mobileSearchSubmit();
            }
        });
    }

    // Bags page: style links and type cards
    initBagsPageLinks();
    initBagsTypesScroll();
    initBagsFilterGroups();
    initBagsSidebarImmediateFilter();
    initBagsSort();
    initBagsSaveSearch();
    initBagsMobileFilter();
    initHeaderSearchBar();
    // Set initial item count (filterProducts will update it when filters run)
    var countEl = document.getElementById('bagsItemCount');
    if (countEl && typeof products !== 'undefined') countEl.textContent = products.length;
    
    // Initialize cart count on page load
    updateCartCount();

    // Animate Valentine banner on scroll
    observeValentineBanner();
    
    // Check if user just logged in and wants to checkout
    const pendingCheckout = sessionStorage.getItem('pendingCheckout');
    const urlParams = new URLSearchParams(window.location.search);
    if (pendingCheckout === 'true' || urlParams.get('redirect') === 'checkout') {
        sessionStorage.removeItem('pendingCheckout');
        // Check if user is now logged in
        let currentUser = null;
        if (typeof window.getCurrentUser === 'function') {
            currentUser = window.getCurrentUser();
        } else if (typeof userAuth !== 'undefined' && userAuth) {
            currentUser = userAuth.getCurrentUser();
        } else {
            const userJson = localStorage.getItem('slayStationCurrentUser');
            if (userJson) {
                currentUser = JSON.parse(userJson);
            }
        }
        
        if (currentUser && cart.length > 0) {
            // User is logged in and has items in cart, open checkout
            setTimeout(() => {
                checkout();
            }, 500);
        }
    }
    
});


// Add to Cart (shared across all pages)
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Check stock
    const stock = product.stock !== undefined ? product.stock : 10; // Default to 10 if not set
    if (stock === 0) {
        showNotification('This product is sold out! ❌');
        return;
    }

    // Get all items from shared cart
    const allCartItems = getSharedCart();
    const existingItem = allCartItems.find(item => item.id === productId && item.category === product.category);
    
    // Check if adding this item would exceed stock
    const currentQuantity = existingItem ? existingItem.quantity : 0;
    if (currentQuantity + 1 > stock) {
        showNotification(`Only ${stock} units available in stock! ⚠️`);
        return;
    }
    
    if (existingItem) {
        existingItem.quantity += 1;
        cart = allCartItems;
    } else {
        const itemToAdd = {
            ...product,
            quantity: 1,
            category: product.category || 'bag'
        };
        allCartItems.push(itemToAdd);
        cart = allCartItems;
    }

    saveCartToStorage();
    // Force update cart count immediately and ensure it's visible
    updateCartCount();
    // Also update after a short delay to ensure DOM is ready
    setTimeout(() => {
        updateCartCount();
    }, 100);
    showNotification(`${product.name} added to cart! ✨`);
    
    // Update cart display and You May Also Like if cart is open (only if overlay exists)
    const cartOverlayEl = document.getElementById('cartOverlay');
    if (cartOverlayEl && cartOverlayEl.classList.contains('active')) {
        renderCart();
        if (typeof renderYouMayAlsoLike === 'function') renderYouMayAlsoLike('cartYouMayAlsoLike');
    }
}

// Remove from Cart (works across all pages)
function removeFromCart(productId) {
    // Load from shared cart to ensure we have all items
    const allCartItems = getSharedCart();
    cart = allCartItems.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartCount();
    renderCart();
    showNotification('Item removed from cart');
}

// Update Quantity (works across all pages)
function updateQuantity(productId, change) {
    // Load from shared cart to ensure we have all items
    const allCartItems = getSharedCart();
    cart = allCartItems;
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCartToStorage();
        updateCartCount();
        renderCart();
    }
}

// Render Cart (shows all items from all pages)
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Load all items from shared cart
    const allCartItems = getSharedCart();
    cart = allCartItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty. Start shopping!</p>';
        cartTotal.textContent = '0';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        const imageHTML = item.image && item.image.includes('images/') 
            ? `<img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.parentElement.innerHTML='👜';">`
            : item.image || '👜';
        
        cartItem.innerHTML = `
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
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toLocaleString();
}

// Update Cart Count (shows count from all pages)
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (!cartCount) {
        // Cart count element doesn't exist yet, try again later
        setTimeout(updateCartCount, 100);
        return;
    }
    // Get total from shared cart to include items from all pages
    const allCartItems = getSharedCart();
    const totalItems = allCartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
    
    // Update cart count text
    cartCount.textContent = totalItems;
    
    // Show badge when items exist; hide when empty (clear inline display so CSS applies)
    if (totalItems > 0) {
        cartCount.style.display = '';
        cartCount.style.visibility = 'visible';
        cartCount.removeAttribute('aria-hidden');
    } else {
        cartCount.style.display = 'none';
        cartCount.setAttribute('aria-hidden', 'true');
    }
}

// Toggle Cart
function toggleCart() {
    const cartOverlay = document.getElementById('cartOverlay');
    if (!cartOverlay) return;
    cartOverlay.classList.toggle('active');
    
    if (cartOverlay.classList.contains('active')) {
        // Reload cart from storage to get latest items from all pages
        loadCartFromStorage();
        renderCart();
        if (typeof renderYouMayAlsoLike === 'function') renderYouMayAlsoLike('cartYouMayAlsoLike');
        // Restore dismissed state of recommended section for this session
        var section = document.getElementById('cartYouMayAlsoLikeSection') || document.querySelector('.you-may-also-like--cart');
        if (section) {
            try {
                if (sessionStorage.getItem('cartYmalDismissed') === 'true') section.classList.add('is-dismissed');
                else section.classList.remove('is-dismissed');
            } catch (e) {}
        }
    }
}

// Global variable to store calculated delivery fee
let calculatedDeliveryFee = null;
let calculatedDeliveryDistance = null;
let deliveryFeeCalculationTimeout = null;

// Map picker variables
let mapPicker = null;
let mapPickerMarker = null;
let mapPickerInitialized = false;
let pinnedLocation = null;

// Checkout – go to full-page checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add some items first. 💕');
        return;
    }
    saveCartToStorage();
    window.location.href = 'checkout.html';
}

// You May Also Like – render carousel (Fashionphile-style)
function renderYouMayAlsoLike(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const productList = typeof products !== 'undefined' ? products : (window.products || []);
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
        const href = (typeof productDetailUrl === 'function' ? productDetailUrl(p.id) : null) || 'product-detail.html?id=' + p.id || 'index.html#products';
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

// Dismiss recommended section in cart (persists for session)
function dismissCartRecommendations() {
    var section = document.getElementById('cartYouMayAlsoLikeSection') || document.querySelector('.you-may-also-like--cart');
    if (section) {
        section.classList.add('is-dismissed');
        try { sessionStorage.setItem('cartYmalDismissed', 'true'); } catch (e) {}
    }
}

// You May Also Like – scroll carousel
function scrollYouMayAlsoLike(containerId, direction) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const step = 180;
    container.scrollBy({ left: direction * step, behavior: 'smooth' });
}
function handlePaymentMethodChange(paymentMethod) {
    const mpesaSection = document.getElementById('mpesaPaymentSection');
    const mpesaAmount = document.getElementById('mpesaAmount');
    const mpesaPhoneInput = document.getElementById('mpesaPhone');
    
    if (paymentMethod === 'mpesa') {
        if (mpesaSection) mpesaSection.style.display = 'block';
        if (mpesaPhoneInput) { mpesaPhoneInput.required = true; mpesaPhoneInput.removeAttribute('data-optional'); }
        // Update M-Pesa amount with FULL TOTAL (items + delivery fee)
        if (mpesaAmount) {
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const giftWrap = document.getElementById('giftWrap')?.checked ? 80 : 0;
            const deliveryFee = calculatedDeliveryFee !== null ? calculatedDeliveryFee : getDeliveryFee();
            const fullTotal = subtotal + giftWrap + deliveryFee;
            mpesaAmount.textContent = `KSH ${fullTotal.toLocaleString()}`;
        }
    } else {
        if (mpesaSection) mpesaSection.style.display = 'none';
        if (mpesaPhoneInput) { mpesaPhoneInput.required = false; mpesaPhoneInput.setAttribute('data-optional', '1'); }
    }
    
    updateOrderSummary();
}

// East African countries and major cities (for checkout Country / County-City dropdowns)
var EAST_AFRICA_CITIES = {
    KE: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Malindi', 'Lamu', 'Nanyuki', 'Kakamega', 'Kisii', 'Kericho', 'Kitale', 'Garissa', 'Machakos', 'Meru', 'Nyeri', 'Embu', 'Murang\'a', 'Kiambu', 'Kajiado', 'Narok', 'Westlands', 'Parklands', 'Karen', 'Rongai', 'Ruaka'],
    TZ: ['Dar es Salaam', 'Mwanza', 'Arusha', 'Dodoma', 'Mbeya', 'Tanga', 'Zanzibar', 'Morogoro', 'Tabora', 'Kigoma', 'Moshi', 'Bukoba'],
    UG: ['Kampala', 'Entebbe', 'Gulu', 'Lira', 'Mbarara', 'Jinja', 'Mbale', 'Fort Portal', 'Kasese', 'Masaka', 'Hoima', 'Arua'],
    RW: ['Kigali', 'Butare', 'Gisenyi', 'Gitarama', 'Ruhengeri', 'Byumba', 'Cyangugu', 'Kibuye', 'Gikongoro'],
    BI: ['Bujumbura', 'Gitega', 'Ngozi', 'Bururi', 'Rutana', 'Makamba', 'Muyinga', 'Kayanza', 'Ruyigi'],
    SS: ['Juba', 'Malakal', 'Wau', 'Yambio', 'Rumbek', 'Bor', 'Aweil', 'Torit', 'Bentiu', 'Yei'],
    SO: ['Mogadishu', 'Hargeisa', 'Kismayo', 'Bosaso', 'Garowe', 'Baidoa', 'Beledweyne', 'Galkayo', 'Merca'],
    ET: ['Addis Ababa', 'Dire Dawa', 'Mek\'ele', 'Gondar', 'Bahir Dar', 'Hawassa', 'Harar', 'Jimma', 'Bishoftu', 'Shashamane', 'Dessie', 'Jijiga'],
    DJ: ['Djibouti', 'Ali Sabieh', 'Tadjourah', 'Obock', 'Dikhil', 'Arta'],
    ER: ['Asmara', 'Keren', 'Massawa', 'Assab', 'Mendefera', 'Barentu', 'Keren', 'Teseney', 'Agordat']
};

function onCheckoutCountryChange(countryCode) {
    var countySelect = document.getElementById('orderCounty');
    if (!countySelect) return;
    countySelect.innerHTML = '<option value="">Select county/city</option>';
    var cities = EAST_AFRICA_CITIES[countryCode];
    if (cities && cities.length) {
        cities.forEach(function(city) {
            var opt = document.createElement('option');
            opt.value = city;
            opt.textContent = city;
            countySelect.appendChild(opt);
        });
    }
    // Hide map when country changes (will show again if user selects Nairobi for Kenya)
    var mapContainer = document.getElementById('mapPickerContainer');
    if (mapContainer) mapContainer.style.display = 'none';
    var addressTextarea = document.getElementById('address');
    if (addressTextarea) addressTextarea.style.display = 'block';
}

function onCheckoutCountyChange(countyValue) {
    // When Nairobi is selected, show the map picker so user can pin exact location
    var mapContainer = document.getElementById('mapPickerContainer');
    var addressTextarea = document.getElementById('address');
    var useMapBtn = document.getElementById('useMapPickerBtn');
    var useTextBtn = document.getElementById('useTextAddressBtn');
    if (countyValue === 'Nairobi' && mapContainer && addressTextarea) {
        mapContainer.style.display = 'block';
        addressTextarea.style.display = 'none';
        if (useMapBtn) useMapBtn.style.display = 'none';
        if (useTextBtn) useTextBtn.style.display = 'inline-block';
        if (!mapPickerInitialized) initializeMapPicker();
    } else if (mapContainer && addressTextarea) {
        mapContainer.style.display = 'none';
        addressTextarea.style.display = 'block';
        if (useMapBtn) useMapBtn.style.display = 'inline-block';
        if (useTextBtn) useTextBtn.style.display = 'none';
    }
}

// Toggle between map picker and text input
function toggleMapPicker() {
    const mapContainer = document.getElementById('mapPickerContainer');
    const addressTextarea = document.getElementById('address');
    const useMapBtn = document.getElementById('useMapPickerBtn');
    const useTextBtn = document.getElementById('useTextAddressBtn');
    
    if (!mapContainer || !addressTextarea) return;
    
    const isMapVisible = mapContainer.style.display !== 'none';
    
    if (isMapVisible) {
        // Switch to text input
        mapContainer.style.display = 'none';
        addressTextarea.style.display = 'block';
        if (useMapBtn) useMapBtn.style.display = 'inline-block';
        if (useTextBtn) useTextBtn.style.display = 'none';
    } else {
        // Switch to map picker
        mapContainer.style.display = 'block';
        addressTextarea.style.display = 'none';
        if (useMapBtn) useMapBtn.style.display = 'none';
        if (useTextBtn) useTextBtn.style.display = 'inline-block';
        
        // Initialize map if not already done
        if (!mapPickerInitialized) {
            initializeMapPicker();
        }
    }
}

// Initialize map picker
function initializeMapPicker() {
    const mapDiv = document.getElementById('mapPicker');
    if (!mapDiv || mapPickerInitialized) return;
    
    // Center map on Nairobi (Westlands area)
    const nairobiCenter = [-1.2644, 36.8006];
    // Shop location: Westlands Market, Shop B15 (used for delivery fee origin)
    const shopLocation = [-1.2654, 36.8067];
    
    // Initialize map
    mapPicker = L.map('mapPicker', {
        center: nairobiCenter,
        zoom: 13,
        zoomControl: true
    });
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(mapPicker);
    
    // Add fixed shop pin (Slay Station – Westlands Market, Shop B15)
    const shopIcon = L.divIcon({
        className: 'map-shop-pin',
        html: '<span style="font-size:24px;line-height:1;" aria-hidden="true">🏪</span>',
        iconSize: [32, 32],
        iconAnchor: [16, 32]
    });
    const shopMarker = L.marker(shopLocation, { icon: shopIcon, draggable: false }).addTo(mapPicker);
    shopMarker.bindPopup('<strong>Slay Station</strong><br>Westlands Market, Shop B15, Nairobi');
    
    // Add a marker at the center (default delivery location – user can drag)
    mapPickerMarker = L.marker(nairobiCenter, {
        draggable: true
    }).addTo(mapPicker);
    
    // Add popup to marker
    mapPickerMarker.bindPopup('📍 Your delivery location<br>Drag to adjust').openPopup();
    
    // Handle map click - move marker, calculate fee immediately, then get address
    mapPicker.on('click', function(e) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;
        
        // Move marker to clicked location
        mapPickerMarker.setLatLng([lat, lng]);
        
        // Calculate delivery fee immediately (so it shows even before reverse geocode)
        if (typeof window.calculateDeliveryFeeFromCoords === 'function') {
            window.calculateDeliveryFeeFromCoords(lat, lng, function(result) {
                if (typeof applyDeliveryFeeResult === 'function') applyDeliveryFeeResult(result);
            });
        }
        
        // Reverse geocode to get address text
        reverseGeocode(lat, lng);
    });
    
    // Handle marker drag - calculate fee and get address when marker is moved
    mapPickerMarker.on('dragend', function(e) {
        const lat = e.target.getLatLng().lat;
        const lng = e.target.getLatLng().lng;
        
        if (typeof window.calculateDeliveryFeeFromCoords === 'function') {
            window.calculateDeliveryFeeFromCoords(lat, lng, function(result) {
                if (typeof applyDeliveryFeeResult === 'function') applyDeliveryFeeResult(result);
            });
        }
        reverseGeocode(lat, lng);
    });
    
    // Try to get user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;
                
                // Check if user is in Nairobi area (optional - you can remove this check)
                mapPicker.setView([userLat, userLng], 15);
                mapPickerMarker.setLatLng([userLat, userLng]);
                
                // Reverse geocode user's location
                reverseGeocode(userLat, userLng);
            },
            function(error) {
                console.log('Could not get user location:', error);
                // Use default Nairobi center
                reverseGeocode(nairobiCenter[0], nairobiCenter[1]);
            }
        );
    } else {
        // Geolocation not supported, use default
        reverseGeocode(nairobiCenter[0], nairobiCenter[1]);
    }
    
    mapPickerInitialized = true;
}

// Geocode address string to show on map
function geocodeAddressToMap(address) {
    if (!address || address.trim().length < 5) return;
    
    // Initialize map if not already done (but don't show it)
    if (!mapPickerInitialized) {
        const mapDiv = document.getElementById('mapPicker');
        if (mapDiv) {
            initializeMapPicker();
        } else {
            return; // Map div doesn't exist
        }
    }
    
    if (!mapPicker || !mapPickerInitialized) return;
    
    // Use Nominatim geocoding
    const searchQuery = encodeURIComponent(
        address.includes('Nairobi') || address.includes('Kenya') 
            ? address 
            : `${address}, Nairobi, Kenya`
    );
    
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}&limit=1`)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const lat = parseFloat(data[0].lat);
                const lng = parseFloat(data[0].lon);
                
                // Update map view and marker
                mapPicker.setView([lat, lng], 15);
                if (mapPickerMarker) {
                    mapPickerMarker.setLatLng([lat, lng]);
                    mapPickerMarker.setPopupContent(`📍 ${address.substring(0, 50)}${address.length > 50 ? '...' : ''}`).openPopup();
                }
                
                // Store pinned location
                pinnedLocation = { lat, lng };
            }
        })
        .catch(error => {
            console.error('Geocoding error:', error);
        });
}

// Reverse geocode coordinates to get address
function reverseGeocode(lat, lng) {
    pinnedLocation = { lat, lng };
    
    // Update marker popup
    if (mapPickerMarker) {
        mapPickerMarker.setPopupContent('📍 Getting address...').openPopup();
    }
    
    // Use Nominatim reverse geocoding
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`)
        .then(response => response.json())
        .then(data => {
            if (data && data.display_name) {
                const address = data.display_name;
                
                // Update address textarea
                const addressTextarea = document.getElementById('address');
                if (addressTextarea) {
                    addressTextarea.value = address;
                    addressTextarea.dispatchEvent(new Event('input', { bubbles: true }));
                }
                // Calculate delivery fee from pinned coordinates (immediate, no geocode delay)
                if (typeof window.calculateDeliveryFeeFromCoords === 'function') {
                    window.calculateDeliveryFeeFromCoords(lat, lng, function(result) {
                        applyDeliveryFeeResult(result);
                    });
                }
                
                // Update marker popup
                if (mapPickerMarker) {
                    mapPickerMarker.setPopupContent(`📍 ${address.substring(0, 50)}${address.length > 50 ? '...' : ''}`).openPopup();
                }
                
                console.log('Address from map:', address);
            } else {
                // Fallback: use coordinates
                const addressTextarea = document.getElementById('address');
                if (addressTextarea) {
                    addressTextarea.value = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
                    addressTextarea.dispatchEvent(new Event('input', { bubbles: true }));
                }
                if (typeof window.calculateDeliveryFeeFromCoords === 'function') {
                    window.calculateDeliveryFeeFromCoords(lat, lng, function(result) { applyDeliveryFeeResult(result); });
                }
                if (mapPickerMarker) {
                    mapPickerMarker.setPopupContent(`📍 Location: ${lat.toFixed(6)}, ${lng.toFixed(6)}`).openPopup();
                }
            }
        })
        .catch(error => {
            console.error('Reverse geocoding error:', error);
            const addressTextarea = document.getElementById('address');
            if (addressTextarea) {
                addressTextarea.value = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
                addressTextarea.dispatchEvent(new Event('input', { bubbles: true }));
            }
            if (typeof window.calculateDeliveryFeeFromCoords === 'function') {
                window.calculateDeliveryFeeFromCoords(lat, lng, function(result) { applyDeliveryFeeResult(result); });
            }
            if (mapPickerMarker) {
                mapPickerMarker.setPopupContent(`📍 Location: ${lat.toFixed(6)}, ${lng.toFixed(6)}`).openPopup();
            }
        });
}

// Apply delivery fee result to UI (used by address input and by map pin)
function applyDeliveryFeeResult(result) {
    const deliveryFeeDisplay = document.getElementById('deliveryFeeDisplay');
    const deliveryFeeAmount = document.getElementById('deliveryFeeAmount');
    const deliveryFeeDetails = document.getElementById('deliveryFeeDetails');
    const deliveryFeeDistance = document.getElementById('deliveryFeeDistance');
    if (!deliveryFeeDisplay || !deliveryFeeAmount) return;
    deliveryFeeDisplay.style.display = 'block';
    if (result.calculated && result.fee != null && result.withinNairobi) {
        calculatedDeliveryFee = result.fee;
        calculatedDeliveryDistance = result.distance;
        deliveryFeeDisplay.style.background = 'linear-gradient(135deg, #E3F2FD, #BBDEFB)';
        deliveryFeeDisplay.style.borderLeftColor = '#2196F3';
        deliveryFeeAmount.textContent = `KSH ${result.fee.toLocaleString()}`;
        deliveryFeeDetails.textContent = result.message || 'Based on distance from Westlands Market (KSH 40/km)';
        deliveryFeeDistance.textContent = result.distance ? `📍 ${result.distance} km from shop` : '';
        const paymentMethod = document.getElementById('payment')?.value;
        const mpesaAmount = document.getElementById('mpesaAmount');
        if (paymentMethod === 'mpesa' && mpesaAmount) {
            var subtotal = (typeof cart !== 'undefined' && cart) ? cart.reduce(function(s, i) { return s + (i.price * i.quantity); }, 0) : 0;
            var giftWrap = document.getElementById('giftWrap')?.checked ? 80 : 0;
            mpesaAmount.textContent = 'KSH ' + (subtotal + giftWrap + result.fee).toLocaleString();
        }
    } else if (result.outsideNairobi) {
        calculatedDeliveryFee = null;
        calculatedDeliveryDistance = null;
        deliveryFeeDisplay.style.background = 'linear-gradient(135deg, #FFF3CD, #FFE69C)';
        deliveryFeeDisplay.style.borderLeftColor = '#FFC107';
        deliveryFeeAmount.textContent = 'Admin will set';
        deliveryFeeDetails.textContent = 'Address is outside Nairobi';
        deliveryFeeDistance.textContent = '📧 You will be notified when admin sets the delivery fee';
        var mpesaAmount = document.getElementById('mpesaAmount');
        if (mpesaAmount) mpesaAmount.textContent = 'TBD by Admin';
    } else {
        calculatedDeliveryFee = null;
        calculatedDeliveryDistance = null;
        deliveryFeeDisplay.style.background = 'linear-gradient(135deg, #E3F2FD, #BBDEFB)';
        deliveryFeeDisplay.style.borderLeftColor = '#2196F3';
        deliveryFeeAmount.textContent = 'Unable to calculate';
        deliveryFeeDetails.textContent = result.message || 'Fee will be set by admin.';
        deliveryFeeDistance.textContent = '';
    }
    if (typeof updateOrderSummary === 'function') updateOrderSummary();
}

// Setup real-time delivery fee calculation
function setupDeliveryFeeCalculator() {
    const addressInput = document.getElementById('address');
    const deliveryFeeDisplay = document.getElementById('deliveryFeeDisplay');
    const deliveryFeeAmount = document.getElementById('deliveryFeeAmount');
    const deliveryFeeDetails = document.getElementById('deliveryFeeDetails');
    const deliveryFeeDistance = document.getElementById('deliveryFeeDistance');
    
    if (!addressInput || !deliveryFeeDisplay) return;
    
    // Remove existing listeners to avoid duplicates
    const newAddressInput = addressInput.cloneNode(true);
    addressInput.parentNode.replaceChild(newAddressInput, addressInput);
    
    // Add input event listener with debouncing
    newAddressInput.addEventListener('input', function() {
        const address = this.value.trim();
        
        // Clear previous timeout
        if (deliveryFeeCalculationTimeout) {
            clearTimeout(deliveryFeeCalculationTimeout);
        }
        
        if (address.length < 5) {
            // Address too short, hide display
            deliveryFeeDisplay.style.display = 'none';
            calculatedDeliveryFee = null;
            calculatedDeliveryDistance = null;
            updateOrderSummary();
            return;
        }
        
        // Show loading state
        deliveryFeeDisplay.style.display = 'block';
        deliveryFeeAmount.textContent = 'Calculating...';
        deliveryFeeDetails.textContent = 'Finding your location...';
        deliveryFeeDistance.textContent = '';
        
        // Debounce: wait 1 second after user stops typing
        deliveryFeeCalculationTimeout = setTimeout(() => {
            // First, geocode the address to show on map if map is initialized
            // This works even if map picker container is hidden
            if (mapPickerInitialized && mapPicker) {
                geocodeAddressToMap(address);
            }
            
            // Then calculate delivery fee
            if (typeof window.autoCalculateDeliveryFee === 'function') {
                window.autoCalculateDeliveryFee(address, (result) => {
                    if (result.calculated && result.fee && result.withinNairobi) {
                        // Within Nairobi - show calculated fee
                        calculatedDeliveryFee = result.fee;
                        calculatedDeliveryDistance = result.distance;
                        
                        // Update display
                        deliveryFeeDisplay.style.background = 'linear-gradient(135deg, #E3F2FD, #BBDEFB)';
                        deliveryFeeDisplay.style.borderLeftColor = '#2196F3';
                        deliveryFeeAmount.textContent = `KSH ${result.fee.toLocaleString()}`;
                        deliveryFeeDetails.textContent = `Based on distance from Westlands Market (KSH 40/km)`;
                        deliveryFeeDistance.textContent = `📍 ${result.distance} km from shop`;
                        
                        // Update M-Pesa amount if M-Pesa is selected (full total)
                        const paymentMethod = document.getElementById('payment')?.value;
                        const mpesaAmount = document.getElementById('mpesaAmount');
                        if (paymentMethod === 'mpesa' && mpesaAmount) {
                            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                            const giftWrap = document.getElementById('giftWrap')?.checked ? 80 : 0;
                            const fullTotal = subtotal + giftWrap + result.fee;
                            mpesaAmount.textContent = `KSH ${fullTotal.toLocaleString()}`;
                        }
                        
                        // Update order summary with new fee
                        updateOrderSummary();
                    } else if (result.outsideNairobi) {
                        // Outside Nairobi - show admin message
                        calculatedDeliveryFee = null;
                        calculatedDeliveryDistance = null;
                        
                        // Update display with warning style
                        deliveryFeeDisplay.style.background = 'linear-gradient(135deg, #FFF3CD, #FFE69C)';
                        deliveryFeeDisplay.style.borderLeftColor = '#FFC107';
                        deliveryFeeAmount.textContent = 'Admin will set';
                        deliveryFeeDetails.textContent = 'Address is outside Nairobi';
                        deliveryFeeDistance.textContent = '📧 You will be notified when admin sets the delivery fee';
                        
                        // Update M-Pesa amount if M-Pesa is selected
                        const paymentMethod = document.getElementById('payment')?.value;
                        const mpesaAmount = document.getElementById('mpesaAmount');
                        if (paymentMethod === 'mpesa' && mpesaAmount) {
                            mpesaAmount.textContent = 'TBD by Admin';
                        }
                        
                        // Update order summary
                        updateOrderSummary();
                    } else {
                        // Calculation failed or address not found
                        calculatedDeliveryFee = null;
                        calculatedDeliveryDistance = null;
                        deliveryFeeDisplay.style.background = 'linear-gradient(135deg, #E3F2FD, #BBDEFB)';
                        deliveryFeeDisplay.style.borderLeftColor = '#2196F3';
                        deliveryFeeAmount.textContent = 'Unable to calculate';
                        deliveryFeeDetails.textContent = result.message || 'Address not found. Fee will be set by admin.';
                        deliveryFeeDistance.textContent = '';
                        updateOrderSummary();
                    }
                });
            } else {
                // Calculator not available
                deliveryFeeDisplay.style.display = 'none';
                calculatedDeliveryFee = null;
                calculatedDeliveryDistance = null;
                updateOrderSummary();
            }
        }, 1000); // 1 second debounce
    });
    
    // Also calculate if address is already filled when modal opens
    if (newAddressInput.value.trim().length >= 5) {
        newAddressInput.dispatchEvent(new Event('input'));
    }
}

// Update order summary (called on checkout and when gift wrap is toggled)
function updateOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');
    if (!orderSummary) return;
    
    const giftWrapChecked = document.getElementById('giftWrap') ? document.getElementById('giftWrap').checked : false;
    
    // Render order summary
    let summaryHTML = '';
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        summaryHTML += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span>${item.name} x${item.quantity}</span>
                <span>KSH ${itemTotal.toLocaleString()}</span>
            </div>
        `;
    });
    
    const giftWrapCost = giftWrapChecked ? 80 : 0;
    
    // Use calculated delivery fee if available, otherwise use default
    const deliveryFee = calculatedDeliveryFee !== null ? calculatedDeliveryFee : getDeliveryFee();
    const deliveryFeeLabel = calculatedDeliveryFee !== null 
        ? `Delivery Fee ${calculatedDeliveryDistance ? `(${calculatedDeliveryDistance} km)` : ''}`
        : 'Delivery Fee (paid separately)';
    const deliveryFeeNote = calculatedDeliveryFee !== null 
        ? '<div style="font-size: 0.75rem; color: #666; margin-top: 0.25rem; font-style: italic;">📍 Auto-calculated from Westlands Market (KSH 40/km within Nairobi)</div>'
        : '<div style="font-size: 0.75rem; color: #FF9800; margin-top: 0.25rem; font-weight: 600;">📧 Admin will set delivery fee and notify you</div>';
    
    const itemsTotal = subtotal + giftWrapCost;
    const fullTotal = itemsTotal + deliveryFee;
    
    // Get payment method
    const paymentMethod = document.getElementById('payment')?.value;
    
    summaryHTML += `
        <div style="display: flex; justify-content: space-between; margin-top: 1rem; padding-top: 1rem; border-top: 2px solid white;">
            <span>Subtotal</span>
            <span>KSH ${subtotal.toLocaleString()}</span>
        </div>
        ${giftWrapChecked ? `
        <div style="display: flex; justify-content: space-between; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid rgba(255,255,255,0.3);">
            <span>Gift Card with Message 💌</span>
            <span>KSH 80</span>
        </div>
        ` : ''}
        <div style="display: flex; justify-content: space-between; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid rgba(255,255,255,0.3); ${calculatedDeliveryFee !== null ? 'color: #1976D2; font-weight: 600;' : 'color: #999;'} font-size: 0.9rem;">
            <span>${deliveryFeeLabel}</span>
            <span>KSH ${deliveryFee.toLocaleString()}</span>
        </div>
        ${deliveryFeeNote}
        <div style="display: flex; justify-content: space-between; margin-top: 1rem; padding-top: 1rem; border-top: 2px solid white; font-weight: bold; font-size: 1.2rem;">
            <span>Items Total</span>
            <span>KSH ${itemsTotal.toLocaleString()}</span>
        </div>
        ${paymentMethod === 'mpesa' ? `
        <div style="display: flex; justify-content: space-between; margin-top: 0.5rem; padding: 0.75rem; background: rgba(76, 175, 80, 0.2); border-radius: 8px; font-weight: bold; font-size: 1.3rem; color: #4CAF50;">
            <span>💰 M-Pesa Total (Items + Delivery)</span>
            <span>KSH ${fullTotal.toLocaleString()}</span>
        </div>
        <div style="margin-top: 0.5rem; padding: 0.75rem; background: rgba(255,255,255,0.1); border-radius: 8px; font-size: 0.85rem; color: #fff;">
            <strong>📱 M-Pesa Payment:</strong> You will pay the full amount (KSH ${fullTotal.toLocaleString()}) via M-Pesa now. Enter the confirmation code after payment.
        </div>
        ` : paymentMethod === 'cash' ? `
        <div style="margin-top: 0.5rem; padding: 0.75rem; background: rgba(255,255,255,0.1); border-radius: 8px; font-size: 0.85rem; color: #fff;">
            <strong>💰 Cash on Delivery:</strong> You will pay for items (KSH ${itemsTotal.toLocaleString()}) on delivery. Delivery fee (KSH ${deliveryFee.toLocaleString()}) will be paid separately via M-Pesa after admin sets it.
        </div>
        ` : `
        <div style="margin-top: 0.5rem; padding: 0.75rem; background: rgba(255,255,255,0.1); border-radius: 8px; font-size: 0.85rem; color: #fff;">
            <strong>Note:</strong> Select a payment method to see payment details.
        </div>
        `}
    `;
    
    orderSummary.innerHTML = summaryHTML;
}

// Close Order Modal
function closeOrderModal() {
    var modal = document.getElementById('orderModal');
    if (modal) modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

// STK Push Modal Functions
let stkPushOrderData = null;
let stkPushCallback = null;

function showStkPushModal(amount, orderData, callback) {
    stkPushOrderData = orderData;
    stkPushCallback = callback;
    
    const stkModal = document.getElementById('stkPushModal');
    const stkAmount = document.getElementById('stkAmount');
    const phonePrompt = document.getElementById('stkPhonePrompt');
    const pinEntry = document.getElementById('stkPinEntry');
    const processing = document.getElementById('stkProcessing');
    const success = document.getElementById('stkSuccess');
    
    console.log('showStkPushModal called', { amount, stkModal: !!stkModal, stkAmount: !!stkAmount });
    
    if (!stkModal) {
        console.error('STK Push Modal element not found!');
        alert('Error: Payment modal not found. Please refresh the page.');
        return;
    }
    
    if (stkAmount) {
        stkAmount.textContent = `KSH ${amount.toLocaleString()}`;
    }
    
    // Show modal - add active class and force display
    stkModal.classList.add('active');
    
    // Remove any inline display:none first
    const currentStyle = stkModal.getAttribute('style') || '';
    const newStyle = currentStyle.replace(/display\s*:\s*none[^;]*;?/gi, '').trim();
    stkModal.setAttribute('style', newStyle);
    
    // Force visibility with important flags using cssText
    // Use higher z-index for mobile devices
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const zIndexValue = isMobileDevice ? '99999' : '5000';
    
    stkModal.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        min-height: 100vh !important;
        background: rgba(0, 0, 0, 0.85) !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        z-index: ${zIndexValue} !important;
        visibility: visible !important;
        opacity: 1 !important;
        padding: ${isMobileDevice ? '10px' : '20px'} !important;
        overflow-y: auto !important;
    `.trim();
    
    // Hide all sections initially
    if (phonePrompt) phonePrompt.style.display = 'none';
    if (pinEntry) pinEntry.style.display = 'none';
    if (processing) processing.style.display = 'block'; // Show processing immediately
    if (success) success.style.display = 'none';
    
    // Update phone number in prompt if available
    if (orderData && orderData.mpesaPhone) {
        const phoneDisplay = document.getElementById('stkPhoneNumber');
        if (phoneDisplay) {
            // Format phone number (add 0 prefix if needed)
            let phoneNumber = orderData.mpesaPhone.toString().trim();
            if (phoneNumber.length === 9 && !phoneNumber.startsWith('0')) {
                phoneNumber = '0' + phoneNumber;
            }
            phoneDisplay.textContent = phoneNumber;
        }
    } else {
        // Fallback to regular phone if M-Pesa phone not provided
        const phoneDisplay = document.getElementById('stkPhoneNumber');
        if (phoneDisplay) {
            if (orderData && orderData.phone) {
                phoneDisplay.textContent = orderData.phone;
            } else {
                phoneDisplay.textContent = 'Your Phone';
            }
        }
    }
    
    // Prevent body scroll on mobile when modal is open
    if (isMobileDevice) {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        window.scrollTo(0, 0);
    }
    
    // Debug: Verify modal is visible after a short delay
    setTimeout(() => {
        const computed = window.getComputedStyle(stkModal);
        const isVisible = computed.display === 'flex';
        console.log('STK Modal Visibility Check:', {
            display: computed.display,
            visibility: computed.visibility,
            zIndex: computed.zIndex,
            isVisible: isVisible,
            hasActiveClass: stkModal.classList.contains('active'),
            isMobile: isMobileDevice,
            modalElement: stkModal,
            modalRect: stkModal.getBoundingClientRect()
        });
        
        // If still not visible, force it one more time with mobile-specific fixes
        if (!isVisible) {
            console.warn('Modal still not visible, forcing display again');
            
            stkModal.style.cssText = `
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                min-height: 100vh !important;
                background: rgba(0, 0, 0, 0.85) !important;
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                z-index: 99999 !important;
                visibility: visible !important;
                opacity: 1 !important;
                padding: ${isMobileDevice ? '10px' : '20px'} !important;
                overflow-y: auto !important;
                margin: 0 !important;
            `;
            stkModal.classList.add('active');
            
            // Prevent body scroll on mobile
            if (isMobileDevice) {
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
                window.scrollTo(0, 0);
            }
        }
    }, 150);
    
    // Immediately send STK Push when modal opens (no PIN entry needed on website)
    // The PIN should only be entered on the phone
    const useRealMpesa = typeof initiateStkPush !== 'undefined' && 
                         MPESA_CONFIG && 
                         MPESA_CONFIG.CONSUMER_KEY !== 'YOUR_CONSUMER_KEY_HERE';
    
    if (useRealMpesa && orderData && orderData.mpesaPhone) {
        // Send STK Push immediately
        sendStkPushImmediately(amount, orderData);
    }
}

// Function to send STK Push immediately (no PIN entry on website)
async function sendStkPushImmediately(amount, orderData) {
    try {
        const orderId = 'ORD' + Date.now();
        const phoneNumber = orderData.mpesaPhone;
        
        console.log('📱 Sending STK Push immediately...', {
            phone: phoneNumber,
            amount: amount,
            orderId: orderId
        });
        
        // Show processing state
        const processing = document.getElementById('stkProcessing');
        const phonePrompt = document.getElementById('stkPhonePrompt');
        const pinEntry = document.getElementById('stkPinEntry');
        
        if (phonePrompt) phonePrompt.style.display = 'none';
        if (pinEntry) pinEntry.style.display = 'none';
        if (processing) {
            processing.style.display = 'block';
            // Update message to tell user to check phone
            const processingText = processing.querySelector('p');
            if (processingText) {
                processingText.textContent = '📱 Check your phone and enter your M-Pesa PIN to complete the payment';
            }
        }
        
        const result = await initiateStkPush(phoneNumber, amount, orderId);
        
        console.log('📥 STK Push result:', result);
        
        if (result.success) {
            // STK Push sent successfully
            stkPushOrderData.checkoutRequestID = result.checkoutRequestID;
            stkPushOrderData.merchantRequestID = result.merchantRequestID;
            stkPushOrderData.paymentStatus = 'pending_callback';
            
            // Show processing state
            const processingDiv = document.getElementById('stkProcessing');
            const success = document.getElementById('stkSuccess');
            const failed = document.getElementById('stkFailed');
            const confirmationCodeSpan = document.getElementById('stkConfirmationCode');
            
            if (success) success.style.display = 'none';
            if (failed) failed.style.display = 'none';
            if (processingDiv) {
                processingDiv.style.display = 'block';
                // Update processing message
                const processingText = processingDiv.querySelector('p');
                if (processingText) {
                    processingText.textContent = 'Payment request sent! Check your phone and enter your M-Pesa PIN to complete the payment...';
                }
            }
            if (confirmationCodeSpan) {
                confirmationCodeSpan.textContent = 'Waiting for confirmation...';
            }
            
            // Poll for payment status (or wait for callback)
            pollPaymentStatus(result.checkoutRequestID);
        } else {
            // Handle error - show failure state
            const processingDiv = document.getElementById('stkProcessing');
            const successDiv = document.getElementById('stkSuccess');
            const failedDiv = document.getElementById('stkFailed');
            const failureMessage = document.getElementById('stkFailureMessage');
            
            if (processingDiv) processingDiv.style.display = 'none';
            if (successDiv) successDiv.style.display = 'none';
            if (failedDiv) {
                failedDiv.style.display = 'block';
            }
            if (failureMessage) {
                // Check for various error conditions
                const errorText = result.error || '';
                const isBackendError = result.needsBackend || 
                                     errorText.includes('Failed to fetch') || 
                                     errorText.includes('localhost') ||
                                     errorText.includes('Backend server') ||
                                     errorText.includes('not deployed') ||
                                     errorText.includes('Cannot reach') ||
                                     errorText.includes('not responding') ||
                                     errorText.includes('CORS') ||
                                     errorText.includes('NetworkError');
                
                if (isBackendError) {
                    failureMessage.innerHTML = '⚠️ M-Pesa payment is currently unavailable.<br><br>Please use <strong>Cash on Delivery</strong> or <strong>Card</strong> payment instead.<br><br>Thank you for your understanding! 💕';
                } else if (errorText.includes('quota') || errorText.includes('exceeded')) {
                    failureMessage.innerHTML = '⚠️ Payment quota exceeded.<br><br>Please try again later or use <strong>Cash on Delivery</strong> or <strong>Card</strong> payment.';
                } else {
                    failureMessage.innerHTML = errorText || 'Payment could not be processed.<br><br>Please try again or use <strong>Cash on Delivery</strong>.';
                }
            }
        }
    } catch (error) {
        console.error('❌ Error sending STK Push:', error);
        alert('⚠️ Payment failed: ' + error.message);
        
        // Show error, allow retry
        const processingDiv = document.getElementById('stkProcessing');
        const phonePrompt = document.getElementById('stkPhonePrompt');
        if (processingDiv) processingDiv.style.display = 'none';
        if (phonePrompt) phonePrompt.style.display = 'block';
    }
}

function closeStkPushModal() {
    const stkModal = document.getElementById('stkPushModal');
    if (stkModal) {
        stkModal.classList.remove('active');
        stkModal.style.cssText = 'display: none !important;';
    }
    stkPushOrderData = null;
    stkPushCallback = null;
}

function proceedToPinEntry() {
    const phonePrompt = document.getElementById('stkPhonePrompt');
    const pinEntry = document.getElementById('stkPinEntry');
    
    if (phonePrompt) phonePrompt.style.display = 'none';
    if (pinEntry) {
        pinEntry.style.display = 'block';
        // Focus on PIN input
        const pinInput = document.getElementById('mpesaPinInput');
        if (pinInput) {
            setTimeout(() => pinInput.focus(), 100);
        }
    }
}

function goBackToPhonePrompt() {
    const phonePrompt = document.getElementById('stkPhonePrompt');
    const pinEntry = document.getElementById('stkPinEntry');
    
    if (pinEntry) pinEntry.style.display = 'none';
    if (phonePrompt) phonePrompt.style.display = 'block';
}

// This function is no longer needed - STK Push is sent immediately
// Keeping it for backward compatibility but it won't be called
async function confirmMpesaPayment() {
    // STK Push is now sent immediately when modal opens
    // PIN is entered on the phone, not on the website
    console.log('⚠️ confirmMpesaPayment called but STK Push should already be sent');
    alert('Payment request should already be sent. Please check your phone and enter your M-Pesa PIN there.');
    
    // If we're here, something went wrong - try to send again
    if (stkPushOrderData) {
        const amount = parseFloat(document.getElementById('stkAmount')?.textContent.replace(/[^\d.]/g, '') || '0');
        await sendStkPushImmediately(amount, stkPushOrderData);
    }
}

// Legacy simulation mode (kept for fallback - not used with real M-Pesa)
function useSimulationMode() {
    // Simulate payment processing (for development/testing or when passkey is missing)
    setTimeout(() => {
        // Generate confirmation code
        const confirmationCode = generateMpesaConfirmationCode();
        
        // Show success
        const processingDiv = document.getElementById('stkProcessing');
        const success = document.getElementById('stkSuccess');
        const confirmationCodeSpan = document.getElementById('stkConfirmationCode');
        
        if (processingDiv) processingDiv.style.display = 'none';
        if (success) success.style.display = 'block';
        if (confirmationCodeSpan) confirmationCodeSpan.textContent = confirmationCode;
        
        // Update order data with confirmation code
        if (stkPushOrderData) {
            stkPushOrderData.mpesaCode = confirmationCode;
            stkPushOrderData.paymentStatus = 'pending_verification';
        }
        
        // Call callback after 2 seconds to proceed with order
        setTimeout(() => {
            if (stkPushCallback) {
                stkPushCallback(stkPushOrderData, confirmationCode);
            }
            closeStkPushModal();
        }, 2000);
    }, 2000);
}

// Poll for payment status (if using real API)
async function pollPaymentStatus(checkoutRequestID, maxAttempts = 30) {
    if (typeof queryStkPushStatus === 'undefined') return;
    
    let attempts = 0;
    const pollInterval = setInterval(async () => {
        attempts++;
        
        try {
            const result = await queryStkPushStatus(checkoutRequestID);
            
            if (result.ResultCode === '0') {
                // Payment successful
                clearInterval(pollInterval);
                
                const receiptNumber = result.CallbackMetadata?.Item?.find(
                    item => item.Name === 'MpesaReceiptNumber'
                )?.Value || 'N/A';
                
                // Show success state
                const processingDiv = document.getElementById('stkProcessing');
                const successDiv = document.getElementById('stkSuccess');
                const failedDiv = document.getElementById('stkFailed');
                const confirmationCodeSpan = document.getElementById('stkConfirmationCode');
                
                if (processingDiv) processingDiv.style.display = 'none';
                if (failedDiv) failedDiv.style.display = 'none';
                if (successDiv) {
                    successDiv.style.display = 'block';
                }
                if (confirmationCodeSpan) {
                    confirmationCodeSpan.textContent = receiptNumber;
                }
                
                // Update order data
                if (stkPushOrderData) {
                    stkPushOrderData.mpesaCode = receiptNumber;
                    stkPushOrderData.paymentStatus = 'paid';
                    stkPushOrderData.itemsPaid = true;
                    stkPushOrderData.deliveryFeePaid = true;
                    
                    // Auto-set delivery fee for Nairobi customers who paid via M-Pesa
                    const address = stkPushOrderData.address || '';
                    if (address.toLowerCase().includes('nairobi')) {
                        // Use calculated fee if available, otherwise use default
                        const deliveryFee = calculatedDeliveryFee !== null ? calculatedDeliveryFee : getDeliveryFee();
                        stkPushOrderData.deliveryFee = deliveryFee;
                        stkPushOrderData.deliveryFeeAutoCalculated = true;
                        stkPushOrderData.deliveryFeeSet = true;
                        console.log('✅ Auto-set delivery fee for Nairobi customer:', deliveryFee);
                    }
                }
                
                // Save order immediately when payment is successful
                console.log('💾 Saving order after successful payment...');
                if (stkPushCallback) {
                    stkPushCallback(stkPushOrderData, receiptNumber);
                }
                
                // Close modal after 3 seconds
                setTimeout(() => {
                    closeStkPushModal();
                }, 3000);
            } else if (result.ResultCode !== '1037') {
                // Payment failed (1037 means still processing)
                clearInterval(pollInterval);
                
                // Show failure state
                const processingDiv = document.getElementById('stkProcessing');
                const successDiv = document.getElementById('stkSuccess');
                const failedDiv = document.getElementById('stkFailed');
                const failureMessage = document.getElementById('stkFailureMessage');
                
                if (processingDiv) processingDiv.style.display = 'none';
                if (successDiv) successDiv.style.display = 'none';
                if (failedDiv) {
                    failedDiv.style.display = 'block';
                }
                if (failureMessage) {
                    failureMessage.textContent = result.ResultDesc || 'Payment could not be processed. Please try again.';
                }
            }
        } catch (error) {
            console.error('Error polling payment status:', error);
        }
        
        if (attempts >= maxAttempts) {
            clearInterval(pollInterval);
            
            // Show failure state for timeout
            const processingDiv = document.getElementById('stkProcessing');
            const successDiv = document.getElementById('stkSuccess');
            const failedDiv = document.getElementById('stkFailed');
            const failureMessage = document.getElementById('stkFailureMessage');
            
            if (processingDiv) processingDiv.style.display = 'none';
            if (successDiv) successDiv.style.display = 'none';
            if (failedDiv) {
                failedDiv.style.display = 'block';
            }
            if (failureMessage) {
                failureMessage.textContent = 'Payment verification timeout. Please check your M-Pesa statement or try again.';
            }
        }
    }, 3000); // Poll every 3 seconds
}

function generateMpesaConfirmationCode() {
    // Generate a random confirmation code (format: ABC123XYZ)
    const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    const numbers = '0123456789';
    let code = '';
    
    // 3 letters
    for (let i = 0; i < 3; i++) {
        code += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    
    // 3 numbers
    for (let i = 0; i < 3; i++) {
        code += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    
    // 3 letters
    for (let i = 0; i < 3; i++) {
        code += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    
    return code;
}

// Handle Order Form Submission
const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const giftWrap = document.getElementById('giftWrap').checked;
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const total = subtotal + (giftWrap ? 80 : 0);
        
        // Handle M-Pesa payment
        const paymentMethod = formData.get('payment');
        const deliveryAddress = formData.get('address');
        
        // Calculate delivery fee
        const deliveryFee = calculatedDeliveryFee !== null ? calculatedDeliveryFee : getDeliveryFee();
        const fullTotal = total + deliveryFee;
        
        // Validate form
        const mpesaPhone = formData.get('mpesaPhone');
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        
        if (!name || !email || !phone || !deliveryAddress) {
            alert('⚠️ Please fill in all required fields');
            return;
        }
        
        if (!paymentMethod) {
            alert('⚠️ Please select a payment method');
            return;
        }
        
        // Validate M-Pesa phone number if M-Pesa is selected
        if (paymentMethod === 'mpesa') {
            if (!mpesaPhone || mpesaPhone.trim().length < 9) {
                alert('⚠️ Please enter a valid M-Pesa phone number (9-10 digits)\n\nExample: 0712345678');
                document.getElementById('mpesaPhone')?.focus();
                return;
            }
            // Format phone number (remove any spaces or dashes)
            const cleanPhone = mpesaPhone.replace(/[\s-]/g, '').trim();
            if (cleanPhone.length < 9 || cleanPhone.length > 10) {
                alert('⚠️ Please enter a valid M-Pesa phone number (9-10 digits)\n\nExample: 0712345678');
                document.getElementById('mpesaPhone')?.focus();
                return;
            }
        }
        
        // Format M-Pesa phone number
        let formattedMpesaPhone = mpesaPhone;
        if (paymentMethod === 'mpesa' && mpesaPhone) {
            formattedMpesaPhone = mpesaPhone.replace(/[\s-]/g, '').trim();
            // Add leading 0 if missing
            if (formattedMpesaPhone.length === 9 && !formattedMpesaPhone.startsWith('0')) {
                formattedMpesaPhone = '0' + formattedMpesaPhone;
            }
        }
        
        const orderCountry = formData.get('orderCountry') || '';
        const orderCounty = formData.get('orderCounty') || '';
        const orderData = {
            name: name,
            email: email,
            phone: phone,
            mpesaPhone: paymentMethod === 'mpesa' ? (formattedMpesaPhone || phone) : phone, // Use formatted M-Pesa phone
            address: deliveryAddress,
            orderCountry: orderCountry,
            orderCounty: orderCounty,
            payment: paymentMethod,
            items: cart.map(item => ({...item})),
            giftWrap: giftWrap,
            subtotal: subtotal,
            total: total,
            mpesaCode: null, // Will be set after STK push
            paymentStatus: paymentMethod === 'cash' ? 'pending' : 'pending',
            // Payment amounts
            itemsPaid: paymentMethod === 'mpesa' ? false : false, // Will be true after payment
            deliveryFeePaid: paymentMethod === 'mpesa' ? false : false, // Will be true after payment
            itemsPaymentMethod: paymentMethod === 'cash' ? 'cash_on_delivery' : paymentMethod === 'mpesa' ? 'mpesa_paid' : null,
            deliveryFee: null, // Will be auto-calculated
            deliveryFeeAutoCalculated: false,
            pinnedLocation: pinnedLocation || null // Include pinned location coordinates if available
        };
        
        // If M-Pesa, show "coming soon" and do not proceed with payment
        if (paymentMethod === 'mpesa') {
            e.preventDefault();
            e.stopPropagation();
            alert('📱 M-Pesa payment will be available soon.\n\nPlease use Cash on Delivery or Card payment for now. Thank you for your patience! 💕');
            return false;
        }
        
        // For cash on delivery, proceed directly
        proceedWithOrderPlacement(orderData, subtotal, giftWrap, paymentMethod, null, e);
        
        return; // Exit early, order will be created after payment or directly
    });
}

// Proceed with order placement (called after STK push payment or for cash)
function proceedWithOrderPlacement(orderData, subtotal, giftWrap, paymentMethod, mpesaCode, event) {
    const deliveryAddress = orderData.address;
    
    // Update order data with M-Pesa code if provided
    if (mpesaCode) {
        orderData.mpesaCode = mpesaCode;
        orderData.paymentStatus = 'pending_verification';
        orderData.itemsPaid = paymentMethod === 'mpesa' ? true : false;
        orderData.deliveryFeePaid = paymentMethod === 'mpesa' ? true : false;
    }
    
    // Auto-calculate delivery fee based on address
    // For M-Pesa payments in Nairobi, auto-set delivery fee (no manual addition needed)
    const isNairobi = deliveryAddress && deliveryAddress.toLowerCase().includes('nairobi');
    const isMpesaPaid = paymentMethod === 'mpesa' && mpesaCode;
    
    if (isNairobi && isMpesaPaid) {
        // For Nairobi customers who paid via M-Pesa, auto-set delivery fee
        const deliveryFee = calculatedDeliveryFee !== null ? calculatedDeliveryFee : getDeliveryFee();
        orderData.deliveryFee = deliveryFee;
        orderData.deliveryFeeAutoCalculated = true;
        orderData.deliveryFeeSet = true;
        orderData.withinNairobi = true;
        orderData.total = subtotal + (giftWrap ? 80 : 0) + deliveryFee;
        console.log(`✅ Auto-set delivery fee for Nairobi M-Pesa customer: KSH ${deliveryFee}`);
        
        // Continue with order creation
        createOrderWithData(orderData, subtotal, giftWrap, paymentMethod, mpesaCode, event);
    } else if (calculatedDeliveryFee !== null && calculatedDeliveryDistance !== null) {
        // Use the fee that was already calculated in real-time (within Nairobi)
        orderData.deliveryFee = calculatedDeliveryFee;
        orderData.deliveryFeeAutoCalculated = true;
        orderData.deliveryDistance = calculatedDeliveryDistance;
        orderData.withinNairobi = true;
        orderData.total = subtotal + (giftWrap ? 80 : 0) + calculatedDeliveryFee;
        
        console.log(`Using pre-calculated delivery fee: KSH ${calculatedDeliveryFee} (Distance: ${calculatedDeliveryDistance} km)`);
        
        // Continue with order creation
        createOrderWithData(orderData, subtotal, giftWrap, paymentMethod, mpesaCode, event);
    } else if (typeof window.autoCalculateDeliveryFee === 'function' && deliveryAddress) {
        // Calculate now if not already calculated
        window.autoCalculateDeliveryFee(deliveryAddress, (result) => {
            if (result.calculated && result.withinNairobi) {
                // Within Nairobi - use calculated fee
                orderData.deliveryFee = result.fee;
                orderData.deliveryFeeAutoCalculated = true;
                orderData.deliveryDistance = result.distance;
                orderData.withinNairobi = true;
                orderData.deliveryFeeCalculation = result;
                
                // Update order total to include delivery fee
                orderData.total = subtotal + (giftWrap ? 80 : 0) + result.fee;
                
                console.log(`Auto-calculated delivery fee: KSH ${result.fee} (Distance: ${result.distance} km)`);
            } else if (result.outsideNairobi) {
                // Outside Nairobi - admin will set fee manually
                orderData.deliveryFee = null;
                orderData.deliveryFeeAutoCalculated = false;
                orderData.withinNairobi = false;
                orderData.outsideNairobi = true;
                orderData.deliveryFeeCalculation = result;
                
                console.log(`Address outside Nairobi - admin will set delivery fee manually`);
            } else {
                // Could not calculate - admin will set manually
                orderData.deliveryFee = null;
                orderData.deliveryFeeAutoCalculated = false;
                orderData.withinNairobi = false;
                
                console.log(`Could not calculate delivery fee - admin will set manually`);
            }
            
            // Continue with order creation
            createOrderWithData(orderData, subtotal, giftWrap, paymentMethod, mpesaCode, event);
        });
    } else {
        // Continue without auto-calculation
        orderData.deliveryFee = null;
        orderData.deliveryFeeAutoCalculated = false;
        orderData.withinNairobi = false;
        createOrderWithData(orderData, subtotal, giftWrap, paymentMethod, mpesaCode, event);
    }
}

// Extracted order creation function
function createOrderWithData(orderData, subtotal, giftWrap, paymentMethod, mpesaCode, event) {
        
        // Check if user is logged in and link order to account
        let userId = null;
        if (typeof window.getCurrentUser === 'function') {
            const user = window.getCurrentUser();
            if (user) {
                userId = user.id;
                orderData.userId = userId;
            }
        }
        
        // Create order using admin.js function
        let order;
        if (typeof window.createOrder === 'function') {
            order = window.createOrder(orderData);
        } else {
            // Fallback if admin.js not loaded
            const orders = JSON.parse(localStorage.getItem('slayStationOrders') || '[]');
            const orderId = orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1;
            order = {
                id: orderId,
                date: new Date().toISOString(),
                ...orderData,
                status: 'pending',
                deliveryFee: orderData.deliveryFee || null, // Use auto-calculated fee if available
                deliveryFeePaid: orderData.deliveryFeePaid || false, // M-Pesa pays delivery fee upfront
                deliveryFeeSet: orderData.deliveryFeeAutoCalculated ? true : false,
                deliveryFeeNotificationSent: false,
                mpesaCode: orderData.mpesaCode || null,
                itemsPaid: orderData.itemsPaid || false, // M-Pesa pays items upfront
                itemsPaymentMethod: orderData.itemsPaymentMethod || null,
                notifications: []
            };
            orders.push(order);
            localStorage.setItem('slayStationOrders', JSON.stringify(orders));
        }
        
        // Calculate total for display
        const total = subtotal + (giftWrap ? 80 : 0);
        
        // Award points if user is logged in
        if (userId && typeof window.userAuth !== 'undefined') {
            const pointsEarned = window.userAuth.awardPointsForOrder(userId, orderData.total || total);
            if (pointsEarned > 0) {
                orderData.pointsEarned = pointsEarned;
            }
        }
        
        console.log('Order placed:', order);
        
        // Create confetti
        createConfetti();
        
        // Show success message with order ID and points
        let pointsMessage = '';
        if (orderData.pointsEarned) {
            pointsMessage = `\n⭐ You earned ${orderData.pointsEarned} points for this order!\n`;
        }
        
        const deliveryFee = orderData.deliveryFee || 0;
        const itemsTotal = subtotal + (giftWrap ? 80 : 0);
        const fullTotal = itemsTotal + deliveryFee;
        
        let paymentMessage = '';
        if (paymentMethod === 'mpesa') {
            paymentMessage = `\n💳 M-Pesa Payment: Full amount (KSH ${fullTotal.toLocaleString()}) paid via M-Pesa.\nYour payment confirmation code (${mpesaCode}) is being verified.\n`;
        } else if (paymentMethod === 'cash') {
            paymentMessage = `\n💰 Cash on Delivery:\n- Items (KSH ${itemsTotal.toLocaleString()}) will be paid on delivery.\n- Delivery fee (KSH ${deliveryFee > 0 ? deliveryFee.toLocaleString() : 'TBD'}) will be paid separately via M-Pesa after admin sets it.\n`;
        }
        
        // Send notification for new order
        if (typeof window.notifyOrderStatusChange === 'function') {
            window.notifyOrderStatusChange(order.id, 'pending', null);
        }
        
        alert(`🎉 Order Placed Successfully! 🎉\n\nThank you ${orderData.name}! Your order has been received.\n\nOrder #${order.id}\n\nItems: KSH ${itemsTotal.toLocaleString()}\n${deliveryFee > 0 ? `Delivery Fee: KSH ${deliveryFee.toLocaleString()}\n` : 'Delivery Fee: Will be set by admin\n'}${paymentMethod === 'mpesa' ? `Total Paid: KSH ${fullTotal.toLocaleString()}\n` : ''}${pointsMessage}${paymentMessage}\n📦 Your order is being processed.\n\nYou can track your order using Order #${order.id}!\n\nWe'll contact you soon! 💕`);
        
        // Clear cart completely
        cart = [];
        localStorage.setItem('slayStationCart', JSON.stringify([]));
        updateCartCount();
        
        // Update cart display if it's open
        if (document.getElementById('cartOverlay') && document.getElementById('cartOverlay').classList.contains('active')) {
            renderCart();
        }
        
        // Close modal and reset form
        closeOrderModal();
        if (event && event.target) {
            event.target.reset();
        } else {
            const orderForm = document.getElementById('orderForm');
            if (orderForm) {
                orderForm.reset();
            }
        }
        
        // Update auth UI to show new points
        if (typeof updateAuthUI === 'function') {
            updateAuthUI();
        }
}

// Save Cart to Local Storage (shared across all pages)
function saveCartToStorage() {
    localStorage.setItem('slayStationCart', JSON.stringify(cart));
}

// Get shared cart from localStorage
function getSharedCart() {
    const savedCart = localStorage.getItem('slayStationCart');
    if (savedCart) {
        return JSON.parse(savedCart);
    }
    return [];
}

// Sync cart with shared storage
function syncCartWithStorage() {
    const sharedCart = getSharedCart();
    // Merge shared cart items with current cart
    sharedCart.forEach(sharedItem => {
        const existingItem = cart.find(item => item.id === sharedItem.id && item.category === sharedItem.category);
        if (!existingItem) {
            cart.push(sharedItem);
        }
    });
    saveCartToStorage();
}

// Load Cart from Local Storage (shared across all pages)
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('slayStationCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Add category to products when adding to cart (resolve from bags, wallets, accessories, lip-care)
// Optional second arg: quantity (default 1). Does NOT open the cart overlay.
function addToCart(productId, qty) {
    var quantity = (typeof qty === 'number' && qty >= 1) ? Math.min(Math.floor(qty), 10) : 1;
    let product = typeof products !== 'undefined' ? products.find(p => p.id === productId) : null;
    if (!product && typeof walletProducts !== 'undefined') product = walletProducts.find(p => p.id === productId);
    if (!product && typeof accessoryProducts !== 'undefined') product = accessoryProducts.find(p => p.id === productId);
    if (!product && typeof lipCareProducts !== 'undefined') product = lipCareProducts.find(p => p.id === productId);
    if (!product) return;

    // Check stock
    const stock = product.stock !== undefined ? product.stock : 10; // Default to 10 if not set
    if (stock === 0) {
        if (typeof showNotification === 'function') {
            showNotification('This product is sold out! ❌');
        } else {
            alert('This product is sold out! ❌');
        }
        return;
    }

    // Check if item exists in shared cart across all pages
    const allCartItems = getSharedCart();
    const existingItem = allCartItems.find(item => item.id === productId && item.category === product.category);
    
    // Check if adding would exceed stock
    const currentQuantity = existingItem ? existingItem.quantity : 0;
    if (currentQuantity + quantity > stock) {
        if (typeof showNotification === 'function') {
            showNotification(`Only ${stock} units available in stock! ⚠️`);
        } else {
            alert(`Only ${stock} units available in stock! ⚠️`);
        }
        return;
    }
    
    if (existingItem) {
        existingItem.quantity += quantity;
        cart = allCartItems;
    } else {
        const itemToAdd = {
            ...product,
            quantity: quantity,
            category: product.category || 'bag'
        };
        cart.push(itemToAdd);
    }

    updateCartCount();
    saveCartToStorage();
    showNotification(quantity > 1 ? `${product.name} (${quantity}) added to cart! ✨` : `${product.name} added to cart! ✨`);
    
    // Only update cart panel if it's already open – do NOT open the cart
    const cartOverlayEl = document.getElementById('cartOverlay');
    if (cartOverlayEl && cartOverlayEl.classList.contains('active')) {
        renderCart();
        if (typeof renderYouMayAlsoLike === 'function') renderYouMayAlsoLike('cartYouMayAlsoLike');
    }
}

// Show Notification (wishlist, cart, etc.) – high visibility, above nav
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'slay-notification';
    notification.setAttribute('role', 'status');
    notification.setAttribute('aria-live', 'polite');
    notification.style.cssText = [
        'position: fixed',
        'top: 90px',
        'left: 50%',
        'transform: translateX(-50%)',
        'background: #1a1a1a',
        'color: #fff',
        'padding: 0.875rem 1.5rem',
        'border-radius: 8px',
        'box-shadow: 0 4px 20px rgba(0,0,0,0.25)',
        'z-index: 10001',
        'font-size: 0.9375rem',
        'font-weight: 600',
        'white-space: nowrap',
        'max-width: 90vw',
        'overflow: hidden',
        'text-overflow: ellipsis',
        'animation: slayNotificationIn 0.3s ease'
    ].join('; ');
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(function () {
        notification.style.animation = 'slayNotificationOut 0.3s ease';
        setTimeout(function () {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
    @keyframes slayNotificationIn {
        from { transform: translate(-50%, -12px); opacity: 0; }
        to { transform: translate(-50%, 0); opacity: 1; }
    }
    @keyframes slayNotificationOut {
        from { transform: translate(-50%, 0); opacity: 1; }
        to { transform: translate(-50%, -12px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Smooth scrolling for anchor links - wait for DOM to be ready
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#' && href.length > 1) {
                e.preventDefault();
                const targetId = href.replace('#', '');
                const target = document.getElementById(targetId);
                
                if (target) {
                    // Calculate offset for navbar and flash sale banner
                    const navbar = document.querySelector('.navbar');
                    const flashBanner = document.getElementById('flashSaleBanner');
                    let offset = 80; // Default navbar height
                    
                    if (flashBanner && flashBanner.style.display !== 'none' && !flashBanner.classList.contains('hidden')) {
                        offset += 60; // Flash sale banner height
                    }
                    
                    const targetPosition = target.offsetTop - offset;
                    
                    window.scrollTo({
                        top: Math.max(0, targetPosition),
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Close cart when clicking outside
const cartOverlay = document.getElementById('cartOverlay');
if (cartOverlay) {
    cartOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            toggleCart();
        }
    });
}

// Close modal when clicking outside
const orderModal = document.getElementById('orderModal');
if (orderModal) {
    orderModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeOrderModal();
        }
    });
}

// Wishlist Functions
function toggleWishlist() {
    const wishlistOverlay = document.getElementById('wishlistOverlay');
    if (wishlistOverlay) {
        wishlistOverlay.classList.toggle('active');
        if (wishlistOverlay.classList.contains('active')) {
            renderWishlist();
        }
    }
}

function toggleWishlistItem(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = wishlist.find(item => item.id === productId && item.category === product.category);
    
    if (existingItem) {
        wishlist = wishlist.filter(item => !(item.id === productId && item.category === product.category));
        showNotification(`${product.name} removed from wishlist 💔`);
    } else {
        wishlist.push({
            ...product,
            category: product.category || 'bag'
        });
        createHeartAnimation();
        showNotification(`${product.name} added to wishlist 💖`);
    }
    
    saveWishlistToStorage();
    updateWishlistCount();
    renderProducts();
    
    // Update wishlist sidebar if open
    const wishlistOverlay = document.getElementById('wishlistOverlay');
    if (wishlistOverlay && wishlistOverlay.classList.contains('active')) {
        renderWishlist();
    }
}

function renderWishlist() {
    const wishlistItems = document.getElementById('wishlistItems');
    if (!wishlistItems) return;
    
    wishlistItems.innerHTML = '';
    
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<p class="empty-wishlist">Your wishlist is empty. Start adding your favorites! ✨</p>';
        return;
    }
    
    wishlist.forEach(item => {
        const wishlistItem = document.createElement('div');
        wishlistItem.className = 'wishlist-item';
        const imageHTML = item.image && item.image.includes('images/') 
            ? `<img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.parentElement.innerHTML='👜';">`
            : item.image || '👜';
        
        wishlistItem.innerHTML = `
            <div class="wishlist-item-image">${imageHTML}</div>
            <div class="wishlist-item-details">
                <div class="wishlist-item-name">${item.name}</div>
                <div class="wishlist-item-price">KSH ${item.price.toLocaleString()}</div>
                <div class="wishlist-item-actions">
                    <button class="wishlist-btn add-to-cart-wishlist" onclick="addToCartFromWishlist(${item.id})">Add to Cart</button>
                    <button class="wishlist-btn remove-wishlist" onclick="removeFromWishlist(${item.id})">Remove</button>
                </div>
            </div>
        `;
        wishlistItems.appendChild(wishlistItem);
    });
}

function addToCartFromWishlist(productId) {
    addToCart(productId);
    showNotification('Item added to cart from wishlist! 🛍️');
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    saveWishlistToStorage();
    updateWishlistCount();
    renderWishlist();
    renderProducts();
    showNotification('Item removed from wishlist 💔');
}

function updateWishlistCount() {
    const wishlistCount = document.getElementById('wishlistCount');
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

function saveWishlistToStorage() {
    localStorage.setItem('slayStationWishlist', JSON.stringify(wishlist));
}

function loadWishlistFromStorage() {
    const savedWishlist = localStorage.getItem('slayStationWishlist');
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
    }
}

// Close wishlist when clicking outside
const wishlistOverlay = document.getElementById('wishlistOverlay');
if (wishlistOverlay) {
    wishlistOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            toggleWishlist();
        }
    });
}

// Flash Sale Functions - Define immediately to avoid reference errors
function closeFlashSale() {
    const flashSaleBanner = document.getElementById('flashSaleBanner');
    if (flashSaleBanner) {
        flashSaleBanner.classList.add('hidden');
        setTimeout(() => {
            flashSaleBanner.style.display = 'none';
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.paddingTop = '100px';
            }
        }, 300);
        localStorage.setItem('flashSaleClosed', 'true');
    }
}

// Make closeFlashSale globally available immediately
if (typeof window !== 'undefined') {
    window.closeFlashSale = closeFlashSale;
}

// Check if flash sale was closed on page load
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('flashSaleClosed') === 'true') {
        const flashSaleBanner = document.getElementById('flashSaleBanner');
        if (flashSaleBanner) {
            flashSaleBanner.style.display = 'none';
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.paddingTop = '100px';
            }
        }
    }
    // Setup delivery fee calculator when address is typed or filled from map
    if (document.getElementById('address') && document.getElementById('deliveryFeeDisplay')) {
        setupDeliveryFeeCalculator();
    }
});

// Create heart animation
function createHeartAnimation() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.bottom = '0';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.textContent = '💖';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 100);
    }
}

// Create floating hearts on page
function createFloatingHearts() {
    setInterval(() => {
        if (Math.random() > 0.95) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.bottom = '-50px';
            heart.textContent = '💖';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }
    }, 3000);
}

// Create confetti on order success
function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confettiContainer.appendChild(confetti);
    }
    
    document.body.appendChild(confettiContainer);
    
    setTimeout(() => {
        confettiContainer.remove();
    }, 3000);
}

// Testimonials Data
const testimonials = [
    {
        name: "Sarah M.",
        rating: 5,
        text: "I absolutely love my coach bag! It's so elegant and stylish. Perfect for any occasion! 💖",
        avatar: "👩‍🦰"
    },
    {
        name: "Jessica K.",
        rating: 5,
        text: "Best purchase ever! The quality is amazing and delivery was super fast. Already ordered 3 more! ✨",
        avatar: "👸"
    },
    {
        name: "Emma L.",
        rating: 5,
        text: "These bags are everything! So trendy and comfortable. My friends keep asking where I got them! 🛍️",
        avatar: "💃"
    },
    {
        name: "Olivia R.",
        rating: 5,
        text: "Slay Station never disappoints! The bags are beautiful and the customer service is top-notch! 🌟",
        avatar: "👗"
    },
    {
        name: "Sophia T.",
        rating: 5,
        text: "I'm obsessed with my new tote bag! It's the perfect size and the colors are gorgeous! 💕",
        avatar: "🎀"
    },
    {
        name: "Isabella W.",
        rating: 5,
        text: "Quick delivery, beautiful packaging, and amazing products. What more could you ask for? 🎉",
        avatar: "🌸"
    }
];

// Render Testimonials
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (!testimonialsGrid) return;
    
    testimonialsGrid.innerHTML = '';
    
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.innerHTML = `
            <div class="testimonial-stars">${'⭐'.repeat(testimonial.rating)}</div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${testimonial.avatar}</div>
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p>Verified Customer</p>
                </div>
            </div>
        `;
        testimonialsGrid.appendChild(testimonialCard);
    });
}

// Video/reels functionality removed

// FAQ Toggle
function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked FAQ if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Newsletter Subscription
function subscribeNewsletter(e) {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value;
    
    // Save to localStorage
    let subscribers = JSON.parse(localStorage.getItem('slayStationNewsletter') || '[]');
    if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('slayStationNewsletter', JSON.stringify(subscribers));
        createConfetti();
        alert(`🎉 Thank you for subscribing, ${email}!\n\nYou'll receive exclusive deals and updates! ✨`);
        document.getElementById('newsletterEmail').value = '';
    } else {
        alert('This email is already subscribed! 💕');
    }
}

// Make functions globally available
if (typeof window !== 'undefined') {
    // Reel functions removed
}

// Quick View Modal
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Create or get modal
    let modal = document.getElementById('quickViewModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'quickViewModal';
        modal.className = 'quick-view-modal';
        document.body.appendChild(modal);
    }
    
    const categoryToBrand = { 'coach-bag': 'Coach', 'Coach-bag': 'Coach', 'tote-bag': 'Tote', 'on sale': 'Coach', 'shoulder-bag': 'Coach', 'miu miu-bag': 'Miu Miu' };
    const brand = product.brand || categoryToBrand[product.category] || (product.name.toLowerCase().indexOf('lv') !== -1 ? 'Louis Vuitton' : (product.name.split(' ')[0] || 'Slay Station'));
    const condition = product.condition || 'Excellent';
    const productNameLine2 = product.description ? product.description.split('.')[0].trim() : '';
    const priceOffHTML = product.originalPrice && product.originalPrice > product.price
        ? `<span style="font-weight: 400; margin-left: 0.35rem;">${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off</span>` : '';
    const priceBlock = product.originalPrice && product.originalPrice > product.price
        ? `<span style="text-decoration: line-through; color: #999; font-weight: 400; margin-right: 0.5rem;">KSH ${product.originalPrice.toLocaleString()}</span> <span style="font-weight: 700; color: var(--text-dark);">KSH ${product.price.toLocaleString()} KES</span> ${priceOffHTML}`
        : `<span style="font-weight: 700; color: var(--text-dark);">KSH ${product.price.toLocaleString()} KES</span>`;
    
    modal.innerHTML = `
        <div class="quick-view-content">
            <button class="quick-view-close" onclick="closeQuickView()">✕</button>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 2rem;">
                <div class="product-image-large">
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 15px;" onerror="this.onerror=null; this.parentElement.innerHTML='👜';">
                </div>
                <div class="product-details-large" style="display: flex; align-items: center; justify-content: center;">
                    <div style="text-align: center; max-width: 420px;">
                        <div style="font-size: 1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.08em;">${brand.toUpperCase()}</div>
                        <div style="font-size: 1.1rem; font-weight: 400; color: var(--text-dark); line-height: 1.5; margin-bottom: 0.75rem;">${product.name}${productNameLine2 ? '<br>' + productNameLine2 : ''}</div>
                        <div style="font-size: 0.95rem; font-weight: 400; color: var(--text-dark); margin-bottom: 1.25rem;">Condition: ${condition}</div>
                        <div style="font-size: 1.1rem; font-weight: 400; color: var(--text-dark);">${priceBlock}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeQuickView();
        }
    });
}

function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Edit product from frontend (for admins)
function editProductFromFrontend(productId, category) {
    // Check if user is admin
    const ADMIN_EMAILS = [
        'preston.mwendwa@riarauniversity.ac.ke',
        'isabellewambui@gmail.com'
    ];
    const isAdminEmail = (email) => {
        if (!email) return false;
        const normalizedEmail = email.toLowerCase().trim();
        return ADMIN_EMAILS.some(adminEmail => adminEmail.toLowerCase() === normalizedEmail);
    };
    
    let isAdmin = false;
    
    if (typeof userAuth !== 'undefined' && userAuth) {
        const currentUser = userAuth.getCurrentUser();
        isAdmin = currentUser && currentUser.email && isAdminEmail(currentUser.email);
    } else {
        const currentUserJson = localStorage.getItem('slayStationCurrentUser');
        if (currentUserJson) {
            try {
                const currentUser = JSON.parse(currentUserJson);
                isAdmin = currentUser && currentUser.email && isAdminEmail(currentUser.email);
            } catch (e) {
                isAdmin = false;
            }
        }
    }
    
    // Also check localStorage for admin login
    if (!isAdmin) {
        const adminLoggedIn = localStorage.getItem('slayStationAdminLoggedIn');
        const adminEmail = localStorage.getItem('slayStationAdminEmail');
        if (adminLoggedIn === 'true' && adminEmail && isAdminEmail(adminEmail)) {
            isAdmin = true;
        }
    }
    
    if (!isAdmin) {
        alert('Only admins can edit products! Please log in as admin first.');
        return;
    }
    
    // Find product from all sources
    let product = null;
    if (typeof products !== 'undefined') {
        product = products.find(p => p.id === productId);
    }
    if (!product && typeof walletProducts !== 'undefined') {
        product = walletProducts.find(p => p.id === productId);
    }
    if (!product && typeof accessoryProducts !== 'undefined') {
        product = accessoryProducts.find(p => p.id === productId);
    }
    
    // Try loading from localStorage if still not found
    if (!product) {
        try {
            const savedProducts = JSON.parse(localStorage.getItem('slayStationProducts') || '[]');
            product = savedProducts.find(p => p.id === productId);
        } catch (e) {}
    }
    if (!product) {
        try {
            const savedWallets = JSON.parse(localStorage.getItem('slayStationWallets') || '[]');
            product = savedWallets.find(p => p.id === productId);
        } catch (e) {}
    }
    if (!product) {
        try {
            const savedAccessories = JSON.parse(localStorage.getItem('slayStationAccessories') || '[]');
            product = savedAccessories.find(p => p.id === productId);
        } catch (e) {}
    }
    
    if (product) {
        // Store product ID to highlight in admin dashboard
        sessionStorage.setItem('editProductId', productId);
        sessionStorage.setItem('editProductName', product.name);
        window.location.href = 'admin.html';
    } else {
        alert('Product not found!');
    }
}

// Social Sharing
function shareProduct(productName, productImage, platform) {
    const url = window.location.href;
    const text = `Check out this amazing ${productName} from Slay Station! ✨`;
    
    let shareUrl = '';
    
    switch(platform) {
        case 'instagram':
            // Instagram doesn't support direct sharing, open in new tab
            window.open('https://www.instagram.com/', '_blank');
            return;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
        showNotification(`Sharing ${productName} on ${platform}! 💕`);
    }
}

// Make functions globally available
if (typeof window !== 'undefined') {
    window.filterProducts = filterProducts;
    window.searchProducts = searchProducts;
    window.mobileSearchSubmit = mobileSearchSubmit;
    window.focusProductSearch = focusProductSearch;
    window.toggleBagsIntro = toggleBagsIntro;
    window.toggleFAQ = toggleFAQ;
    window.subscribeNewsletter = subscribeNewsletter;
    window.showQuickView = showQuickView;
    window.closeQuickView = closeQuickView;
    window.shareProduct = shareProduct;
}
