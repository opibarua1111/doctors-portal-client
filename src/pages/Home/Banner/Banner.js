import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={5}>
                    <Box>
                        <Typography variant="h3">
                            your New Smile <br />
                            Start Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, color: 'gray', fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo corporis illo modi architecto pariatur accusantium saepe, delectus dolorem dignissimos vel!
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>GEt Appointment</Button>
                    </Box>
                </Grid>
                <Grid style={verticalCenter} item xs={12} md={7}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;