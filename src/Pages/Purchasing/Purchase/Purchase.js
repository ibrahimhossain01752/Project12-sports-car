import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';

const Purchase = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>

            </Grid>
        </Box>
    );
};

export default Purchase;