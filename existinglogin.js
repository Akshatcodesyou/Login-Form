let uname = document.querySelector("#uname");
document.querySelector("#passshowbtn").addEventListener("click", function(event) {
    event.preventDefault();
    passreveal();
});

function passreveal() {
    let passall = document.querySelectorAll("#passall input[type='password'], #passall input[type='text']");
    let passshowbtn = document.querySelector("#passshowbtn");
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


document.querySelector("#signinbtn").addEventListener("click", function(event){
    event.preventDefault();
    newuser();
});

function newuser(){
    let uname = document.querySelector("#uname").value;
    let formcomplete = document.querySelector("#formcomplete");
    let pass1 = document.querySelector("#pass1").value;
    if(uname === "" || pass1 === ""){
        formcomplete.innerText = "Please enter all inputs";
        setTimeout(() => {
            formcomplete.innerText = "";
        }, 2000);
    }
    else{
        document.querySelector("#form").reset();
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
        formwel.innerText = 'Welcome back, ' + firstname ;
    }
};