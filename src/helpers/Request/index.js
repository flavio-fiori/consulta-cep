import axios from 'axios';

export const requestListViaCEP = cep => {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.data)
}