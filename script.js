<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Many Things - Formulário Interativo</title>
</head>
<body>

    <!-- Seu Formulário Base -->
    <form id="many-things-form" action="#" method="POST">
        <label for="campo-nome">Nome:</label>
        <input type="text" id="campo-nome" name="nome" required>

        <label for="campo-email">E-mail:</label>
        <input type="email" id="campo-email" name="email" required>

        <button type="submit">Enviar Dados</button>
    </form>

    <div id="resultado-resposta"></div>

    <!-- Script Atualizado -->
    <script src="app.js"></script>
</body>
</html>
document.addEventListener('DOMContentLoaded', () => {
    const formElement = document.getElementById('many-things-form');

    if (formElement) {
        formElement.addEventListener('submit', handleFormSubmit);
    }
});

// Função principal de submissão
async function handleFormSubmit(event) {
    event.preventDefault(); // Evita o comportamento padrão do navegador

    const form = event.target;
    const formData = new FormData(form);
    
    // Transforma os dados em um objeto inteligente
    const dadosFormulario = Object.fromEntries(formData.entries());

    try {
        // Exemplo de manipulação local
        console.log('Dados processados:', dadosFormulario);
        exibirMensagemSucesso(dadosFormulario.nome);

        // Se precisar enviar para um backend, use fetch() aqui
        // await enviarParaServidor(dadosFormulario);

    } catch (error) {
        console.error('Erro ao processar o formulário:', error);
    }
}

// Estrutura de função para atualização da página
function exibirMensagemSucesso(nome) {
    const containerResposta = document.getElementById('resultado-resposta');
    containerResposta.innerHTML = `<p>Olá, <strong>${nome}</strong>! Os dados foram processados com sucesso.</p>`;
}
