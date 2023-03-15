import React from 'react'
import { Box, Stack, Typography, } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TopProductsRow from './SubComponents/TopProductsRow';
import UndrExpoBstPerfmRow from './SubComponents/UndrExpoBstPerfmRow';


export default function SubContentBox() {
    return (
        <>
            <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center' >
                <Stack height='100%' width='100%' direction='column' spacing={1} display='flex' justifyContent='center' alignItems='center'>
                    {/* Content Header And Top Products Box */}
                    <Stack height='50%' width='100%' direction='column' spacing={1} display='flex' justifyContent='center' alignItems='center'>
                        {/* Content Header */}
                        <Stack height='13%' width='100%' direction='row' display='flex' justifyContent='center' alignItems='center' paddingX={4.5} boxSizing='border-box' bgcolor='#e5eeed'>
                            <Stack height='65%' width='100%' direction='row' spacing={1.5} display='flex' sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start', xl: 'flex-start' } }} alignItems='center' >
                                <Typography fontSize='0.9rem' fontWeight='500' fontFamily='Poppins' color='#8a9b9e' component='a' href='/' sx={{ textDecoration: 'none' }}>Reporting</Typography>
                                <Box display='flex' justifyContent='center' alignItems='center'>
                                    <ArrowRightIcon sx={{ fontSize: '1.1rem', color: '#8a9b9e' }} aria-label='Next-Step-Icon' />
                                </Box>
                                <Typography fontSize='0.9rem' fontWeight='500' fontFamily='Poppins' color='#8a9b9e' component='a' href='/' sx={{ textDecoration: 'none' }}>Insights</Typography>
                                <Box display='flex' justifyContent='center' alignItems='center'>
                                    <ArrowRightIcon sx={{ fontSize: '1.1rem', color: '#8a9b9e' }} aria-label='Next-Step-Icon' />
                                </Box>
                                <Typography fontSize='0.9rem' fontWeight='500' fontFamily='Poppins' color='#8a9b9e' component='a' href='/' sx={{ textDecoration: 'none' }}>Products</Typography>
                            </Stack>
                        </Stack>
                        {/* Top Products Row */}
                        <Stack minHeight='87%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='center'>
                            <TopProductsRow />
                        </Stack>
                    </Stack>
                    {/* Under Exposed And Top Performers Row */}
                    <Stack minHeight='50%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='center'>
                        <UndrExpoBstPerfmRow />
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}
