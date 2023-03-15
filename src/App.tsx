import { Box, Stack } from '@mui/material'
import PermanentSidebar from './Components/PermanentSidebar';
import ContentBox from './Components/ContentBox';


function App() {
  return (
    <>
      <Box height='130vh' width='100vw' display='flex' justifyContent='center' alignItems='center'>
        <Stack height='100%' width='100%' direction='row' display='flex' justifyContent='center' alignItems='center'>
          <Box height='100%' width='10%' sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} justifyContent='center' alignItems='center' bgcolor='#dc5d76'>
            <PermanentSidebar />
          </Box>
          <Box height='100%' sx={{ width: { xs: '100%', sm: '100%', md: '90%', lg: '90%', xl: '90%' } }} display='flex' justifyContent='center' alignItems='flex-start' bgcolor='#fafcfc'>
            <ContentBox />
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default App;
