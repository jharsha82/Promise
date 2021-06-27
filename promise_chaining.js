// Lets create several functions here that return Promises
// and look at promise chaining


//simulate fetching some data
let fetchData = function(data) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
                console.log('Processing data completed');
                resolve({
                    id: 1,
                    message: 'Nice Work'
                });
        }, 2000);
    });
};


//parse data into
let parseData = function(data) {
    return new Promise((resolve, reject) => {
        //foo = bar; - in order to fail the promise and throw an error using catch block in chaining
        setTimeout(()=> {
            let parsedOutput = `Parsing data with: ${data.id} with message ${data.message}`;
            resolve({
                parsed: parsedOutput
            });
        }, 2000);
    });
}

//echo/display the data 
let displayData = function(data) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log(data.parsed);
        }, 2000);
    });
}

//chaining the promise 
fetchData().then(parseData).then(displayData).catch(err => {
    console.log(err);
})