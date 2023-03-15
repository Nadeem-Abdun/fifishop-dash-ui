import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Level1Card1 from './Level1Components/Level1Card1'
import Level1Card2 from './Level1Components/Level1Card2'
import Level1Card3 from './Level1Components/Level1Card3'

export default function TopProductsRow() {
    return (
        <>
            <Box minHeight='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                <Stack height='100%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='center' sx={{ paddingX: { xs: '0.7rem', sm: '0.7rem', md: '2.2rem', lg: '2.2rem', xl: '2.2rem' } }}>
                    <Box height='11%' width='100%' display='flex' justifyContent='flex-start' alignItems='center'>
                        <Typography component='h1' fontSize='1.2rem' fontWeight={600} fontFamily='Poppins'>Top Products</Typography>
                    </Box>
                    {/* Cards For Webview */}
                    <Stack height='89%' width='100%' direction='row' spacing={1.5} bgcolor='#e5eded' sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} justifyContent='space-between' alignItems='center' paddingY={1} paddingX={1} boxSizing='border-box' borderRadius={2}>
                        <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                            <Level1Card1 />
                        </Box>
                        <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                            <Level1Card2 />
                        </Box>
                        <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                            <Level1Card3 />
                        </Box>
                    </Stack>
                    {/* Cards For Mobview */}
                    <Stack height='89%' width='100%' direction='column' spacing={1} bgcolor='#e5eded' sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }} justifyContent='flex-start' alignItems='space-between' paddingY={1} paddingX={1} overflow='auto' boxSizing='border-box' borderRadius={2}>
                        <Box minHeight='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                            <Level1Card1 />
                        </Box>
                        <Box minHeight='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                            <Level1Card2 />
                        </Box>
                        <Box minHeight='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                            <Level1Card3 />
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}
