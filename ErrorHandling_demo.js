

// let promise = new Promise(resolve,reject) => {
//     console.log("Inside promise executor function");
//     resolve("resolved");
// })

// promise.then( (x) => {
//     console.log(x);
//     return new Promise()
// });

function returnPromise(x){
    return new Promise((resolve,reject) => {
        console.log("Inside promise executor function");

        if( x <= 10)
        {
        resolve("resolved"+x);
        }
        else{
            reject("rejected"+x);
        }
    })
}

// returnPromise(20).then(alert).catch(console.log);
returnPromise(10).then( x => {
   console.log(x);
   return returnPromise(20);
}).catch( () => {
    console.log("I'm not considering the rejected message");
    return returnPromise(5);
}).then( () => {
    console.log("Instead of calling reject, I'm throwing error");
    return new Promise(() => {
        throw new Error("random error");
    });
}).catch(alert);