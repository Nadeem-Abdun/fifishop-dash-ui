import React from 'react'
import { Box, Stack, Card, Typography, IconButton } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Card2Logo from '../Level1Components/Img/Card2Logo.png'

export default function Level1Card2() {
    return (
        <>
            <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center' >
                <Card sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Stack height='100%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='center'>
                        {/* Header */}
                        <Box height='17%' width='100%' display='flex' justifyContent='center' alignItems='center' borderBottom={3} borderColor='#d7e0e0' paddingX={2} boxSizing='border-box' >
                            <Stack height='100%' width='100%' direction='row' display='flex' justifyContent='space-between' alignItems='center'>
                                <Typography component='h3' fontSize='0.9rem' fontWeight='600' fontFamily='Poppins' color='#788588' >TOP GROSSING</Typography>
                                <IconButton sx={{ padding: '0rem' }} aria-label='Open-In-New-Window-Button'><OpenInNewIcon /></IconButton>
                            </Stack>
                        </Box>
                        {/* Context */}
                        <Stack height='83%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='center' paddingX={2} boxSizing='border-box' >
                            {/* Context Title */}
                            <Stack height='25%' width='100%' direction='row' display='flex' justifyContent='space-between' alignItems='center'>
                                <Stack height='100%' width='80%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                    <Typography component='h3' fontSize='0.9rem' fontWeight='700' fontFamily='Poppins' color='#263133' >InteliJ PhpStrom 2019</Typography>
                                    <Typography component='h3' fontSize='0.7rem' fontWeight='600' fontFamily='Poppins' color='#788588' >Version 2019.1</Typography>
                                </Stack>
                                <Stack height='100%' width='20%' direction='column' display='flex' justifyContent='center' alignItems='flex-end' marginRight={0.4}>
                                    <Typography component='h3' fontSize='0.7rem' fontWeight='600' fontFamily='Poppins' color='#788588' >Revenue</Typography>
                                    <Typography component='h3' fontSize='0.9rem' fontWeight='700' fontFamily='Poppins' color='#263133' >$442.3</Typography>
                                </Stack>
                            </Stack>
                            {/* Context Img And Ratings */}
                            <Stack height='75%' width='100%' direction='row' display='flex' justifyContent='space-between' alignItems='center'>
                                <Stack height='100%' width='40%' direction='column' display='flex' justifyContent='center' alignItems='center'>
                                    <Box component='img' alt='InteliJ WebStrom Logo' src={Card2Logo} />
                                </Stack>
                                <Stack height='100%' width='60%' direction='row' display='flex' justifyContent='center' alignItems='flex-end' marginRight={0.4}>
                                    <Stack height='100%' width='50%' direction='column' spacing={2} display='flex' justifyContent='center' alignItems='flex-start'>
                                        <Typography component='h3' fontSize='0.7rem' fontWeight='600' fontFamily='Poppins' color='#788588' >VIEWS</Typography>
                                        <Typography component='h3' fontSize='0.7rem' fontWeight='600' fontFamily='Poppins' color='#788588' >TRANSACTIONS</Typography>
                                        <Typography component='h3' fontSize='0.7rem' fontWeight='600' fontFamily='Poppins' color='#788588' >CONVERSATIONS</Typography>
                                        <Typography component='h3' fontSize='0.7rem' fontWeight='600' fontFamily='Poppins' color='#788588' >REVENUE</Typography>
                                    </Stack>
                                    <Stack height='100%' width='50%' direction='column' spacing={1} display='flex' justifyContent='center' alignItems='flex-end'>
                                        <Typography component='h3' fontSize='0.7rem' fontWeight='700' fontFamily='Poppins' color='#263133' display='flex' justifyContent='center' alignItems='center'>22 <ArrowDropUpIcon color='success' /></Typography>
                                        <Typography component='h3' fontSize='0.7rem' fontWeight='700' fontFamily='Poppins' color='#263133' display='flex' justifyContent='center' alignItems='center'>02 <ArrowDropUpIcon color='success' /></Typography>
                                        <Typography component='h3' fontSize='0.7rem' fontWeight='700' fontFamily='Poppins' color='#263133' display='flex' justifyContent='center' alignItems='center'>10.2% <ArrowDropDownIcon color='error' /></Typography>
                                        <Typography component='h3' fontSize='0.7rem' fontWeight='700' fontFamily='Poppins' color='#263133' display='flex' justifyContent='center' alignItems='center'>$442.3 <ArrowDropDownIcon color='error' /></Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Card>
            </Box>
        </>
    )
}
