var mapa = document.querySelector("#mapa")
var imagemMapa = mapa.querySelectorAll(".imagem-mapa a")
var linksMapa = mapa.querySelectorAll(".mapa-lista a")

if(NodeList.prototype.forEach === undefined) {
    NodeList.prototype.forEach = function (callback){
        [].forEach.call(this, callback)
    }
}

var areaAtivado = function (nomeId) {
    
    /* Removendo classe ativado */
    mapa.querySelectorAll(".ativado").forEach(function(item){
        item.classList.remove("ativado")
    })
    if (nomeId !== undefined) {
    /* Concatenando a variavel nomeID com um prefixo para selecionar pela ID o 
    elemento dentro da div mapa-lista e adicionar uma class (ativado)*/
        document.querySelector("#lista-"+nomeId).classList.add("ativado")
        document.querySelector("#mapa-"+nomeId).classList.add("ativado")
    }
}

imagemMapa.forEach(function (path) {
    path.addEventListener("mouseenter", function () {
        /* Pegando o nome da ID do elemento path dentro da div imagemMapa 
        e retirando uma parte e armazenando na variavel nomeID */
        var nomeId = this.id.replace("mapa-", "")
        areaAtivado(nomeId);
    });
});

linksMapa.forEach(function (link) {
    link.addEventListener("mouseenter", function (){
        var nomeId = this.id.replace("lista-", "")
        areaAtivado(nomeId)
    });
    
});

mapa.addEventListener("mouseover", function () {
    areaAtivado()
})