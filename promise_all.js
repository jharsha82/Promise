 //Promise.all().

const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Hello');
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'World');
});

const p3 = 1000;


//promise.all()
Promise.all([p1, p2, p3]).then(result => {
    console.log(result);
}).catch((err) => {
    console.log('promise rejection', err);
});

//promise.race();  = returns a promise who so ever resolves at first
Promise.race([p1, p2]).then(result => {
    console.log(result);
}).catch((err) => {
    console.log('promise rejection', err);
});