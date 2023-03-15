import React from 'react'
import { Box, Stack } from '@mui/material'
import PyCharmCard from './Cards/PyCharmCard'
import TeamCityCard from './Cards/TeamCityCard'
import RubyManagerCard from './Cards/RubyManagerCard'
import MPSCard from './Cards/MPSCard'
import GoCityCard from './Cards/GoCityCard'
import ReSharprCard from './Cards/ReSharprCard'

export default function UnderExposedGrid() {
    return (
        <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center' overflow='auto'>
            {/* For WebView */}
            <Stack height='94%' width='96%' direction='column' spacing={1.5} sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}>
                {/* Row 1 */}
                <Stack height='50%' width='100%' direction='row' spacing={1.5} display='flex' justifyContent='space-between' alignItems='center'>
                    <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                        <PyCharmCard />
                    </Box>
                    <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                        <TeamCityCard />
                    </Box>
                    <Box height='100%' width='33%' display='flex' justifyContent='center' alignItems='center'>
                        <RubyManagerCard />
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
            {/* For MobView */}
            <Stack height='94%' width='96%' direction='column' spacing={1.5} sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }}>
                {/* Row 1 */}
                <Stack height='50%' width='100%' direction='row' spacing={1.5} display='flex' justifyContent='space-between' alignItems='center'>
                    <Box height='100%' width='50%' display='flex' justifyContent='center' alignItems='center'>
                        <PyCharmCard />
                    </Box>
                    <Box height='100%' width='50%' display='flex' justifyContent='center' alignItems='center'>
                        <TeamCityCard />
                    </Box>
                </Stack>
                {/* Row 2 */}
                <Stack height='50%' width='100%' direction='row' spacing={1.5} display='flex' justifyContent='space-between' alignItems='center'>
                    <Box height='100%' width='50%' display='flex' justifyContent='center' alignItems='center'>
                        <RubyManagerCard />
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
