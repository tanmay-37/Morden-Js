const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();
    
    
    
    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState);
        
        if(request.readyState === 4 && request.status === 200){
            //console.log(request, request.responseText)

            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }else if(request.readyState === 4) {
            console.log('Could not fetch the data');
            callback('Could not fetch data', undefined);
        }
});

request.open('GET',resource);

request.send();
}

console.log(1);
console.log(2);


getTodos('luigi.json', (err, data) => {
    console.log(data)
    getTodos('mario.json', (err,data) => {
        console.log(data);
        getTodos('shaun.json', (err, data) => {
            console.log(data);
        })
    })
});


console.log(3);
console.log(4);