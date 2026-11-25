const formulario = document.querySelector('#form-prancha');
const resultado = document.querySelector('#resultado');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const peso = Number(document.querySelector('#peso').value);
  const nivel = document.querySelector('#nivel').value;
  alert('O valor recebido no nivel foi: "' + nivel + '"');

  if (!peso || peso <= 0 || nivel === '') {
    resultado.innerHTML = '<p>Por favor, preencha seu peso corretamente e selecione seu nível.</p>';
    return;
  }

  let pranchaIdeal = '';
  let justificativa = '';
  let litragem = 0;

  if (nivel === 'Iniciante') {
    litragem = (peso * 0.65).toFixed(0);
    if (peso <= 75) {
      pranchaIdeal = 'Softboard (Prancha de espuma) ou Funboard';
      justificativa = 'Garantem muita estabilidade, segurança contra impactos e facilidade na remada para pegar as primeiras ondas.';
    } else {
      pranchaIdeal = 'Longboard (Pranchão) ou Softboard grande (8\'0" a 9\'0")';
      justificativa = 'Como você tem mais de 75kg e está começando, precisa de bastante volume e largura para ter equilíbrio.';
    }
  } else if (nivel === 'Intermediario') {
    litragem = (peso * 0.45).toFixed(0);
    if (peso <= 75) {
      pranchaIdeal = 'Funboard (Evolution) ou Fish';
      justificativa = 'Oferecem um ótimo equilíbrio entre estabilidade para remada e agilidade para começar a fazer curvas.';
    } else {
      pranchaIdeal = 'Funboard de maior volume ou Longboard Performance';
      justificativa = 'Mantêm uma boa flutuação para o seu peso sem perder a capacidade de manobrar na parede da onda.';
    }
  } else if (nivel === 'Avancado') {
    litragem = (peso * 0.36).toFixed(0);
    if (peso <= 80) {
      pranchaIdeal = 'Shortboard (Pranchinha) ou Fish';
      justificativa = 'Ideais para alta velocidade, resposta rápida e manobras radicais.';
    } else {
      pranchaIdeal = 'Shortboard com mais volume (Híbrida) ou Semi-Gun (para ondas grandes)';
      justificativa = 'Projetadas para suportar seu peso mantendo a performance e a estabilidade em ondas maiores.';
    }
  } else {
    resultado.innerHTML = `<p>Erro: nível "${nivel}" não reconhecido.</p>`;
    return;
  }

  resultado.innerHTML = `
    <h3>Recomendação para você:</h3>
    <p><strong>Prancha ideal:</strong> ${pranchaIdeal}</p>
    <p><strong>Litragem aproximada recomendada:</strong> ~${litragem} litros</p>
    <p><strong>Por quê?</strong> ${justificativa}</p>
  `;
});