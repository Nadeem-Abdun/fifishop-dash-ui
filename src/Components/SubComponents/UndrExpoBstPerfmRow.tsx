import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import UnderExposedGrid from './Level2Components/UnderExposedGrid'
import BestPerformerGrid from './Level2Components/BestPerformerGrid'

export default function UndrExpoBstPerfmRow() {
    return (
        <>
            <Box minHeight='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                {/* Stack For Web */}
                <Stack height='100%' width='100%' direction='row' spacing={1} display='flex' justifyContent='center' alignItems='center' sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, paddingX: { xs: '0.7rem', sm: '0.7rem', md: '2.2rem', lg: '2.2rem', xl: '2.2rem' } }}>
                    {/* Under Exposed Block */}
                    <Stack height='100%' width='50%' direction='column' spacing={0.5} display='flex' justifyContent='center' alignItems='center' paddingY={1} boxSizing='border-box'>
                        <Box height='9%' width='100%' display='flex' justifyContent='flex-start' alignItems='center'>
                            <Typography component='h1' fontSize='1.2rem' fontWeight={600} fontFamily='Poppins'>Under Exposed</Typography>
                        </Box>
                        <Box height='91%' width='100%' display='flex' justifyContent='flex-start' alignItems='center' bgcolor='#e5eded' borderRadius={3}>
                            <UnderExposedGrid />
                        </Box>
                    </Stack>
                    {/* Best Performers Block */}
                    <Stack height='100%' width='50%' direction='column' spacing={0.5} display='flex' justifyContent='center' alignItems='center' paddingY={1} boxSizing='border-box'>
                        <Box height='9%' width='100%' display='flex' justifyContent='flex-start' alignItems='center'>
                            <Typography component='h1' fontSize='1.2rem' fontWeight={600} fontFamily='Poppins'>Best Performers</Typography>
                        </Box>
                        <Box height='91%' width='100%' display='flex' justifyContent='flex-start' alignItems='center' bgcolor='#e5eded' borderRadius={3}>
                            <BestPerformerGrid />
                        </Box>
                    </Stack>
                </Stack>
                {/* Stack For Mob */}
                <Stack height='100%' width='100%' direction='column' spacing={1} justifyContent='flex-start' alignItems='center' sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, paddingX: { xs: '0.7rem', sm: '0.7rem', md: '2.2rem', lg: '2.2rem', xl: '2.2rem' } }}>
                    {/* Under Exposed Block */}
                    <Stack minHeight='100%' width='100%' direction='column' spacing={0.5} display='flex' justifyContent='center' alignItems='center' paddingBottom={1} boxSizing='border-box'>
                        <Box height='9%' width='100%' display='flex' justifyContent='flex-start' alignItems='center'>
                            <Typography component='h1' fontSize='1.2rem' fontWeight={600} fontFamily='Poppins'>Under Exposed</Typography>
                        </Box>
                        <Box height='91%' width='100%' display='flex' justifyContent='flex-start' alignItems='center' bgcolor='#e5eded' borderRadius={3}>
                            <UnderExposedGrid />
                        </Box>
                    </Stack>
                    {/* Best Performers Block */}
                    <Stack minHeight='100%' width='100%' direction='column' spacing={0.5} display='flex' justifyContent='center' alignItems='center' paddingBottom={1} boxSizing='border-box'>
                        <Box height='9%' width='100%' display='flex' justifyContent='flex-start' alignItems='center'>
                            <Typography component='h1' fontSize='1.2rem' fontWeight={600} fontFamily='Poppins'>Best Performers</Typography>
                        </Box>
                        <Box height='91%' width='100%' display='flex' justifyContent='flex-start' alignItems='center' bgcolor='#e5eded' borderRadius={3}>
                            <BestPerformerGrid />
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}
