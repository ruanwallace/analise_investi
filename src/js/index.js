const axios = require('axios');

const urlBase = 'https://fundamentus.com.br/detalhes.php?papel=';

const assembleTheUrl = (url, paper) => {
    return `${url}${paper}`;
}