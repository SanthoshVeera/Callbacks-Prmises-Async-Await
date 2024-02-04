
function loadScript(source, cb) {
    let script = document.createElement("script");
    script.src = source;

    script.onload = cb();
  //  script.onerror = cb(new Error("I hate you"));

    document.head.append(script);
}


/*
"error first callback style" --> It is a standard
*/
// loadScript("deo.js", (error,msg) => {
//     if(error)
//     {
//         alert(error);
//     }
//     else{
//         alert(msg);
//     }
// });


loadScript("demo.js",() =>{
    setTimeout(alert,5000,"Loaded successfully");
})


