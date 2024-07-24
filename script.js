// Função para obter os parâmetros da URL
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;
    
    while (m = regex.exec(queryString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    
    return params;
}

// Função para exibir os parâmetros no HTML
function displayParams(params) {
    const outputDiv = document.getElementById('output');
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const p = document.createElement('p');
            p.textContent = `${key}: ${params[key]}`;
            outputDiv.appendChild(p);
        }
    }
}

// Obtendo e exibindo os parâmetros da URL
const params = getQueryParams();
displayParams(params);
