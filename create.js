function create_account(){
    if(typeof(Storage) !== "undefined"){//verifica se o navegador tem suporte
        if(localStorage.qtdUsers){
            localStorage.qtdUsers = Number(localStorage.qtdUsers)+1;
        }else{
            localStorage.qtdUsers = 1;
        }
        var cadastro;
        cadastro = document.getElementById('name').value + ' | ' + 
        document.getElementById('userName').value + ' | ' + 
        document.getElementById('email').value + ' | ' + 
        document.getElementById('password').value + ' | ' + 
        document.getElementById('address').value + ' | ' + 
        document.getElementById('telefone').value;
        localStorage.setItem("cadastro_"+localStorage.qtdUsers,cadastro);
    }else{
        alertert();
    }
}