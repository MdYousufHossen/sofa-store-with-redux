import { AppBar, Box, Button, Typography, Toolbar, Container, Grid, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import Product from '../Home/Products/Product';
import Footer from '../shared/Footer/Footer';
import Navigation from '../shared/Navigation/Navigation';
import { useSelector } from 'react-redux';


const Products = () => {
    const { isLoading } = useAuth()


    const sofa = useSelector((state) => state.cart.product)

    const style = makeStyles({
        nav: {
            textDecoration: 'none',
            color: 'black',
            margin: '10px'
        }
    })
    const { nav } = style()
    return (
        <Box>
            <Navigation />

            {isLoading ? <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
                : <Container >
                    <Box style={{ marginTop: '80px' }}>
                        <Typography variant="h4" className="primary-color" sx={{ textAlign: 'center', fontWeight: 'medium' }}>PRODUCTS</Typography>

                        {/* <Box style={{ marginTop: '50px' }} >
                    <Box sx={{ backgroundColor: 'white', color: 'black' }}>
                        <Toolbar sx={{ justifyContent: 'center' }}>
                            <Box>
                                <Link className={nav} to="/home">Login</Link>
                                <Link className={nav} to="/home">Login</Link>
                                <Link className={nav} to="/home">Login</Link>
                            </Box>

                        </Toolbar>
                    </Box>
                </Box> */}

                        <Box style={{ marginTop: '50px' }}>
                            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                {sofa.map(sofa => <Product key={sofa._id} product={sofa} />)}

                            </Grid>
                        </Box>
                    </Box>

                </Container>}
            <Footer />
        </Box>
    );
};


export default Products;