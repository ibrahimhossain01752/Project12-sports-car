import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';




const Footer = () => {
    return (

        <Box sx={{ flexGrow: 1, backgroundColor: "black", color: "white", marginTop: "80px", width: "100%", fontSize: 12 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6">
                        Sports Car
                    </Typography>
                    <Typography style={{ fontSize: "16px" }} variant="h6">
                        A sports car is a car designed with
                    </Typography>
                    <Typography style={{ fontSize: "16px" }} variant="h6">
                        dynamic performance, such as
                    </Typography>
                    <Typography style={{ fontSize: "16px" }} variant="h6">
                        op speed, or thrill of driving. Sports cars originated in
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6">
                        Features
                    </Typography>
                    <Typography style={{ fontSize: "16px" }} variant="h6">
                        Date & Offers
                    </Typography>
                    <Typography style={{ fontSize: "16px" }} variant="h6">
                        Customer Reviews
                    </Typography>
                    <Typography style={{ fontSize: "16px" }} variant="h6">
                        Private Policy
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6">
                        Quick Contact
                    </Typography>
                    <Typography style={{ fontSize: "16px" }} variant="h6">
                        Facebook
                    </Typography>
                    <Typography style={{ fontSize: "16px" }} variant="h6">
                        Twiter
                    </Typography>
                    <Typography style={{ fontSize: "16px" }} variant="h6">
                        Youtube
                    </Typography>
                </Grid>

            </Grid>
        </Box>

    );
};

export default Footer;