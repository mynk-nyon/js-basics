

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return num > 4
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    {title: 'Book1', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book2', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book3', genre: 'History', publish: 2003, edition: 2007},
    {title: 'Book4', genre: 'Science', publish: 2007, edition: 2010}
]

// const userBooks = books.filter( (bk) => bk.genre === 'History')

const userBooks = books.filter
((bk) => {
        return bk.publish >= 2000 &&bk.genre == 'History'
    }
)
console.log(userBooks);