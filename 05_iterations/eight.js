// Reduce
// const myArr = [1, 2, 3, 4]

// const valStart = 0
// const sumWithStart = myArr.reduce(
//     function (valInc, valCurrent){ return valInc + valCurrent},valStart 
// );
// console.log(sumWithStart);

const shoppingCart =[
    {
      itemName: "js Course",
      price: 2999
    },
    {
      itemName: "py Course",
      price: 999
    },
    {
      itemName: "mobile dev Course",
      price: 5999
    },
    {
      itemName: "data science Course",
      price: 12999
    }
]
const priceToPay = shoppingCart.reduce(
    (acc, item) => acc + item.price, 0
)

console.log(priceToPay);
