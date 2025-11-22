import { MenuItem, TeaCategory, StoryItem } from './types';

// Using high-quality Unsplash images that match the PDF descriptions
export const PDF_IMAGES = {
  teaCupsRow: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=1200&auto=format&fit=crop", // Row of cups
  teaFarm: "https://images.unsplash.com/photo-1743401439096-dc9b89abb9c7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVhJTIwZmFybSUyMGNoaW5hfGVufDB8fDB8fHww",
  cateringTruck: "https://images.unsplash.com/photo-1567129937968-cdad8f07e2f8?q=80&w=1200&auto=format&fit=crop", // Event/Truck vibe
  fruitTea: "https://images.unsplash.com/photo-1589009649715-641c60b982ae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcCUyMHVwJTIwdGVhfGVufDB8fDB8fHww", // Fruit tea for Find Us
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'jasmine-green',
    name: 'Jasmine Green Tea',
    description: 'Elegant and soothing, our Jasmine Green Tea is crafted from tender green tea leaves gently scented with fresh jasmine blossoms. Each sip reveals a graceful harmony of floral fragrance and mellow tea notes — refreshing yet calming, with a lingering sweetness that captures the essence of pure tranquility.',
    priceMedium: 5.00,
    priceLarge: 6.00,
    category: TeaCategory.PureTea,
    // imageKey: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=800&auto=format&fit=crop'
    imageKey: 'images/Jasmine Green Tea.jpg'
  },
  {
    id: 'dyen-black',
    name: 'Dyen Black Tea',
    description: 'Crafted with Yunnan black tea from China’s highlands, this tea offers a rich, malty aroma with notes of cocoa and honey, delivering a smooth, full-bodied taste and a naturally sweet finish.',
    priceMedium: 5.00,
    priceLarge: 6.00,
    category: TeaCategory.PureTea,
    // imageKey: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop'
    imageKey: 'images/Dyen Black Tea.jpg'
  },
  {
    id: 'jasmine-latte',
    name: 'Jasmine Green Tea Latte',
    description: 'Beloved for its graceful floral fragrance and creamy texture, our Jasmine Green Tea Latte harmonizes the elegance of jasmine blossoms with the richness of fresh milk. Each sip unveils a gentle balance of aroma and smoothness — soothing, fragrant, and indulgently refreshing.',
    priceMedium: 5.00,
    priceLarge: 6.00,
    category: TeaCategory.TeaLatte,
    // imageKey: 'https://images.unsplash.com/photo-1576092768241-dec231847233?q=80&w=800&auto=format&fit=crop'
    imageKey: 'images/Jasmine Green Tea Latte.jpg'
  },
  {
    id: 'dyen-latte',
    name: 'Dyen Black Tea Latte',
    description: 'Crafted with Yunnan black tea from China’s highlands, this latte blends the tea’s rich, malty depth with the creaminess of fresh milk. Notes of cocoa and honey unfold in every sip, creating a smooth, full-bodied drink that’s both comforting and naturally sweet.',
    priceMedium: 5.00,
    priceLarge: 6.00,
    category: TeaCategory.TeaLatte,
    // imageKey: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=800&auto=format&fit=crop'
    imageKey: 'images/Dyen Black Tea Latte.jpg'
  }
];

export const OUR_STORY: StoryItem[] = [
  {
    title: "1. The Journey Begins",
    content: "Friday was born from a simple belief — that tea should be honest, pure, and full of life. We travel across the world’s finest tea regions, from misty mountains to quiet valleys, seeking the leaves that speak for themselves. Each journey is a promise — to bring you tea that carries the essence of its origin, untouched and true."
  },
  {
    title: "2. Crafted with Care",
    content: "From the moment a leaf is picked, every step matters. We work hand in hand with tea farmers who share our devotion to quality. Each batch is carefully sun-dried, fermented, and packed under our supervision, ensuring the natural aroma and full-bodied flavor remain intact. Our process is never rushed — because good tea, like good moments, deserves time."
  },
  {
    title: "3. The Friday Promise",
    content: "Quality has always been at the heart of what we do. Every cup we serve reflects our dedication to health, nature, and authenticity. No additives, no shortcuts — just tea, as it was meant to be. At Friday Tea, we believe that each sip should feel like a pause, a reminder of simplicity and care in a world that moves too fast."
  }
];

export const CONTACT_INFO = {
  email: "teawithfriday@gmail.com",
  phone: "510-367-3337"
};