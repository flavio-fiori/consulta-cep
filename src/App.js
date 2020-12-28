import { Container } from '@material-ui/core';
import { useState } from 'react';

import AddressProvider from './context/AddressContext';
import Header from './components/Header';
import Form from './components/Form';
import Introducao from './components/Introducao';
import Result from './components/Result';

import './style.scss';

function App() {  

  const [open, setOpen] = useState(false);

  return (

    <AddressProvider>

      <Header />

      <Container className="main" component="main" maxWidth="md">
        
        <Introducao />
        
        <Form open={open} setOpen={setOpen}/> 

        <Result open={open} setOpen={setOpen}/>

      </Container>

    </AddressProvider>

  );
}

export default App;
