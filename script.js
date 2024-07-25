function getQueryParams() {
    const params = {};
    // Obtém a string de consulta da URL (a parte após o '?') e remove o '?'
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let match;

    // Itera sobre todos os pares chave=valor na string de consulta
    while ((match = regex.exec(queryString)) !== null) {
        // Decodifica e adiciona cada par ao objeto params
        const key = decodeURIComponent(match[1]);
        const value = decodeURIComponent(match[2]);
        params[key] = value;
    }
    
    return params; 
}

// Função para exibir os parâmetros no HTML
function displayParams(params) {

    const outputDiv = document.getElementById('output');

    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            // Cria um novo elemento <p> para cada par chave=valor
            const paragraph = document.createElement('p');
            // Define o conteúdo do parágrafo com a chave em negrito
            paragraph.innerHTML = `<strong>${key}</strong>: ${params[key]}`;
            // Adiciona o elemento <p> ao elemento de saída
            outputDiv.appendChild(paragraph);
        }
    }
}

// Executa as funções para obter e exibir os parâmetros da URL
const params = getQueryParams(); // Obtém os parâmetros da URL
displayParams(params); // Exibe os parâmetros no HTML
