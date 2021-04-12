export const availableRewards = [
    {
        id: 1,
        title: "150 points - $2.50 off",
        eligible: true,
    },
    {
        id: 2,
        title: "340 points - any 20oz tea or coffee",
        eligible: false,
    },
    {
        id: 3,
        title: "400 points - any 2 x 20oz tea or coffee",
        eligible: false,
    },
    {
        id: 4,
        title: "500 points - any 3 x 20oz tea or coffee",
        eligible: false,
    },
]

export const locations = [
    {
        id: 1,
        title: "Garden Grove #1",
        address: "10189 Westminster Avenue Garden Grove, CA",
        operation_hours: "Sunday - Thursday: 10AM - 11PM \nFriday - Saturday: 10AM - Midnight",
        bookmarked: true
    },
    {
        id: 2,
        title: "Garden Grove #2",
        address: "10189 Westminster Avenue Garden Grove, CA",
        operation_hours: "Sunday - Thursday: 10AM - 11PM \nFriday - Saturday: 10AM - Midnight",
        bookmarked: false
    },
    {
        id: 3,
        title: "Garden Grove #3",
        address: "10189 Westminster Avenue Garden Grove, CA",
        operation_hours: "Sunday - Thursday: 10AM - 11PM \nFriday - Saturday: 10AM - Midnight",
        bookmarked: true
    },
    {
        id: 4,
        title: "Garden Grove #4",
        address: "10189 Westminster Avenue Garden Grove, CA",
        operation_hours: "Sunday - Thursday: 10AM - 11PM \nFriday - Saturday: 10AM - Midnight",
        bookmarked: false
    },
]

export const menuList = [
    {
        id: 1,
        name: "Brown Sugar Fresh Milk Tea",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/bubble-tea.png"),
        category: "Milk Tea"
    },
    {
        id: 2,
        name: "Matcha Milk Tea",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/bubble-tea.png"),
        category: "Milk Tea"
    },
    {
        id: 3,
        name: "Strawberry Milk Tea",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/bubble-tea.png"),
        category: "Milk Tea"
    },
    {
        id: 4,
        name: "Ice Lemon Tea",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/ice-tea.png"),
        category: "Specialtea"
    },
    {
        id: 5,
        name: "Berry Smoothie",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/smoothie.png"),
        category: "Smoothie"
    },
    {
        id: 6,
        name: "Immune Booster",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/smoothie.png"),
        category: "Smoothie"
    },
    {
        id: 7,
        name: "Very Berry",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/smoothie.png"),
        category: "Smoothie"
    },
    {
        id: 8,
        name: "Watermelon Lychee Crush",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/smoothie.png"),
        category: "Smoothie"
    },
    {
        id: 9,
        name: "Americano",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/coffee.png"),
        category: "Coffee"
    },
    {
        id: 10,
        name: "Cappuccino",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/coffee.png"),
        category: "Coffee"
    },
    {
        id: 11,
        name: "Mocha",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/coffee.png"),
        category: "Coffee"
    },
    {
        id: 12,
        name: "Espresso",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/coffee.png"),
        category: "Coffee"
    },
    {
        id: 13,
        name: "Long Black",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/coffee.png"),
        category: "Coffee"
    },
    {
        id: 14,
        name: "Hash Brown",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/french-fries.png"),
        category: "Snack"
    },
    {
        id: 15,
        name: "French Fries",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/french-fries.png"),
        category: "Snack"
    },
]

export const milkList = [
    {
        id: 1,
        name: "Almond Milk",
        image: require("../assets/icons/milk.png"),
    },
    {
        id: 2,
        name: "Oat Milk",
        image: require("../assets/icons/milk2.png"),
    },
    {
        id: 3,
        name: "Whole Milk",
        image: require("../assets/icons/milk3.png"),
    }
]

const promos = [
    {
        id: 1,
        name: "Strawberry Sensation",
        description: "Strawberry smoothie with strawberry bits",
        calories: "379 - 570",
        image: require("../assets/images/strawberry-background.png")
    },
    {
        id: 2,
        name: "Strawberry Sensation",
        description: "Strawberry smoothie with strawberry bits",
        calories: "400 - 570",
        image: require("../assets/images/strawberry-background.png")
    },
    {
        id: 3,
        name: "Strawberry Sensation",
        description: "Strawberry smoothie with strawberry bits",
        calories: "449 - 570",
        image: require("../assets/images/strawberry-background.png")
    },

]

const dummyData = {
    availableRewards,
    locations,
    menuList,
    milkList,
    promos,
};

export default dummyData;