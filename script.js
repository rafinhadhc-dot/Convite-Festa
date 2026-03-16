const dataFesta = new Date("April 04, 2026 13:00:00").getTime();

const contador = document.getElementById("contador");

setInterval(function(){

const agora = new Date().getTime();
const diferenca = dataFesta - agora;

const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

contador.innerHTML =
`Faltam ${dias} dias, ${horas} horas e ${minutos} minutos para a festa 🎉`;

},1000);
