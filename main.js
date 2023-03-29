// let text = "21-mart Navruz bayrami"

// const newtext = function(iteam) {

//   const onText = text.slice(0, 3)
// }

// console.log(text );
// let arr = [1, 2, 3, 4, 5, 6]

// const challange = function (arry, number) {

//   return arry.indexOf(number);

// }

// console.log(challange(arry, 5));



// let arr = [1, 2, 3, 4, 5, 6];

// const findIndex = function (elment, number) {

//   return arr.indexOf(number);

// }

// console.log(findIndex(arr, 5));


// const employees = {
//   Bob: 600,
//   john: 700,
//   Mariana: 800
// };

// const on = function (summ) {
//   let total = 0;
//   for (let sum in summ) {
//     total += summ[sum]
//     }

//     return total;
//   }

//   console.log(on(employees));


// const names = ['Banan', 'Apple', 'Orange']

// // names.sort((str1, str2) => str1.localeCompare(str2));

// console.log(names);

// const animals = [
//   {
//       age: 2,
//       type: 'dog'
//   },
//   {
//       age: 3,
//       type: 'cat'
//   },
//   {
//       age: 8,
//       type: 'dog'
//   },
//   {
//       age: 8,
//       type: 'horse'
//   },
//   {
//       age: 8,
//       type: 'dog'
//   },
//   {
//       age: 8,
//       type: 'elephant'
//   }
// ]

// const result = animals.filter((checkAdult) => {

//   if (animals.type === 'dog')
//   return animals;

// })

// console.log(result);








const cars = [
        {
            img: 'https://motor.ru/imgs/2022/03/03/10/5274800/6ddcf7e5e0a907893873e987c81ec9d1fedcc76e.jpg',
            car: 'BMW',
            status: 'new',
            quantity: 8
        },
        {
            img: 'https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/home/720x720_the-new-bmw-i7-xdriv.jpg.grp-transform/small/720x720_the-new-bmw-i7-xdriv.jpg',
            car: 'BMW',
            status: 'old',
            quantity: 12
        },
        {
            img: 'https://images.drive.com.au/driveau/image/upload/c_fill,h_675,w_1200/q_auto:eco/f_auto/v1/cms/uploads/ggutkfdonramc5akyims',
            car: 'Mercedes Benz',
            status: 'new',
            quantity: 2
        },
        {
            img: 'https://www.investing.com/academy/wp-content/uploads/2022/08/tesla-statistics.jpg',
            car: 'Tesla',
            status: 'new',
            quantity: 15
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
            car: 'Toyota',
            status: 'old',
            quantity: 19
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
            car: 'Toyota',
            status: 'old',
            quantity: 19
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
            car: 'Toyota',
            status: 'old',
            quantity: 19
        }
    ]

// const infoCar = cars.map((element) => {
//     return `
//     <div class="box">
//     <img src="${element.img}" alt="">
//     <h2>${element.car}</h2>
//     <span>${element.status}</span>
//     <p>${element.quantity}</p>
//     </div>
// `
// });

// const box = document.querySelector('.best');

// box.innerHTML = infoCar.join('');
