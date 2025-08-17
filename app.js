// Arry que Armazena os nomes.
let amigos = [];

//Função para exibir a mensagem na tela e substituir a caixa de diálogo.
function exibirTextoNaTela(texto) {
    const mensagem = document.getElementById('exibirmensagem');
    if (mensagem) {
        mensagem.textContent = texto;

        // Exibe a mensagem na tela por 4 segundos.
        setTimeout(() => {
            mensagem.textContent = '';
        },4000);
        /*O que é o setTimeout?
        setTimeout é uma função que executa um trecho de código após um determinado tempo de espera (em milissegundos).
        Ou seja, você agenda uma ação para acontecer depois de um atraso.
        Para que serve?
        Mostrar mensagens temporizadas.
        Criar atrasos em animações.
        Esperar algum tempo antes de executar uma função.
        Simular uma operação que demora (ex: aguardar resposta de um servidor).*/
    }
}

// Função para adicionar nomes a lista.
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    
    //Exibe os nomes adicionados na tela.
    if (nome === '') {
        exibirTextoNaTela('Digite os nomes para serem adicionados à lista.');
        input.focus();
        return;
    }

    //Verifica se o nome já existe, ignorando maiúsculo ou minúsculo.
    const nomeMinusculo = nome.toLowerCase();
    const existe = amigos.some(amigo => amigo.toLowerCase() === nomeMinusculo);
    /*O que é toLowerCase()?
    toLowerCase() é um método das strings (texto) no JavaScript.
    Ele converte todos os caracteres de uma string para letras minúsculas.
    Retorna uma nova string com todas as letras em minúsculo.
    Não altera a string original, porque strings são imutáveis.
    Para que serve?
    Facilita comparações entre textos ignorando se estão em maiúsculas ou minúsculas.
    Útil para validar nomes, senhas, buscas, etc.
    Exemplo: comparar se dois nomes são iguais, mesmo que um tenha letras maiúsculas e o outro minúsculas.*/
    
    //Exibe a mensagem na tela caso o usuário adicione nomes iguais.
    if (existe) {
        exibirTextoNaTela('Esse nome já foi adicionado.');
        input.value = '';
        input.focus();
        return;
    }

    //Adiciona o nome na lista, limpa o input e atualiza a exibição do nome na tela.
    amigos.push(nome);
    input.value = '';
    input.focus();
    atualizarLista();
}
//Atuliza a lista com os os nomes adicionados.
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    if (!lista) return;
    lista.innerHTML = "";

    //Exibe na tela os nomes adicionados.
    for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}
//Função para sortear um nome da lista.
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    if (!resultado) return;
    resultado.innerHTML = '';

    //Exibe a mensagem na tela caso o usuário click no botão "Sortear amigo" com a lista vazia.
    if(amigos.length < 2 ) {
        exibirTextoNaTela('Para realizar o sorteio, insira pelo menos dois nomes!');
        return;
    }

    //Mostra na tela o nome sorteado.
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];
    const p = document.createElement('p');
    p.innerHTML = `O amigo sorteado foi: <strong>${nomeSorteado}</strong>`;
    resultado.appendChild(p);
    //colocar acento crase é super importante pois o projeto não vai funcionar sem ele.

    //Vai limpar a lista após o sorteio.
    amigos.length = 0;
    atualizarLista();
    document.getElementById('amigo').focus();
    return nomeSorteado;
}
    //O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
