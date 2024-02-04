function fun1(){
    return new Promise( (resolve,reject) => {
        setTimeout(resolve,30000,"resolved Promise");
        setTimeout(reject,6000,"rejected Promise"+6000);
        setTimeout(resolve,9000,"resolved Promise"+9000);
        
    })
}

async function f2(){
try{
let result = await fun1();
alert(result);
}catch(error)
{
    alert(error);
}
}

f2();