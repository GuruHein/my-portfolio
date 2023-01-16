import Image from 'next/image'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import colors from './colors'

const Introduction = () => {
    return ( 
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                justifyItems: "center",
                borderBottom: "0.5px solid",
            }}
        >
            <Image src='/images/guru3.gif' alt="Guru's Photo" width="500" height="500" />
            <Box>
                <Typography
                    className="roboto-slab text-3xl"
                    style={{color: colors.heading.main}}
                >
                    Hein Htet Nyi
                </Typography>
                <Typography
                    className="roboto text-xl pt-5 w-[500px] mr-10"
                >
                    Hey! I am a Backend Developer and I have a girlfriend. Ooops!!!
                    Hahahahahahahahahahahahaha.....
                </Typography>
            </Box>
        </Box>
    );
}
 
export default Introduction;