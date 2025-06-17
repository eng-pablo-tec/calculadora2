function calcularHoras() {
  const entrada = document.getElementById('entrada').value;
  const inicioIntervalo = document.getElementById('inicioIntervalo').value;
  const fimIntervalo = document.getElementById('fimIntervalo').value;
  const saida = document.getElementById('saida').value;

  if (!entrada || !inicioIntervalo || !fimIntervalo || !saida) {
    alert("Preencha todos os campos!");
    return;
  }

  const minutosTrabalhados = calcularMinutos(entrada, inicioIntervalo) + calcularMinutos(fimIntervalo, saida);

  const horas = String(Math.floor(minutosTrabalhados / 60)).padStart(2, '0');
  const minutos = String(minutosTrabalhados % 60).padStart(2, '0');

  document.getElementById('total').innerText = `${horas}:${minutos}`;
}

function calcularMinutos(inicio, fim) {
  const [h1, m1] = inicio.split(':').map(Number);
  const [h2, m2] = fim.split(':').map(Number);
  return (h2 * 60 + m2) - (h1 * 60 + m1);
}
