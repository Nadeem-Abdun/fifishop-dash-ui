import React from 'react'
import { Box, Stack, Card, Typography } from '@mui/material'
import MPS from '../Img/MPS.png'

export default function MPSCard() {
    return (
        <>
            <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                <Stack height='100%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='center'>
                    <Card sx={{ height: '85%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Stack height='95%' width='85%' direction='column' display='flex' justifyContent='center' alignItems='center'>
                            <Box height='70%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                                <Box component='img' alt='MPSLogo' src={MPS} />
                            </Box>
                            <Stack height='30%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                <Typography component='h3' fontSize='0.75rem' fontWeight='700' fontFamily='Poppins' color='#263133'>InteliJ MPS</Typography>
                                <Typography component='h3' fontSize='0.65rem' fontWeight='600' fontFamily='Poppins' color='#788588'>SKU: 129383</Typography>
                            </Stack>
                        </Stack>
                    </Card>
                    <Stack height='15%' width='85%' direction='row' display='flex' justifyContent='space-between' alignItems='flex-end'>
                        <Typography component='h3' fontSize='0.7rem' fontWeight='600' fontFamily='Poppins' color='#788588'>CONVERSION</Typography>
                        <Typography component='h3' fontSize='0.7rem' fontWeight='700' fontFamily='Poppins' color='#263133'>22%</Typography>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}
