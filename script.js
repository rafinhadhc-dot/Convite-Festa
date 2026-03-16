// Data e hora da festa
const dataFesta = new Date("2026-04-04T13:00:00").getTime();
const contador = document.getElementById("contador");

setInterval(function () {
  const agora = new Date().getTime();
  const diferenca = dataFesta - agora;

  if (diferenca > 0) {
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

    contador.innerHTML = `Faltam ${dias} dias, ${horas} horas e ${minutos} minutos para a festa 🎉`;
  } else {
    contador.innerHTML = "A festa já começou! 🎊";
  }
}, 1000);
