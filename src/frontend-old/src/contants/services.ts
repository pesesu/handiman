const services = [
  {
    name: "Plumbing Services",
    category: "Plumbing",
    city: "Lagos",
    state: "Lagos",
    distance: 5.2,
    image: "data:image/jpeg;base64,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",
    provider: {
      first_name: "John",
      last_name: "Doe",
      profile_photo: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  },
  {
    name: "Electrical Repairs",
    category: "Electrical",
    city: "Abuja",
    state: "FCT",
    distance: 12.7,
    image: "https://lirp.cdn-website.com/25f3632c/dms3rep/multi/opt/vancelectric-northern-virginia-install-generator-640w.jpg",
    provider: {
      first_name: "Jane",
      last_name: "Smith",
      profile_photo: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
    }
  },
  {
    name: "House Cleaning",
    category: "Cleaning",
    city: "Port Harcourt",
    state: "Rivers",
    distance: 8.5,
    image: "https://pictures-nigeria.jijistatic.net/157241970_NjIwLTQ1MC05NGRjMzgzODY5.webp",
    provider: {
      first_name: "Michael",
      last_name: "Johnson",
      profile_photo: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
    }
  },
  {
    name: "Gardening Services",
    category: "Gardening",
    city: "Kano",
    state: "Kano",
    distance: 15.3,
    image: "https://wigmoretrading.com/wp-content/uploads/2022/09/iStock-1204833795-1.jpg",
    provider: {
      first_name: "Emily",
      last_name: "Davis",
      profile_photo: "https://plus.unsplash.com/premium_photo-1661964412228-d4c51596f09a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
    }
  },
  {
    name: "Carpentry Work",
    category: "Carpentry",
    city: "Ibadan",
    state: "Oyo",
    distance: 7.9,
    image: "https://cdn.prod.website-files.com/6390e14cc734a931f8327343/666a7173d260f61119eec83b_AD_4nXdM2yAynX4cQvruqCMw3_IUJKPzXGFtXS63aFNMJemTMO4Wz279Xl-lh2O9G-Ks_eS7UdO293sRjjLhaGAZqS0sWfcilmHYtClzYgz-l_ts0exvRG8bktUZ2t6mrStGM22omFDNs18d5Hw3zIuP7nkELqxe.jpeg",
    provider: {
      first_name: "David",
      last_name: "Wilson",
      profile_photo: "https://c8.alamy.com/comp/2WG4PFP/5999-stylish-attitude-boy-new-whatsapp-dp-instagram-fb-profile-pic-free-2024-cute-boy-premium-high-res-stock-photos-download-on-alamy-2WG4PFP.jpg"
    }
  },
  {
    name: "Painting Services",
    category: "Painting",
    city: "Benin City",
    state: "Edo",
    distance: 10.2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6u88LzAVRI0W63lNcUx6uy6gkjEJsy8rC5w&s",
    provider: {
      first_name: "Sarah",
      last_name: "Brown",
      profile_photo: "https://img.freepik.com/free-photo/portrait-repairer-woman-with-painting-roller-isolated_1303-14259.jpg?t=st=1670324860~exp=1670325460~hmac=22c610ad04cd5762e24bc1861bb857f003e1cff8370e241ab6a484cb84945ebd"
    }
  },
  {
    name: "Pest Control",
    category: "Pest Control",
    city: "Enugu",
    state: "Enugu",
    distance: 6.4,
    image: "https://qmclean.com.ng/wp-content/uploads/2019/05/Fumigation-Pest-Control-Service.jpg",
    provider: {
      first_name: "James",
      last_name: "Taylor",
      profile_photo: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
    }
  },
  {
    name: "Roofing Services",
    category: "Roofing",
    city: "Jos",
    state: "Plateau",
    distance: 13.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ4gg5fMsfrknmG3aI-B4JVaJO37N0RVR2cg&s",
    provider: {
      first_name: "Linda",
      last_name: "Anderson",
      profile_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"
    }
  },
  {
    name: "AC Installation",
    category: "Installation",
    city: "Abeokuta",
    state: "Ogun",
    distance: 9.1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_6PV_nI5j_TmYlGJkCc8V3cIglzKhihqhA&s",
    provider: {
      first_name: "Robert",
      last_name: "Thomas",
      profile_photo: "https://cdn.expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-fake-smile.jpg"
    }
  },
  {
    name: "Home Security Setup",
    category: "Security",
    city: "Uyo",
    state: "Akwa Ibom",
    distance: 11.8,
    image: "https://images.vivintcdn.com/global/vivint.com/resources/products/panel/smart-home-pro-install-panel.jpg",
    provider: {
      first_name: "Patricia",
      last_name: "Jackson",
      profile_photo: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
    }
  },
  {
    name: "Landscaping",
    category: "Landscaping",
    city: "Owerri",
    state: "Imo",
    distance: 14.0,
    image: "https://static1.backyardbossimages.com/wordpress/wp-content/uploads/2023/07/shutterstock_641952565.jpg",
    provider: {
      first_name: "Charles",
      last_name: "White",
      profile_photo: "https://sb.kaleidousercontent.com/67418/1920x1281/0e9f02a048/christian-buehner-ditylc26zvi-unsplash.jpg"
    }
  },
  {
    name: "Window Cleaning",
    category: "Cleaning",
    city: "Calabar",
    state: "Cross River",
    distance: 4.7,
    image: "https://fullcleancentre.com/wp-content/uploads/2022/06/to-begin-with-impression.jpg",
    provider: {
      first_name: "Barbara",
      last_name: "Harris",
      profile_photo: "https://earthwisewindows.com/wp-content/uploads/2023/04/Window-Cleaning.png"
    }
  },
  {
    name: "Moving Services",
    category: "Moving",
    city: "Maiduguri",
    state: "Borno",
    distance: 16.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF49nnl0qRFve2vYUF3tr_UoDXGiRW-LTHqg&s",
    provider: {
      first_name: "Paul",
      last_name: "Martin",
      profile_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKxfjTf49GAtu0PpFXK7mKBgqyJ5MfJCgQw&s"
    }
  },
  {
    name: "Furniture Assembly",
    category: "Assembly",
    city: "Ilorin",
    state: "Kwara",
    distance: 3.9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWo2gSBUatN_SiRDOfgfWUV5TCFsThF_4EA&s",
    provider: {
      first_name: "Nancy",
      last_name: "Thompson",
      profile_photo: "https://images.pexels.com/photos/219550/pexels-photo-219550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  },
  {
    name: "Appliance Repair",
    category: "Repair",
    city: "Warri",
    state: "Delta",
    distance: 12.1,
    image: "https://media.licdn.com/dms/image/v2/D5612AQEKV253NfOeqg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1675271071137?e=2147483647&v=beta&t=YnHl3kC-UnErT6OkM9eCsEI21eeOvvwln8qWuQ_PG3Q",
    provider: {
      first_name: "George",
      last_name: "Garcia",
      profile_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHs0QBNrj1IMHpd8iqEb4PzKa-t6UwAF7eQ&s"
    }
  },
  {
    name: "Computer Repair",
    category: "Repair",
    city: "Kaduna",
    state: "Kaduna",
    distance: 7.3,
    image: "https://pictures-nigeria.jijistatic.net/112769140_NjIwLTQxMy1kM2RjMWQzNjEzLTE.webp",
    provider: {
      first_name: "Karen",
      last_name: "Martinez",
      profile_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_t2FJGLzOgbHP8a7chws2sSTtjpzUHC3LQ&s"
    }
  },
  {
    name: "Tutoring Services",
    category: "Tutoring",
    city: "Akure",
    state: "Ondo",
    distance: 5.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyECoe07CIKFR-StTvSln1pv1yjs00MWxcBA&s",
    provider: {
      first_name: "Steven",
      last_name: "Robinson",
      profile_photo: "https://media.istockphoto.com/id/514419165/photo/woman-breathing-deep-fresh-air-in-the-morning-sunrise.jpg?s=612x612&w=0&k=20&c=DLxS7aHYj08EMXWnjZTCDPBp244s4Duro1-eYXP0_bw="
    }
  },
  {
    name: "Event Planning",
    category: "Event Planning",
    city: "Yola",
    state: "Adamawa",
    distance: 18.2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSSdYkEisxgXVzAzFlbi-vnxGXcYtDMJs0Mg&s",
    provider: {
      first_name: "Donna",
      last_name: "Clark",
      profile_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkI2KhMaGJJfw2Tz1htbiMi_bCg8h1WPk7NA&s"
    }
  },
  {
    name: "Photography",
    category: "Photography",
    city: "Sokoto",
    state: "Sokoto",
    distance: 9.9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqA9yUzfZmWTCdu4IjapTNsSf1hPtXe6_j3g&s",
    provider: {
      first_name: "Joseph",
      last_name: "Rodriguez",
      profile_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsgshrv8Bj-gBKfH7zIZzrQtMbCdOveAH_sg&s"
    }
  },
  {
    name: "Catering Services",
    category: "Catering",
    city: "Lokoja",
    state: "Kogi",
    distance: 11.0,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7Ykyd13dd1wbjZlVvEQWYJBMWllOm8IOUg&s",
    provider: {
      first_name: "Lisa",
      last_name: "Lewis",
      profile_photo: "https://media.istockphoto.com/id/1471845315/photo/happy-portrait-or-business-woman-taking-a-selfie-in-office-building-for-a-social-media.jpg?s=612x612&w=0&k=20&c=AOylBL01joI0zphCAFr6YVrsOgp_jd2XtVUychLXYho="
    }
  }
];

export default services;
