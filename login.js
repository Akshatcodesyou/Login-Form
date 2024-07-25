document.querySelector("#pass1").addEventListener("input", passsame);
document.querySelector("#pass2").addEventListener("input", passsame);

function passsame(){
    let pass1 = document.querySelector("#pass1").value;
    let pass2 = document.querySelector("#pass2").value;
    let passc = document.querySelector("#passc");

    if(pass1 === "" && pass2 === ""){
        passc.innerText = "";
    }
    else if(pass1 === "" || pass2 === ""){
        passc.innerText = "";
    }
    else if(pass1 === pass2){
        passc.innerText = "Password matched";
        passc.classList.remove("text-white");
        passc.classList.add("text-gray-400");
    }
    else{
        passc.innerText = "Password not matched";
        passc.classList.remove("text-gray-400");
        passc.classList.add("text-white");
    }
};

document.addEventListener('DOMContentLoaded', (event) => {
    let usname = document.querySelector("#usname");
    usname.addEventListener("focus", sugguname);

    function sugguname() {
        let usugg = document.querySelector("#usugg");
        let uname = document.querySelector("#uname").value.trim();
        let sugg1 = document.querySelector("#sugg1");
        if (uname === "") {
            usugg.style.display = "none";
            return;
        }
        let names = uname.split(' ');
        if (names.length > 0) {
            let firstname = names[0].toLowerCase();
            let suggestion = firstname + `.123`;
            sugg1.innerText = suggestion;
            usugg.style.display = "inline";
            usugg.addEventListener("click", suggesteduname);

            function suggesteduname() {
                usname.value = suggestion;
                usugg.style.display = "none";
            }
        } else {
            usugg.style.display = "none";
        }
    }
});

document.querySelector("#umail").addEventListener("blur", emailvalid);
function emailvalid() {
    let umail = document.querySelector("#umail").value;
    let mailc = document.querySelector("#mailc");
    let pass1 = document.querySelector("#pass1");
    if (umail === ""){
        mailc.innerText = "";
    }
    else if(!umail.includes(`@`)){
        mailc.innerText = "Invalid email";
        setTimeout(()=>{
            mailc.innerText = "";
        }, 2000);
    }
    else{
        mailc.innerText = "";
    }
};

document.querySelector("#passshowbtn").addEventListener("click", function(event) {
    event.preventDefault();
    passreveal();
});

function passreveal() {
    let passall = document.querySelectorAll("#passall input[type='password'], #passall input[type='text']");
    passall.forEach(pass => {
        if (pass.type === "password") {
            pass.type = "text";
            passshowbtn.classList.remove("text-white");
            passshowbtn.classList.add("text-gray-400");
        } else {
            pass.type = "password";
            passshowbtn.classList.remove("text-gray-400");
            passshowbtn.classList.add("text-white");
        }
    });
};

document.querySelector("#submitbtn").addEventListener("click", function(event){
    event.preventDefault();
    newuser();
});

function newuser(){
    let uname = document.querySelector("#uname").value;
    let umail = document.querySelector("#umail").value;
    let pass1 = document.querySelector("#pass1").value;
    let passc = document.querySelector("#passc");
    let formcomplete = document.querySelector("#formcomplete");

    if(uname === "" || umail === "" || pass1 === ""){
        formcomplete.innerText = "Please enter all inputs";
        setTimeout(() => {
            formcomplete.innerText = "";
        }, 2000);
    }
    else{
        document.querySelector("#form").reset();
        passc.innerText = "";
        showuser(uname);
        formcomplete.innerText = "";
    };
};

function showuser(uname) {
    let form = document.querySelector("#form");
    let formwel = document.querySelector("#formwel");
    let names = uname.split(' ');

    if(names.length >= 1){
        let firstname = names[0];
        form.style.display = "none";
        formwel.style.display = "block";
        formwel.innerText = 'Hey, ' + firstname ;
    }
    
};