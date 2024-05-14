const axios = require('axios');
const fs = require('fs');

let paper = 'PETR4';
const urlBase = 'https://fundamentus.com.br/detalhes.php?papel=';

const assembleTheUrl = (url, ticket) => {
    return `${url}${ticket}`;
};

const pageRequest = (url, ticket) => {
    return axios.get(assembleTheUrl(url, ticket))
    .then(response => response.data);    
};

const writePage = async () => {
    let fileName = `src/cache/${paper}.html`;
    let html = await pageRequest(urlBase, paper);

    fs.writeFile(fileName, html, (err) => {
        if (err) throw err;
        console.log("PEGOU!");
    });
}
