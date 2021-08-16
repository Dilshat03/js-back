// function removeDuplicateWords (s) {
//     return s.split(" ").filter((item,idx,s) =>{
//         return s.indexOf(item) === idx
//     }).join(' ')
// }
// console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))


// function sum(digits) {
//     return digits.split('').reduce((el,idx) =>{
//         `${el} + ${el} + `
//     },0)
//
// console.log(sum('3433'))


//Promise
//
// let a = 5
// new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject(a=10)
//     },4000)
// }).then((result)=>console.log(result))
//     .catch(()=>console.log('Error!'))


//
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((result) => result.json())
//     .then((data) => console.log(data))
//
//
// const dog = document.querySelector(".dog")
// const btn = document.querySelector(".btn")
// btn.addEventListener("click",()=>{
//     fetch(" https://api.thecatapi.com/v1/images/search")
//         .then((result) => result.json())
//         .then((data) => dog.src = data[0].url)
// })


// fetch('https://api.thecatapi.com/v1/breeds')
// .then(result => result.json())
// .then(data=>console.log(data.map(el=>el.name)))


// const input = document.querySelector(".textInput")
// const btn = document.querySelector(".btn")
// const img = document.querySelector(".img")

// btn.addEventListener("click", () => {
//     const names = input.value
//     fetch(`https://dog.ceo/api/breed/${names}/images/random`)
//         .then(result => result.json())
//         .then(data => {
//             if (data.code === 404){
//                 img.src = 'https://blog.vverh.digital/wp-content/uploads/2020/06/oblojka-404.png'
//             } else {
//                 img.src = data.message
//             }
//         })
//     input.value = ""
// })