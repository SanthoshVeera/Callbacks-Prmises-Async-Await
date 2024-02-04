fetch('https://api.github.com/users/SanthoshVeera',{
    mode : 'no-cors'
}).then(
    (response) => {
        // response =JSON.parse(response);
        console.log(response.json());
    }
);


// function f1(){
//     return new Promise(resolve => {
//         console.log("resolved 1st promise");
//         resolve("done");
//     })
// }

// f1().then((x) => {
//     console.log(x);
// });