import Box from '@mui/material/Box';
import colors from './colors'
import LogoSection from './LogoSection'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return ( 
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
    );
}
 
export default Layout;