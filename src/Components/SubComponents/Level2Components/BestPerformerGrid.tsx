import React from 'react'
import { Box, Stack } from '@mui/material'
import KotlinCard from './Cards/KotlinCard'
import DotIdeCard from './Cards/DotIdeCard'
import DotManagerCard from './Cards/DotManagerCard'
import MPSCard from './Cards/MPSCard'
import GoCityCard from './Cards/GoCityCard'
import ReSharprCard from './Cards/ReSharprCard'

export default function BestPerformerGrid() {
    return (
        <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center' overflow='auto'>
            {/* For WebView */}
            <Stack height='94%' width='96%' direction='column' spacing={1.5} sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}>
                {/* Row 1 */}
                <Stack height='50%' width='100%' direction='row' spacing={1.5} display='flex' justifyContent='space-between' alignItems='center'>
                    <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                        <KotlinCard />
                    </Box>
                    <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                        <DotIdeCard />
                    </Box>
                    <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                        <DotManagerCard />
                    </Box>
                </Stack>
                {/* Row 2 */}
                <Stack height='50%' width='100%' direction='row' spacing={1.5} display='flex' justifyContent='space-between' alignItems='center'>
                    <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                        <MPSCard />
                    </Box>
                    <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                        <GoCityCard />
                    </Box>
                    <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                        <ReSharprCard />
                    </Box>
                </Stack>
            </Stack>
            {/* For WebView */}
            <Stack height='94%' width='96%' direction='column' spacing={1.5} sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }}>
                {/* Row 1 */}
                <Stack height='50%' width='100%' direction='row' spacing={1.5} display='flex' justifyContent='space-between' alignItems='center'>
                    <Box height='100%' width='50%' display='flex' justifyContent='center' alignItems='center'>
                        <KotlinCard />
                    </Box>
                    <Box height='100%' width='50%' display='flex' justifyContent='center' alignItems='center'>
                        <DotIdeCard />
                    </Box>
                </Stack>
                {/* Row 2 */}
                <Stack height='50%' width='100%' direction='row' spacing={1.5} display='flex' justifyContent='space-between' alignItems='center'>
                    <Box height='100%' width='50%' display='flex' justifyContent='center' alignItems='center'>
                        <DotManagerCard />
                    </Box>
                    <Box height='100%' width='50%' display='flex' justifyContent='center' alignItems='center'>
                        <MPSCard />
                    </Box>
                </Stack>
                {/* Row 3 */}
                <Stack height='50%' width='100%' direction='row' spacing={1.5} display='flex' justifyContent='space-between' alignItems='center'>
                    <Box height='100%' width='50%' display='flex' justifyContent='center' alignItems='center'>
                        <GoCityCard />
                    </Box>
                    <Box height='100%' width='50%' display='flex' justifyContent='center' alignItems='center'>
                        <ReSharprCard />
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}
