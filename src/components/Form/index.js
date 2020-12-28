import { useContext, useState } from 'react';
import { TextField, Button } from '@material-ui/core';

import { AddressContext } from './../../context/AddressContext';
import { requestListViaCEP } from '../../helpers/Request';

const Form = ({open, setOpen}) => {

    const [cep, setCep] = useState('');
    const [erroCEP, setErroCEP] = useState({valid: true, message: ''});
    const addressContext = useContext(AddressContext);
    
    const handleSubmit = event => {
        event.preventDefault();
        if(erroCEP.valid){

            requestListViaCEP(cep)
                .then(response => {
                    addressContext.saveAddress({...response})
                    setOpen(true);
                })
                .catch(error => console.log(error))
        }
    }

    const validaCEP = event => {
        let cepTemp = event.target.value;
        const pattern = /^\d{5}-?\d{3}$/;

        if(pattern.test(cepTemp)){
            setErroCEP({ valid: true, message: "" })
        } else{
            setErroCEP({ valid: false, message: "Digite o CEP no formato: 00000-000" })
        }
    }

    return(
        <form onSubmit={handleSubmit}>

            <TextField
                fullWidth
                margin="normal" 
                label="Digite o CEP" 
                variant="outlined"
                value={cep}
                error={!erroCEP.valid}
                helperText={erroCEP.message}
                onChange={event => setCep(event.target.value)}
                onBlur={event => validaCEP(event)}
                required
            />

            <Button
                type="submit" 
                color="primary"
                variant="contained"
                disabled={!erroCEP.valid ? true : false}
                >
                    Encontrar
            </Button>

        </form>
    )
}

export default Form;