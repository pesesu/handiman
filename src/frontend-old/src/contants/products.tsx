const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 79.99,
      image: "https://media.wired.com/photos/66abec9ccb172c2e5de763bf/master/w_960,c_limit/Edifier-Stax-Spirit-S5-Headphones-Offwhite-Background-SOURCE-Amazon.jpg",
      description: "High-quality wireless headphones with noise cancellation.",
      city: "Austin",
      state: "Texas"
    },
    {
      id: 2,
      title: "Smartwatch",
      price: 149.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz3LrfwJjmsZcKK4kpN9hUKjjGj9ntRPn36g&s",
      description: "Feature-packed smartwatch with heart rate monitoring.",
      city: "San Francisco",
      state: "California"
    },
    {
      id: 3,
      title: "Gaming Laptop",
      price: 1299.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBRxMgRlQ9xYfg_CJAjLbYz04ymMUHZLAfug&s",
      description: "Powerful gaming laptop with RTX graphics card.",
      city: "Seattle",
      state: "Washington"
    },
    {
      id: 4,
      title: "Bluetooth Speaker",
      price: 49.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRX1eVcsfS25YF_oiwJX3OQ_iwkehdnbFaA&s",
      description: "Portable Bluetooth speaker with deep bass.",
      city: "Nashville",
      state: "Tennessee"
    },
    {
      id: 5,
      title: "Mechanical Keyboard",
      price: 99.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiw50ttMmhD2bfbB6-aTki2lT4LRvAkM7tQQ&s",
      description: "RGB mechanical keyboard with customizable keys.",
      city: "Chicago",
      state: "Illinois"
    },
    {
      id: 6,
      title: "4K Monitor",
      price: 399.99,
      image: "https://i5.walmartimages.com/seo/Samsung-LS57CG952NNXZA-57-Odyssey-Neo-G9-Dual-4K-UHD-Quantum-Mini-LED-240Hz-1ms-HDR-1000-Curved-Gaming-Monitor-Black_91389b3b-6d99-46dc-8f7c-f6174047b02a.22c53d90c73e6cf4b39fc343fff944ce.jpeg",
      description: "Ultra HD 4K monitor with a 144Hz refresh rate.",
      city: "Denver",
      state: "Colorado"
    },
    {
      id: 7,
      title: "Wireless Mouse",
      price: 29.99,
      image: "https://www.portronics.com/cdn/shop/files/Toad321500X1500Blue1.jpg?v=1699100039",
      description: "Ergonomic wireless mouse with adjustable DPI.",
      city: "Miami",
      state: "Florida"
    },
    {
      id: 8,
      title: "Smart TV",
      price: 699.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVnIn5QQed10LfvxlqBxyhKswZypV-jO9XA&s",
      description: "55-inch Smart TV with 4K UHD resolution.",
      city: "Los Angeles",
      state: "California"
    },
    {
      id: 9,
      title: "Air Purifier",
      price: 129.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtNNck_95h6NZCcEOV1x_6217th9VzE-84w&s",
      description: "HEPA air purifier for clean and fresh air.",
      city: "Portland",
      state: "Oregon"
    },
    {
      id: 10,
      title: "Fitness Tracker",
      price: 59.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHl1XIPyeFzCkuX_vrCZ8KEQHQ7wkTB0LOg&s",
      description: "Waterproof fitness tracker with step counting.",
      city: "Atlanta",
      state: "Georgia"
    },
    {
      id: 11,
      title: "Coffee Maker",
      price: 89.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFzBnYd47Gurl8usQpZhwEv_AN65eBQHAFiQ&s",
      description: "Automatic coffee maker with multiple brew options.",
      city: "Boston",
      state: "Massachusetts"
    },
    {
      id: 12,
      title: "Portable Hard Drive",
      price: 119.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2bBAFQ2GGbqNkrTL2DQDIsbMD3qRJn5tBSg&s",
      description: "1TB external hard drive for secure backups.",
      city: "Phoenix",
      state: "Arizona"
    },
    {
      id: 13,
      title: "Robot Vacuum",
      price: 249.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RMwDtl4rX3NJIBPsrSgKYIZiylya7QK2mg&s",
      description: "Smart robot vacuum with automatic scheduling.",
      city: "Dallas",
      state: "Texas"
    },
    {
      id: 14,
      title: "Drone",
      price: 499.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfwYMJqr4huZgBah1G9RNrrAe-9reEfUOWg&s",
      description: "4K camera drone with GPS and obstacle avoidance.",
      city: "Orlando",
      state: "Florida"
    },
    {
      id: 15,
      title: "Electric Scooter",
      price: 699.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPLzbRZihPahDpyWIWA-nXIimyXD4ay-94rg&s",
      description: "Foldable electric scooter with long battery life.",
      city: "San Diego",
      state: "California"
    },
    {
      id: 16,
      title: "VR Headset",
      price: 299.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJC-8bc5PAN4KVS02lZpFHaE1FoztMXcE7Yg&s",
      description: "Immersive VR headset for gaming and entertainment.",
      city: "Las Vegas",
      state: "Nevada"
    },
    {
      id: 17,
      title: "Gaming Chair",
      price: 199.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9QUax6ZLuZGpmFNJm7cw-NV5kgJHga5yOw&s",
      description: "Ergonomic gaming chair with lumbar support.",
      city: "Columbus",
      state: "Ohio"
    },
    {
      id: 18,
      title: "Smart Doorbell",
      price: 179.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHstxoQePbTwSJj1b_ZdsQJKN2pSwGxV160Q&s",
      description: "Smart doorbell with camera and two-way audio.",
      city: "Charlotte",
      state: "North Carolina"
    },
    {
      id: 19,
      title: "Wireless Charger",
      price: 39.99,
      image: "https://images.monoprice.com/productlargeimages/425191.jpg",
      description: "Fast wireless charging pad for multiple devices.",
      city: "Philadelphia",
      state: "Pennsylvania"
    },
    {
      id: 20,
      title: "Streaming Webcam",
      price: 89.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyfxziiEb4sJ5kdAW4YwkFJXwPC19MZ8qEQ&s",
      description: "1080p HD webcam with built-in microphone.",
      city: "New York",
      state: "New York"
    },
  ];
  
  export default products;
  