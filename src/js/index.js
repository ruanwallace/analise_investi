const axios = require('axios');

const urlBase = 'https://fundamentus.com.br/detalhes.php?papel=';

const assembleTheUrl = () => {
    let paper = 'PETR4';
    
    return `${urlBase}${paper}`;
};

const pageRequest = () => {
    axios.get(assembleTheUrl())
        .then(response => {
            console.log(response.data);
        });
};
