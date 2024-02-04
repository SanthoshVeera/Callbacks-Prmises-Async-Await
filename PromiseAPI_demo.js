// function myfun(x){
//     return new Promise( (resolve,reject) => {
//         setTimeout(resolve(x),5000);
//             // if(x >= 10)
//             //     setTimeout(resolve(x),x*100);
//             // else
//             //     setTimeout(reject(x),x*100);
//     })
// }

// let P1 = myfun(50);
// P1.then(console.log,alert);

let promiseArray = [new Promise((resolve,reject) => { setTimeout(resolve,3000,222)}),
    new Promise((resolve,reject) => { setTimeout(resolve,3000,205)}),
    new Promise((resolve,reject) => { setTimeout(resolve,30,20)}),
    new Promise((resolve,reject) => { setTimeout(resolve,5000,25)}),
    new Promise((resolve,reject) => { setTimeout(resolve,1000,200)}) ];


    Promise.all(promiseArray).then(console.log);
    Promise.allSettled(promiseArray).then(console.log);
    Promise.any(promiseArray).then(console.log);
    Promise.race(promiseArray).then(console.log);



