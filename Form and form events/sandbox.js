const form = document.querySelector('.signup-form')
//const username = document.querySelector('#username')

const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit', e =>{
    e.preventDefault();
    //console.log(username.value)

    // console.log(form.username.value)
    const username = form.username.value;

    if(usernamePattern.test(username)){
        feedback.textContent = "The username is valid"
    }else{
        feedback.textContent = "Username should be between 6 to 12"
    }
    
})

//testing regex
// const username = 'Monkey D. Luffy'
// const pattern = /[a-zA-z.]{6,}/

// let result = pattern.test(username);
// console.log(result);

// if(result){
//     console.log("Regex test passed :)")
// }else{
//     console.log("Regex test failed :(")
// }




//LIVE FEEDBACK

form.username.addEventListener('keyup',e=>{
    //console.log(e.target.value,form.username.value )

    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class','sucess')
    }else{
        form.username.setAttribute('class','error')
    }
})