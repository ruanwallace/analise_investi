const axios = require('axios');
const fs = require('fs');

let paper = 'PETR4';
const urlBase = 'https://fundamentus.com.br/detalhes.php?papel=';
let fileName = `src/cache/${paper}.html`;

const assembleTheUrl = (url, ticket) => {
    return `${url}${ticket}`;
};

const pageRequest = (url, ticket) => {
    return axios.get(assembleTheUrl(url, ticket))
    .then(response => response.data);    
};

const writePage = async (path, date) => {
    let html = await date;

    fs.writeFile(path, html, (err) => {
        if (err) throw err;
    });
};

const checkPageExists = (path) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            writePage(path, pageRequest(urlBase, paper));
        } else {
            console.log("Arquivo já existente!");
        }
    })
};
