function fun() {
    return new Promise(function f1(resolve, reject) {
        console.log("started");
        setTimeout(function f2(y) {
            let x = "1233";
            resolve(x);
            console.log("finished");
        }, 1000);
    });
}

let x = fun();
x.then(function sucessful(value) {
    console.log("Success value", value);
    throw { type: "syntatical Error", error: "new error" }
})
    // , function error(err) {
    //     console.log("Error value", err);
    // })
    .catch(function error(err) {
        console.log("Error value", err.type);
    });