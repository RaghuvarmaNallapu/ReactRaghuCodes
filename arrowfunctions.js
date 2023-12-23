let x = new Promise((resolve, reject) => {
    console.log("started");
    setTimeout(function f2(y) {
        let x = "1233";
        resolve(x);
        console.log("finished");
    }, 1000);
}).then((Success) => { 
    console.log("success", Success);
    throw {error: "Uncaught exception", message: "Uncaught exception"};
}, (Error) => {
    console.log("error",Error.message);
})
.catch((err) => { console.log("Catch error",err.message)})
.finally(() => { console.log("complated task")});