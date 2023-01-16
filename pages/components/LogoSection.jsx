import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import colors from './colors'

const LogoSection = () => {
    return ( 
        <Box
            sx={{
                // backgroundColor: "background.main",
                display: "flex",
                justifyContent: "space-between",
                paddingX: "5%",
                paddingTop: "0.5%"
            }}
        >
            <Typography style={{color: colors.body.main}} className="rubik-font text-shine">Guru Hein</Typography>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Yin_yang.svg/1024px-Yin_yang.svg.png" alt="" 
                width="50px" 
                height="50px"
                className="rotate box-shadow"
                style={{
                    borderRadius: "100%"
                }}
            />
        </Box>
    );
}
 
export default LogoSection;