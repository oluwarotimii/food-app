/* eslint-disable prettier/prettier */
const menuData = [
    {
      id: '1',
      title: 'Pounded Yam',
      image:
        // 'http://i.pinimg.com/236x/bd/18/22/bd1822ff45f08530a08218df768e7e83.jpg',
        require('../images/food/poundedyam.jpg'),
        images: [
          'https://i.pinimg.com/236x/69/82/b2/6982b2182c6881592d98111d90d93d73.jpg',
          'https://i.pinimg.com/236x/f6/6b/c5/f66bc5312d4e380155c94a7923e68420.jpg',
          'https://i.pinimg.com/236x/5a/1b/7d/5a1b7dd2f1500bc0d6c16f0e9cb2adc6.jpg',
        ],
        soup: [
          'Egusi Soup',
          'Okra Soup',
          'Ewedu',
          ],
        Meat: ['Fish', 'Chicken', 'Beef'],
        avgRating: 4.8,
        ratings: '2,989',
        price: 200,
    },
    {
      id: '2',
      title: 'Yam Porridge',
      image:
        // 'https://i.pinimg.com/236x/2f/d6/7f/2fd67f6f6f1acf74492bcd1b275a29cc.jpg',
        require('../images/food/pottage2.jpg'),
        images: [
          'https://i.pinimg.com/236x/3d/56/d7/3d56d742b09c0e8787d83986d7fdeb9c.jpg',
          'https://i.pinimg.com/236x/c4/32/57/c4325794161a293636b5e18f889dac3c.jpg',
            ],
      options: [
              'Plain',
              'Fish',
              'Meat',
            ],
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.06,
    },
    {
      id: '3',
      title: 'Jollof Rice',
      image:
        // 'https://i.pinimg.com/236x/d3/fc/3b/d3fc3b156de96b5bee01399d672fb554.jpg',
        require('../images/food/Jollof.jpg'),
      images: [
          'https://i.pinimg.com/236x/18/1b/ad/181baddb1f195c60d88b4eddb5dac16f.jpg',
          'https://i.pinimg.com/236x/09/2c/db/092cdba15833f860713fe9be7b6ecd92.jpg',
          'https://i.pinimg.com/236x/3c/c7/a3/3cc7a32b7f96f1ea5a804c26d1e3ebd0.jpg',
          ],
      options: [
              'Fish',
              'Chicken',
              'Beef',
            ],
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.06,
    },
    {
      id: '4',
      title: 'Beans & Bread',
      image:
        // 'https://i.pinimg.com/236x/f5/1f/4f/f51f4f2fecd052cab34cd30a2e0d02b6.jpg',
        require('../images/food/beansandbread.jpg'),
      images: [
          'https://i.pinimg.com/236x/f5/1f/4f/f51f4f2fecd052cab34cd30a2e0d02b6.jpg',
          'https://i.pinimg.com/236x/2e/22/bd/2e22bd4b8525a31d6579f5aaf442d588.jpg',
          'https://i.pinimg.com/236x/34/a0/9c/34a09cdfdfa68c2ab36c29e6c30a8d90.jpg',
        ],
    options:[],
    avgRating: 4.8,
    ratings: 2989,
    price: 99.98,
    oldPrice: 120.06,
    },
    {
      id: '5',
      title: 'Pap & Akara',
      image:
        // 'https://i.pinimg.com/236x/ab/bb/01/abbb013af8c2a35cdbd181e52c48fd29.jpg',
        require('../images/food/papakara.jpg'),
        images: [
          'https://i.pinimg.com/236x/ab/bb/01/abbb013af8c2a35cdbd181e52c48fd29.jpg',
          'https://i.pinimg.com/236x/78/76/1d/78761da828fdabfc1762aee29841dba9.jpg',
          'https://i.pinimg.com/236x/2c/12/40/2c1240e195bbd7b05c65ddfc9575b062.jpg',
          'https://i.pinimg.com/236x/0e/a0/60/0ea0607e37a5a30e8075e141806e6bf2.jpg',
        ],
      options:[],
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.06,
    },
    {
      id: '6',
      title: 'Moi-Moi',
      image:
        // 'https://i.pinimg.com/236x/a2/42/86/a242860e0239962c64aa2bb25ac78e56.jpg',
        require('../images/food/moimoi1.jpg'),
      images: [
          'https://i.pinimg.com/236x/a2/42/86/a242860e0239962c64aa2bb25ac78e56.jpg',
          'https://i.pinimg.com/236x/4a/62/de/4a62de8f183ea08ed3cf953057724504.jpg',
          'https://i.pinimg.com/236x/2c/c2/f7/2cc2f7debef76f19c8c3c45fe09b4f3e.jpg',
        ],
      options: [
              'Fish',
              'Egg',
            ],
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.06,
    },
    {
      id: '7',
      title: 'Pepper Soup',
      image:
        // 'https://i.pinimg.com/236x/f2/1c/12/f21c12838a3263517edf52b2d58967a3.jpg',
        require('../images/food/Half-Catfish-Pepper-Soup.jpeg'),
      images: [
          'https://i.pinimg.com/236x/37/79/6d/37796df84b406bb62c6caa0f581fc637.jpg',
          'https://i.pinimg.com/236x/9b/5f/5e/9b5f5e2fb379e35da12959f06b35ab4b.jpg',
          'https://i.pinimg.com/236x/f6/20/ab/f620abd0b2aabd0a18d57990dc93863d.jpg',
          'https://i.pinimg.com/236x/f2/1c/12/f21c12838a3263517edf52b2d58967a3.jpg',
  
            ],
      options: [
              'Fish',
              'Chicken',
              'Beef',
      ],
    },
    {
      id: '8',
      title: 'Amala',
      image:
        // 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
        require('../images/food/amala.jpg'),
      images: [
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse1.jpg',
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse2.jpg',
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse3.jpg',
        ],
      soup: [
      'Egusi Soup',
      'Okra Soup',
      'Ewedu',
      ],
      options: [
        'Fish',
        'Chicken',
        'Beef',
      ],
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.06,
    },
    {
      id: '9',
      title: 'Eba',
      image:
        // 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
        require('../images/food/eba.jpg'),
      images: [
          'https://i.pinimg.com/564x/0e/3e/c2/0e3ec26cb31d9b71351c2e81306f4702.jpg',
          'https://i.pinimg.com/236x/ea/79/39/ea7939c0e09f71f7d2986c83a40d90d6.jpg',
          'https://i.pinimg.com/236x/35/e2/c5/35e2c536695d3d2b83f127ee3e1eac7c.jpg',
          ],
      soup: [
          'Egusi Soup',
          'Okra Soup',
          'Ewedu',
      ],
      options: [
              'Fish',
              'Chicken',
              'Beef',
            ],
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.06,
    },
    {
      id: '10',
      title: 'Yam & Egg',
      image:
        // 'https://i.pinimg.com/236x/9c/d4/7e/9cd47eccf73e63e096357bae14f7a5fc.jpg',
        require('../images/food/yam&egg.jpg'),
      images: [
          'https://i.pinimg.com/236x/8b/da/d5/8bdad59d0118a90852e8cf09baf785ee.jpg',
          'https://i.pinimg.com/236x/55/36/82/5536827f20a21aec9ed47a1924c04e3c.jpg',
          'https://i.pinimg.com/236x/9c/d4/7e/9cd47eccf73e63e096357bae14f7a5fc.jpg',
          'https://i.pinimg.com/236x/76/7b/a4/767ba4af7612ae0c763b825e7f8f2e53.jpg',
        ],
      options: [],
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.06,
    },
    {
      id: '11',
      title: 'Mixed Rice (Jollof & Fried Rice)',
      image:
        // 'https://i.pinimg.com/236x/d3/fc/3b/d3fc3b156de96b5bee01399d672fb554.jpg',
        require('../images/food/friedrice.jpg'),
        images: [
          'https://i.pinimg.com/236x/18/1b/ad/181baddb1f195c60d88b4eddb5dac16f.jpg',
          'https://i.pinimg.com/236x/09/2c/db/092cdba15833f860713fe9be7b6ecd92.jpg',
          'https://i.pinimg.com/236x/3c/c7/a3/3cc7a32b7f96f1ea5a804c26d1e3ebd0.jpg',
          ],
      options: [
              ' Fish',
              ' Chicken',
            ],
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.06,
    },
    {
      id: '12',
      title: 'Macaroni & Spaghetti',
      image:
        // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
        require('../images/food/spaghetiii.jpg'),
        images: [
          'https://i.pinimg.com/236x/f9/5d/55/f95d55812d0cac2db697ac135d79933c.jpg',
          'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
        ],
      options: [
              'Plain Rice with Fish',
              'With Boiled Egg',
              'With Chicken',
            ],
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.0,
    },
    {
        id: '13',
        title: 'Fufu',
        image:
          // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          require('../images/food/fufu2.jpg'),
          images: [
            'https://i.pinimg.com/236x/f9/5d/55/f95d55812d0cac2db697ac135d79933c.jpg',
            'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          ],
        options: [
                'Plain Rice with Fish',
                'With Boiled Egg',
                'With Chicken',
              ],
        avgRating: 4.8,
        ratings: 2989,
        price: 99.98,
        oldPrice: 120.0,
    },
    {
        id: '14',
        title: 'Rice & Beans',
        image:
          // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          require('../images/food/riceandbeans.jpg'),
          images: [
            'https://i.pinimg.com/236x/f9/5d/55/f95d55812d0cac2db697ac135d79933c.jpg',
            'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          ],
        options: [
                'Plain Rice with Fish',
                'With Boiled Egg',
                'With Chicken',
              ],
        avgRating: 4.8,
        ratings: 2989,
        price: 99.98,
        oldPrice: 120.0,
    },
    {
        id: '15',
        title: 'Barbecue',
        image:
          // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          require('../images/food/barbb.jpg'),
          images: [
            'https://i.pinimg.com/236x/f9/5d/55/f95d55812d0cac2db697ac135d79933c.jpg',
            'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          ],
        // options: [
        //         'Plain Rice with Fish',
        //         'With Boiled Egg',
        //         'With Chicken',
        //       ],
        avgRating: 4.8,
        ratings: 2989,
        price: 99.98,
        oldPrice: 120.0,
    },
    {
        id: '16',
        title: 'Coconut Rice',
        image:
          // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          require('../images/food/Cameroonian-coconut-rice.jpg'),
          images: [
            'https://i.pinimg.com/236x/f9/5d/55/f95d55812d0cac2db697ac135d79933c.jpg',
            'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          ],
        options: [
                'With Fish',
                'With Boiled Egg',
                'With Chicken',
              ],
        avgRating: 4.8,
        ratings: 2989,
        price: 99.98,
        oldPrice: 120.0,
    },
    {
        id: '17',
        title: 'Sharwama',
        image:
          // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          require('../images/food/sharwama.jpg'),
          images: [
            'https://i.pinimg.com/236x/f9/5d/55/f95d55812d0cac2db697ac135d79933c.jpg',
            'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          ],
        options: [
                'Beef',
                'Chicken',
              ],
        avgRating: 4.8,
        ratings: 2989,
        price: 99.98,
        oldPrice: 120.0,
    },
    {
        id: '18',
        title: 'Spaghetti',
        image:
          // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          require('../images/food/spaghetti.jpg'),
        images: [
            'https://i.pinimg.com/236x/f9/5d/55/f95d55812d0cac2db697ac135d79933c.jpg',
            'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          ],
        options: [
                'Plain Rice with Fish',
                'With Boiled Egg',
                'With Chicken',
              ],
        avgRating: 4.8,
        ratings: 2989,
        price: 99.98,
        oldPrice: 120.0,
    },
    {
        id: '19',
        title: 'Hamburger',
        image:
          // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          require('../images/food/hams.jpg'),
    },
    {
        id: '20',
        title: 'Pizza',
        image:
          // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          require('../images/food/pizza.jpg'),
          images: [
            'https://i.pinimg.com/236x/f9/5d/55/f95d55812d0cac2db697ac135d79933c.jpg',
            'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          ],
        options: [
                'Pineaple',
                'Jelapeno',
                // 'With Chicken',
              ],
        avgRating: 4.8,
        ratings: 2989,
        price: 99.98,
        oldPrice: 120.0,
    },
    {
        id: '21',
        title: ' Plain Rice',
        image:
          // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          require('../images/food/rice.jpg'),
          images: [
            'https://i.pinimg.com/236x/f9/5d/55/f95d55812d0cac2db697ac135d79933c.jpg',
            'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
          ],
        options: [
                'Fish',
                ' Boiled Egg',
                ' Chicken',
              ],
        avgRating: 4.8,
        ratings: 2989,
        price: 99.98,
        oldPrice: 120.0,
    },
    {
      id: '22',
      title: 'Indomie',
      image:
        // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
        require('../images/food/indomie.jpg'),
      images: [
          'https://i.pinimg.com/236x/f9/5d/55/f95d55812d0cac2db697ac135d79933c.jpg',
          'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
        ],
      options: [
              // 'Fish',
              'Boiled Egg',
              'Chicken',
            ],
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.0,
    },
    {
      id: '23',
      title: 'Potatoes',
      image:
        // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
        require('../images/food/imageshere.png'),
        images: [
          'https://i.pinimg.com/236x/f9/5d/55/f95d55812d0cac2db697ac135d79933c.jpg',
          'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
        ],
      options: [
              'Fish',
              ' Boiled Egg',
              ' Chicken',
            ],
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.0,
    },
    {
      id: '24',
      title: 'Cake',
      image:
        // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
        require('../images/food/cake.jpg'),
        images: [
          'https://i.pinimg.com/236x/f9/5d/55/f95d55812d0cac2db697ac135d79933c.jpg',
          'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
        ],
      options: [
              'Strawberry',
              ' Vanilla',
              ' Chocolate',
            ],
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.0,
    },
    {
      id: '25',
      title: 'Tapioca',
      image:
        // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
        require('../images/food/imageshere.png'),
  },
  {
    id: '26',
    title: 'Chicken',
    image:
      // 'https://i.pinimg.com/236x/d9/f7/c5/d9f7c53e66487e8d02335164e0332081.jpg',
      require('../images/food/chickenn.jpg'),
},

  ];
export default menuData;
