import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
// import { Room } from '@material-ui/icons';

import './style.scss';

const Header = () => {
    return(
        <AppBar className="header" position="static">
            <Toolbar className="container">

                <Typography variant="h6">
                    Consulta CEP
                </Typography>

                <Typography>
                    <Link href="https://viacep.com.br/" target="_blank" color="textSecondary">
                        Documentação Via CEP
                    </Link>
                </Typography>

            </Toolbar>
        </AppBar>
    )
} 

export default Header;