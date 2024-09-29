const getTodos = (resource) => {
    
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        
        request.addEventListener('readystatechange', () => {
            //console.log(request, request.readyState);
            
            if(request.readyState === 4 && request.status === 200){
            //console.log(request, request.responseText)

            const data = JSON.parse(request.responseText);
            resolve(data);
        }else if(request.readyState === 4) {
            reject('error getting resources')
        }
    });

    request.open('GET',resource);
    request.send();
});
};

getTodos('luigi.json').then(data => {
    console.log('promise 1 resolved : ',data);
    return getTodos('mario.json');
}).then(data => {
    console.log('promise 2 resolved');
    return getTodos("shaun.json");
}).then(data => {
    console.log('promise 3 resolved');
}).catch(err => {
    console.log('Promise rejected : ',err);
})
// promises example

const getSomething = () => {
    return new Promise((resolve, reject) =>{
        // fetch something

        // resolve('some data');
        reject('some error');
    });
}

// getSomething().then((data) => {
//     console.log(data);
// },(err) => {
//     console.log(err);
// });

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })