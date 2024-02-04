function loadScript(source){
        return new Promise((resolve,reject) => {
            let script = document.createElement("script");
            script.src = source;
            document.head.append(script);
            script.onload(resolve(script));
            script.onerror(reject(new Error("Unable to load script elem")));


        });
}

loadScript("demo.js").then( (script) => {
    alert("successfully loaded the script"+script.src);
}, (error) => {
    alert("could not load the script"+error);
}).finally( () => {
    alert("Inside finally block");
})