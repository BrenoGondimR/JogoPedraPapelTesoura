var game = ["pedra" , "papel","tesoura"];

var pedra = "pedra";
var papel = "papel";
var tesoura = "tesoura";

var user;
var bot;

var vencedor;
var venc;

var submit;

function nome() {
    submit = document.getElementById("submit").value;


}



function jogar(){

    var teste = Math.floor(Math.random() * game.length);

    if (teste === 0) {
        bot = "pedra";
    } else if (teste === 1) {
        bot = "papel";
    } else if (teste === 2) {
        bot = "tesoura";
    }
    
    if (user == pedra && bot == papel ){
        vencedor = papel;
        venc = "Bot";
    } else if (user == papel && bot == pedra){
        vencedor = papel;
        venc = "User";
    } else if (user == pedra && bot == tesoura ){
       vencedor =  pedra;
       venc = "User";
    } else if (user == tesoura && bot == pedra){
       vencedor =  pedra;
       venc = "Bot";
    } else if (user == papel && bot == tesoura ){
       vencedor =  tesoura;
       venc = "Bot";
    } else if (user == tesoura && bot == papel){
       vencedor =  tesoura;
       venc = "User";
    } else if (user == pedra && bot == pedra ){
        vencedor =  "Empate";
        venc = "Ninguem";
    } else if (user == papel && bot == papel ){
        vencedor =  "Empate";
        venc = "Ninguem";
    } else if (user == tesoura && bot == tesoura ){
        vencedor =  "Empate";
        venc = "Ninguem";

    } 


    document.getElementById("bot").innerText= "O BOT PENSOU EM: "+ bot;
    document.getElementById("user").innerText= "VOCÊ ESCOLHEU: "+ user;
    document.getElementById("vencedor").innerText= "RESULTADO: "+ vencedor ;
    document.getElementById("nome").innerText= "QUEM VENCEU: "+ venc ;

    

}

function jogar2(){

    submit = document.getElementById("PlayAgain").value;

    var teste = Math.floor(Math.random() * game.length);

    if (teste === 0) {
        bot = "pedra";
    } else if (teste === 1) {
        bot = "papel";
    } else if (teste === 2) {
        bot = "tesoura";
    }
    
    if (user == pedra && bot == papel ){
        vencedor = papel;
        venc = "Bot";
    } else if (user == papel && bot == pedra){
        vencedor = papel;
        venc = submit;
    } else if (user == pedra && bot == tesoura ){
       vencedor =  pedra;
       venc = submit;
    } else if (user == tesoura && bot == pedra){
       vencedor =  pedra;
       venc = "Bot";
    } else if (user == papel && bot == tesoura ){
       vencedor =  tesoura;
       venc = "Bot";
    } else if (user == tesoura && bot == papel){
       vencedor =  tesoura;
       venc = submit;
    } else if (user == pedra && bot == pedra ){
        vencedor =  "Empate";
        venc = "Ninguem";
    } else if (user == papel && bot == papel ){
        vencedor =  "Empate";
        venc = "Ninguem";
    } else if (user == tesoura && bot == tesoura ){
        vencedor =  "Empate";
        venc = "Ninguem";

    } 


    document.getElementById("bot").innerText= "O BOT PENSOU EM: "+ bot;
    document.getElementById("user").innerText= "VOCÊ ESCOLHEU: "+ user;
    document.getElementById("vencedor").innerText= "RESULTADO: "+ vencedor ;
    document.getElementById("nome").innerText= "QUEM VENCEU: "+ venc ;

    

}


function pedraPlay() {
    user = "pedra"
    jogar2();
}
function papelPlay() {
    user = "papel"
    jogar2();
}
function tesouraPlay() {
    user = "tesoura"
    jogar2();
}





















