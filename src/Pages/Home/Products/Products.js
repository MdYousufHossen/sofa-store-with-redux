import { AppBar, Box, Button, Typography, Toolbar, Container, Grid, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import { addToProduct } from '../../../Redux/cartRedux';
import Product from './Product';

// const sofa = [
//     {
//         id: 1,
//         name: 'Rocking Chair',
//         image: 'https://image.freepik.com/free-psd/chair-pillow_176382-880.jpg',
//         price: 910,
//         rating: 4
//     },
//     {
//         id: 2,
//         name: 'Center Table Glass Metal',
//         image: 'https://image.freepik.com/free-psd/chair-pillow_176382-865.jpg',
//         price: 865,
//         rating: 3.5
//     },
//     {
//         id: 3,
//         name: 'Easy Chair',
//         image: 'https://img.freepik.com/free-psd/armchair-pillow_176382-886.jpg?size=338&ext=jpg',
//         price: 850,
//         rating: 5
//     },
//     {
//         id: 4,
//         name: 'Rocking Chair',
//         image: 'https://image.freepik.com/free-psd/chair-pillow_176382-880.jpg',
//         price: 910,
//         rating: 4
//     },
//     {
//         id: 5,
//         name: 'Center Table Glass Metal',
//         image: 'https://image.freepik.com/free-psd/chair-pillow_176382-865.jpg',
//         price: 865,
//         rating: 3.5
//     },
//     {
//         id: 6,
//         name: 'Easy Chair',
//         image: 'https://img.freepik.com/free-psd/armchair-pillow_176382-886.jpg?size=338&ext=jpg',
//         price: 850,
//         rating: 5
//     },
//     {
//         id: 7,
//         name: 'Rocking Chair',
//         image: 'https://image.freepik.com/free-psd/chair-pillow_176382-880.jpg',
//         price: 910,
//         rating: 4
//     },
//     {
//         id: 8,
//         name: 'Center Table Glass Metal',
//         image: 'https://image.freepik.com/free-psd/chair-pillow_176382-865.jpg',
//         price: 865,
//         rating: 3.5
//     },
//     {
//         id: 9,
//         name: 'Easy Chair',
//         image: 'https://img.freepik.com/free-psd/armchair-pillow_176382-886.jpg?size=338&ext=jpg',
//         price: 850,
//         rating: 5
//     }

// ]

const Products = () => {
    // const { isLoading } = useAuth()
    const [sofa, setSofa] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch();
    // console.log(sofa)
    useEffect(() => {
        fetch('https://still-journey-43964.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                const newData = data.sort((a, b) => 0.5 - Math.random());
                setSofa(newData)
                setIsLoading(false)
                dispatch(addToProduct(data));

            })
    }, [])

    const style = makeStyles({
        nav: {
            textDecoration: 'none',
            color: 'black',
            margin: '10px'
        }
    })
    const { nav } = style()
    return (
        <Container>
            {isLoading ? <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 15 }}>
                <CircularProgress />
            </Box> : <Box style={{ marginTop: '50px' }}>
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

                        {sofa.slice(0, 6).map(sofa => <Product key={sofa._id} product={sofa} />)}

                    </Grid>
                </Box>
            </Box>}

        </Container>
    );
};

export default Products;