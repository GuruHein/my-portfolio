import Box from '@mui/material/Box';
import colors from './colors'


const Navbar = () => {
    return ( 
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "body.main",
                paddingX: "40%",
                paddingY: "2%",
                fontSize: "1.3rem",
                borderBottom: "0.5px solid"
            }}
            className="roboto-slab"
        >
            <a href="">Info</a>
            <a href="">Projects</a>
            <a href="">Certificates</a>
        </Box>
    );
}
 
export default Navbar;