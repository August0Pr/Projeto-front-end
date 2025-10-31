const formReserva = document.getElementById('formReserva');
const msgReserva = document.getElementById('msgReserva');

formReserva.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = formReserva.nome.value.trim();
  const email = formReserva.email.value.trim();
  const telefone = formReserva.telefone.value.trim();
  const data = formReserva.data.value;
  const hora = formReserva.hora.value;
  const pessoas = formReserva.pessoas.value;

  if (!nome || !email || !telefone || !data || !hora || !pessoas) {
    msgReserva.style.color = 'red';
    msgReserva.textContent = 'Por favor, preencha todos os campos corretamente.';
    return;
  }

  msgReserva.style.color = '#e8c547';
  msgReserva.textContent = `Obrigado, ${nome}! Sua reserva para ${pessoas} pessoa(s) no dia ${data} às ${hora} foi realizada com sucesso. Entraremos em contato pelo email ${email}.`;

  formReserva.reset();
});