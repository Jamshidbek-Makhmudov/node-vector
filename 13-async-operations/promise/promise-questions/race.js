const existingValue = 5;
const existingPromise = Promise.reject(new Error("blah"));
const existingThenable = {
    then() {
        console.log("never going to resolve >:)");
    }
};

Promise.race([existingValue, existingPromise, existingThenable]).then(
    value => { console.log("got a value", value); },
    error => { console.log("got an error", error); },
);