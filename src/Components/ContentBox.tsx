import React, { useState } from 'react'
import { Box, Stack, Select, MenuItem, FormControl, IconButton, Drawer, Avatar, Chip, Typography } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select';
import MenuIcon from '@mui/icons-material/Menu';
import SpeedIcon from '@mui/icons-material/Speed';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WebsiteLogo from '../Img/WebsiteLogo.png'
import SubContentBox from './SubContentBox';
import ProfileMenuBtn from './ProfileMenuBtn';

export default function ContentBox() {
    const [product, setProduct] = useState('InteliJ Products Dep');
    const handleProductChange = (event: SelectChangeEvent) => {
        setProduct(event.target.value)
    }
    const [slideOpen, setSlideOpen] = useState<boolean>(false)

    return (
        <>
            <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                <Stack height='100%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='center'>
                    {/* Header */}
                    <Stack height='9%' width='100%' direction='row' display='flex' justifyContent='space-between' alignItems='center' boxShadow={4} zIndex={1} sx={{ paddingX: { xs: '0.5rem', sm: '0.5rem', md: '2rem', lg: '2rem', xl: '2rem' } }} bgcolor='#ffffff' boxSizing='border-box'>
                        {/* DrawerOpenButton */}
                        <Box height='100%' sx={{ width: { xs: '10%', sm: '10%', md: '0%', lg: '0%', xl: '0%' }, display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }} justifyContent='flex-end' alignItems='center'>
                            <IconButton onClick={() => { setSlideOpen(true) }} aria-label='Menu-Button'>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        {/* Sliding Drawer For Mobile View */}
                        <Drawer anchor='left' open={slideOpen} onClose={() => { setSlideOpen(false) }}>
                            <Stack height='100%' width='25vw' direction='column' display='flex' justifyContent='space-evenly' alignItems='center' bgcolor='#dc5d76' role='presentation'>
                                <IconButton onClick={() => { setSlideOpen(false) }} aria-label='Dashboard-Button' href='/'>
                                    <Stack direction='column' display='flex' justifyContent='center' alignItems='center'>
                                        <SpeedIcon fontSize='large' sx={{ color: '#ffffff' }} />
                                        <Typography component='h2' fontSize='0.7rem' fontWeight='500' fontFamily='Poppins' color='#ffffff'>Dashboard</Typography>
                                    </Stack>
                                </IconButton>
                                <IconButton onClick={() => { setSlideOpen(false) }} aria-label='Reports-Button' href='/'>
                                    <Stack direction='column' display='flex' justifyContent='center' alignItems='center'>
                                        <SignalCellularAltIcon fontSize='large' sx={{ color: '#ffffff' }} />
                                        <Typography component='h2' fontSize='0.7rem' fontWeight='500' fontFamily='Poppins' color='#ffffff'>Reports</Typography>
                                    </Stack>
                                </IconButton>
                                <IconButton onClick={() => { setSlideOpen(false) }} aria-label='Merchandise-Button' href='/'>
                                    <Stack direction='column' display='flex' justifyContent='center' alignItems='center'>
                                        <LocalOfferOutlinedIcon fontSize='large' sx={{ color: '#ffffff' }} />
                                        <Typography component='h2' fontSize='0.7rem' fontWeight='500' fontFamily='Poppins' color='#ffffff'>Merchandise</Typography>
                                    </Stack>
                                </IconButton>
                                <IconButton onClick={() => { setSlideOpen(false) }} aria-label='SearchView-Button' href='/'>
                                    <Stack direction='column' display='flex' justifyContent='center' alignItems='center'>
                                        <SearchOutlinedIcon fontSize='large' sx={{ color: '#ffffff' }} />
                                        <Typography component='h2' fontSize='0.7rem' fontWeight='500' fontFamily='Poppins' color='#ffffff'>SearchView</Typography>
                                    </Stack>
                                </IconButton>
                                <IconButton onClick={() => { setSlideOpen(false) }} aria-label='Data-Button' href='/'>
                                    <Stack direction='column' display='flex' justifyContent='center' alignItems='center'>
                                        <FolderOpenOutlinedIcon fontSize='large' sx={{ color: '#ffffff' }} />
                                        <Typography component='h2' fontSize='0.7rem' fontWeight='500' fontFamily='Poppins' color='#ffffff'>Data</Typography>
                                    </Stack>
                                </IconButton>
                                <IconButton onClick={() => { setSlideOpen(false) }} aria-label='Settings-Button' href='/'>
                                    <Stack direction='column' display='flex' justifyContent='center' alignItems='center'>
                                        <SettingsOutlinedIcon fontSize='large' sx={{ color: '#ffffff' }} />
                                        <Typography component='h2' fontSize='0.7rem' fontWeight='500' fontFamily='Poppins' color='#ffffff'>Settings</Typography>
                                    </Stack>
                                </IconButton>
                                <IconButton onClick={() => { setSlideOpen(false) }} aria-label='Support-Button' href='/'>
                                    <Stack direction='column' display='flex' justifyContent='center' alignItems='center'>
                                        <SupportAgentOutlinedIcon fontSize='large' sx={{ color: '#ffffff' }} />
                                        <Typography component='h2' fontSize='0.7rem' fontWeight='500' fontFamily='Poppins' color='#ffffff'>Support</Typography>
                                    </Stack>
                                </IconButton>
                            </Stack>
                        </Drawer>
                        {/* Select Box */}
                        <Box height='100%' sx={{ width: { xs: '44%', sm: '44%', md: '20%', lg: '20%', xl: '20%' } }} display='flex' justifyContent='center' alignItems='center'>
                            <Box sx={{ height: { xs: '49%', sm: '49%', md: '52%', lg: '52%', xl: '52%' } }} width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#dde9e9' borderRadius={1}>
                                <FormControl sx={{ height: '100%', width: '100%' }} size="small" aria-label='product-select'>
                                    <Select labelId="product-select-label" id="product-select" value={product} onChange={handleProductChange} sx={{ color: '#78878b' }}>
                                        <MenuItem value='InteliJ Products Dep' sx={{ color: '#78878b' }}>InteliJ Products Dep</MenuItem>
                                        <MenuItem value='InteliJ Research Dep' sx={{ color: '#78878b' }}>InteliJ Research Dep</MenuItem>
                                        <MenuItem value='InteliJ Marketing Dep' sx={{ color: '#78878b' }}>InteliJ Marketing Dep</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                        {/* Avatar & Level Box */}
                        <Stack height='100%' sx={{ width: { xs: '44%', sm: '44%', md: '20%', lg: '20%', xl: '20%' } }} direction='row' spacing={1.5} display='flex' justifyContent='flex-end' alignItems='center'>
                            <Chip icon={<CheckCircleIcon />} label="Level 4 Sales" color='success' clickable sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, paddingY: '1.1rem', paddingX: '0.4rem' }} />
                            <Stack height='50%' spacing={0.4} direction='row' display='flex' justifyContent='center' alignItems='center'>
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/7.jpg" sx={{ height: '2.8rem', width: '2.8rem' }} />
                                <ProfileMenuBtn />
                            </Stack>
                        </Stack>
                    </Stack>
                    {/* Content */}
                    <Stack height='91%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='center'>
                        <Box width='100%' sx={{ height: { xs: '7%', sm: '7%', md: '0%', lg: '0%', xl: '0%' }, display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }} justifyContent='center' alignItems='center' bgcolor='#dc5d76'>
                            <Box component='img' alt='WebLogo' src={WebsiteLogo} height='100%' />
                        </Box>
                        <Box width='100%' sx={{ height: { xs: '93%', sm: '93%', md: '100%', lg: '100%', xl: '100%' } }} display='flex' justifyContent='center' alignItems='center'>
                            <SubContentBox />
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}
