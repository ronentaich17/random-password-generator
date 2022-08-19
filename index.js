const btnEl = document.querySelector(".btn") //the generate button
const inputEl = document.getElementById("input") //where the password is generated
const copyIconEl = document.querySelector(".fa-copy") //the copy icon shown on the right hand side of the "input"
const alertContainerEl = document.querySelector(".alert-container") //the alert that pops up when a password is copied 

btnEl.addEventListener("click", ()=> {
    createPassword();
});

copyIconEl.addEventListener("click",()=>{
    copyPassword();
    if(inputEl.value){
        alertContainerEl.classList.remove("active");
        setTimeout(()=>{
            alertContainerEl.classList.add("active");
        },2000);
    }
});

/*
In the createPassword() function, a random number is chosen on line 29, and then the character at that index in
the chars string will be assigned to the password on line 30 until the desired length is reached. Once this is done,
the alert will pop up (the conditions of this alert are managed in function above)
*/
function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //the characters that may show up in the generated password
    const passwordLength = 13;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum+1);
    }
    inputEl.value = password;
    alertContainerEl.innerText = password + " copied!"
}

function copyPassword(){
    //the two lines below simply highlights the password in the input area. Looking back, it doesn't look very pleasing so I commented it out
    //inputEl.select();
    //inputEl.setSelectionRange(0,9999); //for mobile users
    navigator.clipboard.writeText(inputEl.value); 
}