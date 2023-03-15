import React, { useState } from 'react'
import { Box, Stack, Tab, Typography } from '@mui/material'
import WebsiteLogo from '../Img/WebsiteLogo.png'
import { TabContext, TabList } from '@mui/lab'
import SpeedIcon from '@mui/icons-material/Speed';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';


export default function PermanentSidebar() {
    const [tabValue, setTabValue] = useState('1')
    const handleTabChange = (event: React.SyntheticEvent, newTabValue: string) => {
        setTabValue(newTabValue)
    }
    const tabLabelList = [
        <Typography component='h3' fontSize='0.9rem' fontWeight='500' fontFamily='Poppins' color='#ffffff' textTransform='initial' marginBottom={1}>Dashboard</Typography>,
        <Typography component='h3' fontSize='0.9rem' fontWeight='500' fontFamily='Poppins' color='#ffffff' textTransform='initial' marginBottom={1}>Reports</Typography>,
        <Typography component='h3' fontSize='0.9rem' fontWeight='500' fontFamily='Poppins' color='#ffffff' textTransform='initial' marginBottom={1}>Merchandise</Typography>,
        <Typography component='h3' fontSize='0.9rem' fontWeight='500' fontFamily='Poppins' color='#ffffff' textTransform='initial' marginBottom={1}>Search View</Typography>,
        <Typography component='h3' fontSize='0.9rem' fontWeight='500' fontFamily='Poppins' color='#ffffff' textTransform='initial' marginBottom={1}>Data</Typography>,
        <Typography component='h3' fontSize='0.9rem' fontWeight='500' fontFamily='Poppins' color='#ffffff' textTransform='initial' marginBottom={1}>Settings</Typography>,
        <Typography component='h3' fontSize='0.9rem' fontWeight='500' fontFamily='Poppins' color='#ffffff' textTransform='initial' marginBottom={1}>Support</Typography>,
    ]
    return (
        <>
            <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                <Stack height='100%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='center'>
                    {/* Site Logo */}
                    <Box height='9%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Box component='img' alt='Website Logo' src={WebsiteLogo} height='100%' />
                    </Box>
                    {/* Tabs */}
                    <Box height='91%' width='100%' display='flex' justifyContent='center' alignItems='flex-start' paddingY={4} boxSizing='border-box'>
                        <TabContext value={tabValue}>
                            <TabList orientation='vertical' onChange={handleTabChange} TabIndicatorProps={{ style: { position: 'absolute', right: '0.2vw', width: '9vw', borderRadius: 5, backgroundColor: '#ffffff', opacity: 0.4 } }}>
                                <Tab value='1' label={tabLabelList[0]} icon={<SpeedIcon fontSize='large' sx={{ color: '#ffffff' }} />} />
                                <Tab value='2' label={tabLabelList[1]} icon={<SignalCellularAltIcon fontSize='large' sx={{ color: '#ffffff' }} />} />
                                <Tab value='3' label={tabLabelList[2]} icon={<LocalOfferOutlinedIcon fontSize='large' sx={{ color: '#ffffff' }} />} />
                                <Tab value='4' label={tabLabelList[3]} icon={<SearchOutlinedIcon fontSize='large' sx={{ color: '#ffffff' }} />} />
                                <Tab value='5' label={tabLabelList[4]} icon={<FolderOpenOutlinedIcon fontSize='large' sx={{ color: '#ffffff' }} />} />
                                <Tab value='6' label={tabLabelList[5]} icon={<SettingsOutlinedIcon fontSize='large' sx={{ color: '#ffffff' }} />} />
                                <Tab value='7' label={tabLabelList[6]} icon={<SupportAgentOutlinedIcon fontSize='large' sx={{ color: '#ffffff' }} />} />
                            </TabList>
                        </TabContext>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}
