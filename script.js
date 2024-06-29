var resultados = {
  opcao1: 0,
  opcao2: 0,
  opcao3: 0
};

// Função para registrar o voto
function votar() {
  var opcaoSelecionada = document.querySelector('input[name="vote"]:checked');
  if (opcaoSelecionada) {
      resultados[opcaoSelecionada.value]++;
      alert('Voto registrado com sucesso!');
      limparSelecao();
  } else {
      alert('Por favor, selecione uma opção para votar.');
  }
}

// Função para ver os votos
function verVotos() {
  var resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '<h2>Resultados:</h2>';
  resultadoDiv.innerHTML += '<p>Opção 1: ' + resultados.opcao1 + ' votos</p>';
  resultadoDiv.innerHTML += '<p>Opção 2: ' + resultados.opcao2 + ' votos</p>';
  resultadoDiv.innerHTML += '<p>Opção 3: ' + resultados.opcao3 + ' votos</p>';
}

// Função para limpar a seleção após votar
function limparSelecao() {
  var opcoes = document.getElementsByName('vote');
  for (var i = 0; i < opcoes.length; i++) {
      opcoes[i].checked = false;
  }
}