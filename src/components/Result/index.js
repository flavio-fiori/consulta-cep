import { Fragment, useContext, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Snackbar } from '@material-ui/core';

import { AddressContext } from './../../context/AddressContext';

const Result = ({open, setOpen}) => {
    
    const addressContext = useContext(AddressContext);
    const { cep, logradouro, bairro, localidade, uf, erro} = addressContext.address;

    const [openToast, setOpenToast] = useState(true);

    return(
        <Fragment>
            {
                !erro ?
            
                    <Dialog
                        open={open}
                        maxWidth="md"
                        fullWidth
                    >
                        <DialogTitle>
                            Informações para o cep: {cep}
                        </DialogTitle>

                        <DialogContent>
                            <TableContainer>
                                <Table>
                                    
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Informações</TableCell>
                                            <TableCell>Valores</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Logradouro</TableCell>
                                            <TableCell>{ logradouro }</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>Bairro</TableCell>
                                            <TableCell>{ bairro} </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>Cidade</TableCell>
                                            <TableCell>{ localidade} </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>Estado</TableCell>
                                            <TableCell>{ uf }</TableCell>
                                        </TableRow>
                                    </TableBody>

                                </Table>
                            </TableContainer>
                        </DialogContent>

                        <DialogActions>
                            <Button 
                                color="primary"
                                onClick={event => setOpen(false)}>
                                    Ok, obrigado!
                            </Button>
                        </DialogActions>
                    </Dialog>
                    
                :

                <Snackbar 
                    open={openToast} 
                    autoHideDuration={4000}
                    message="Houve um erro com CEP Buscado"
                    onClose={() => setOpenToast(false)}
                    // onExit={() => setOpenToast(true)}
                    >
                </Snackbar>

            }

            
        </Fragment>
    )
}

export default Result;