const products = [
    // Earring
    {
        nameProduct : "Balenciaga Gold Loop Heart Earrings",
        id : 1,
        price : 1500000,
        description : "description",
        category: "Earring",
        brand : "Harry Winston",
        image : "Earring_01.jpg ",
    },
    {
        nameProduct : "Blue Drop Earrings",
        id : 2,
        price : 2400000,
        description : "description",
        category: "Earring",
        brand : "THAYA",
        image : "Earring_02.jpg ",
    },
    {
        nameProduct : "Bridal Drop Earrings",
        id : 3,
        price : 2000000,
        description : "description",
        category: "Earring",
        brand : "LEKANI",
        image : "Earring_03.jpg ",
    },
    {
        nameProduct : "Floral Diamond Stud Earrings",
        id : 4,
        price : 3650000,
        description : "description",
        category: "Earring",
        brand : "Harry Winston",
        image : "Earring_04.jpg ",
    },
    {
        nameProduct : "Memoir Gold Plated Basket Earring",
        id : 5,
        price : 2400000,
        description : "description",
        category: "Earring",
        brand : "Harry Winston",
        image : "Earring_05.jpg ",
    },
    {
        nameProduct : "Gold Thick Hoop Earring",
        id : 6,
        price : 1700000,
        description : "description",
        category: "Earring",
        brand : "Graff",
        image : "Earring_06.jpeg ",
    },
    {
        nameProduct : "Gold Plated Small Earrings",
        id : 7,
        price : 1900000,
        description : "description",
        category: "Earring",
        brand : "Chopard",
        image : "Earring_07.jpg ",
    },
    {
        nameProduct : "Olive Leaf Earrings",
        id : 8,
        price : 1400000,
        description : "description",
        category: "Earring",
        brand : "Tiffany & Co",
        image : "Earring_08.jpg ",
    },
    {
        nameProduct : "Swarovski Qcean Blue Heart Earring",
        id : 9,
        price : 3000000,
        description : "description",
        category: "Earring",
        brand : "LEKANI",
        image : "Earring_09.jpg ",
    },
    {
        nameProduct : "Small Ball Stud Earrings",
        id : 10,
        price : 1600000,
        description : "description",
        category: "Earring",
        brand : "David Yurman",
        image : "Earring_10.jpeg ",
    },
    {
        nameProduct : "Sitashi Gold with Cubic Zirconia Drop Earrings",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Earring",
        brand : "Bvlgari",
        image : "Earring_11.jpg ",
    },
    // Necklace
    {
        nameProduct : "Aurora Pendant Halo Crystal Necklace",
        id : 12,
        price : 3000000,
        description : "description",
        category: "Necklace",
        brand : "LEKANI",
        image : "Necklace_01.jpg",
    },
    {
        nameProduct : "Iconic Swan Necklace",
        id : 13,
        price : 4500000,
        description : "description",
        category: "Necklace",
        brand : "Chopard",
        image : "Necklace_02.jpg",
    },
    {
        nameProduct : "Jewelry Crescent Pendant Moon Necklace",
        id : 14,
        price : 3700000,
        description : "description",
        category: "Necklace",
        brand : "LEKANI",
        image : "Necklace_03.jpg",
    },
    {
        nameProduct : "Platinum Natural Diamond Solitaire Pendant Necklace",
        id : 15,
        price : 4600000,
        description : "description",
        category: "Necklace",
        brand : "THAYA",
        image : "Necklace_04.jpg",
    },
    {
        nameProduct : "Double Layer Choker Necklance",
        id : 16,
        price : 3100000,
        description : "description",
        category: "Necklace",
        brand : "Chopard",
        image : "Necklace_05.jpg",
    },
    {
        nameProduct : "Sliver Butterfly Pendant Chain Necklace",
        id : 17,
        price : 2800000,
        description : "description",
        category: "Necklace",
        brand : "Buccellati",
        image : "Necklace_06.jpg",
    },
    {
        nameProduct : "Midsummer Night's Dream Design Necklace",
        id : 18,
        price : 4200000,
        description : "description",
        category: "Necklace",
        brand : "THAYA",
        image : "Necklace_07.jpg",
    },
    {
        nameProduct : "Sterling Sliver Infinity Pendant Chain Necklace",
        id : 19,
        price : 3700000,
        description : "description",
        category: "Necklace",
        brand : "Graff",
        image : "Necklace_08.jpg",
    },
    {
        nameProduct : "White Gold Heart Shaped Sky-Blue Topaz and Diamond Necklace",
        id : 20,
        price : 4400000,
        description : "description",
        category: "Necklace",
        brand : "Tiffany & Co",
        image : "Necklace_09.jpg",
    },
    //Ring
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Ring",
        brand : "Brand",
        image : "Ring_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Ring",
        brand : "Brand",
        image : "Ring_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Ring",
        brand : "Brand",
        image : "Ring_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Ring",
        brand : "Brand",
        image : "Ring_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Ring",
        brand : "Brand",
        image : "Ring_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Ring",
        brand : "Brand",
        image : "Ring_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Ring",
        brand : "Brand",
        image : "Ring_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Ring",
        brand : "Brand",
        image : "Ring_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Ring",
        brand : "Brand",
        image : "Ring_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Ring",
        brand : "Brand",
        image : "Ring_01.jpg",
    },
    //Bracelet
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Bracelet",
        brand : "Brand",
        image : "Bracelet_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Bracelet",
        brand : "Brand",
        image : "Bracelet_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Bracelet",
        brand : "Brand",
        image : "Bracelet_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Bracelet",
        brand : "Brand",
        image : "Bracelet_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Bracelet",
        brand : "Brand",
        image : "Bracelet_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Bracelet",
        brand : "Brand",
        image : "Bracelet_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Bracelet",
        brand : "Brand",
        image : "Bracelet_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Bracelet",
        brand : "Brand",
        image : "Bracelet_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Bracelet",
        brand : "Brand",
        image : "Bracelet_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Bracelet",
        brand : "Brand",
        image : "Bracelet_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Bracelet",
        brand : "Brand",
        image : "Bracelet_01.jpg",
    },
    {
        nameProduct : "Name",
        id : 11,
        price : 2600000,
        description : "description",
        category: "Bracelet",
        brand : "Brand",
        image : "Bracelet_01.jpg",
    },
]