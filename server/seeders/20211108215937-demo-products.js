'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  //   ,{
  //   uuid: "5c9qojr2d1738zlx09afer",
  //   name: "mixed media jacket",
  //   imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-03_1_1_900x.jpg?v=1634171769",
  //   price: 348,
  //   color: "natural",
  //   shelf: "jacket",
  //   description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
  //   sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
  //   sizeAble: true
  // },{
  //   uuid: "5c9qojr2d1738zlx0vdeby",
  //   name: "mascot trucker jacket",
  //   imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-11_1_1_900x.jpg?v=1634171755",
  //   price: 248,
  //   color: "stone wash",
  //   shelf: "jacket",
  //   description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
  //   sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
  //   sizeAble: true
  // },{
  //   uuid: "csaqojr2d1738zlx09afby",
  //   name: "basic ss tee",
  //   imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/TRUCKER-159_1_900x.jpg?v=1631209823",
  //   price: 48,
  //   color: "heather grey",
  //   shelf: "tee",
  //   description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
  //   sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
  //   sizeAble: true
  // },{
  //   uuid: "5c9qqwr2d1738zlx09afby",
  //   name: "idears tapered jean",
  //   imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-09_1_1_900x.jpg?v=1634264772",
  //   price: 278,
  //   color: "vintage indigo",
  //   shelf: "bottom",
  //   description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
  //   sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
  //   sizeAble: true
  // }, {
  //   uuid: "5c9qojr2d1738zlx09rfyy",
  //   name: "distressed tapered jean",
  //   imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-06_1_1_900x.jpg?v=1634321500",
  //   price: 198,
  //   color: "vintage indigo",
  //   shelf: "bottom",
  //   description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
  //   sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
  //   sizeAble: true
  // },{
  //   uuid: "5c9qojr2d1738vbn09afby",
  //   name: "idears tapered jean",
  //   imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-01_1_1_900x.jpg?v=1634264792",
  //   price: 278,
  //   color: "vintage indigo",
  //   shelf: "bottom",
  //   description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
  //   sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
  //   sizeAble: true
  // }, {
  //   uuid: "5cfghjr2d1738zlx09afby",
  //   name: "carpenter jean",
  //   imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-13_1_1_900x.jpg?v=1634264666",
  //   price: 198,
  //   color: "stone wash",
  //   shelf: "bottom",
  //   description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
  //   sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
  //   sizeAble: true
  // },{
  //   uuid: "5c9qojr2d1738zlx09234by",
  //   name: "riverside tote",
  //   imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/5D3A60212_900x.jpg?v=1632355408",
  //   price: 118,
  //   color: "golden yellow",
  //   shelf: "accessory",
  //   description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
  //   sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
  //   sizeAble: false
  // },{
  //   uuid: "5c9qojr2d1738wer09afby",
  //   name: "hearty snapback hat",
  //   imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/TRUCKER-174_900x.jpg?v=1630883679",
  //   price: 58,
  //   color: "black",
  //   shelf: "accessory",
  //   description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
  //   sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
  //   sizeAble: false
  // },{
  //   uuid: "5c9qojr2asd38zlx09afby",
  //   name: "hearty snapback hatmascot drew house",
  //   imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/UnoFlats-26_900x.jpg?v=1633541538",
  //   price: 38,
  //   color: "royal blue",
  //   shelf: "accessory",
  //   description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
  //   sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
  //   sizeAble: false
  // },{
  //   uuid: "5c9qojr2d1738zlx09a123",
  //   name: "mascot foot bag",
  //   imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/MASCOTHACKYSACK_DETAIL_900x.jpg?v=1623200262",
  //   price: 8,
  //   color: "golden yellow",
  //   shelf: "accessory",
  //   description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
  //   sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
  //   sizeAble: false
  // }
     await queryInterface.bulkInsert('products', [{
      uuid: "8xf0y6ziyjabvozdd253nd",
      name: "idears trucker jacket",
      imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-07_1_1_900x.jpg?v=1634171742",
      price: 348,
      color: "vintage indigo",
      shelf: "jacket",
      description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
      sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
      sizeAble: true
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('products', null, {});
  }
};
