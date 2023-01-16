import Box from '@mui/material/Box';
import colors from './colors'
import LogoSection from './LogoSection'
import Navbar from './Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    heading: {
      main: '#F49D1A',
    },
    body: {
      main: '#EEEEEE',
    },
    background: {
      main: "#000000"
    },
  },
});

const Layout = ({children}) => {
    return ( 
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                        backgroundColor: "background.main",
                        paddingX: "10%"
                }}
            >
                <LogoSection/>
                <Navbar/>
                {children}
            </Box>
        </ThemeProvider>
    );
}
 
export default Layout;