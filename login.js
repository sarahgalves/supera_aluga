function submit(){
    var email = document.getElementById("email");
    var pasword = document.getElementById("password");

    if(email.value == true && password.value == true){
        localStorage.setItem("acesso", true);
        window.location.href="index.html";
    }else{
        alert("email ou senha inválido");
    }
}        