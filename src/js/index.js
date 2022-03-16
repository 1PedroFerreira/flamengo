const listaSelecaoJogadores = document.querySelectorAll('.jogador')
const jogadoresCard = document.querySelectorAll('.cartao-jogador')

listaSelecaoJogadores.forEach(jogador => {
    jogador.addEventListener('click', () => {
        const cartaoJogadorAberto = document.querySelector('.aberto')
        cartaoJogadorAberto.classList.remove('aberto')

        const idJogadorSelecionado = jogador.attributes.id.value
        
        const idDoCartaoJogadorParaAbrir = 'cartao-' + idJogadorSelecionado
        const cartaoJogadorParaAbrir = document.getElementById(idDoCartaoJogadorParaAbrir)
        cartaoJogadorParaAbrir.classList.add('aberto')

        const jogadorAtivoNaListagem = document.querySelector('.ativo')
        jogadorAtivoNaListagem.classList.remove('ativo')

        const jogadorSelecionadoNaListagem = document.getElementById(idJogadorSelecionado)
        jogadorSelecionadoNaListagem.classList.add('ativo')
    })
})