function adicionar_ferramenta(){
    var ferramenta;
    ferramenta = document.getElementById('tipo').value + ' | ' + 
    document.getElementById('qtd').value + ' | ' + 
    document.getElementById('price').value;
    localStorage.setItem("ferramenta_"+localStorage.id,ferramenta);
}