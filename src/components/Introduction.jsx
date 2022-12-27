import Box from '@mui/material/Box';
import guru from './../assets/images/guru3.gif'
import colors from '../components/colors'

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
            <img src={guru} alt="Guru's Photo" className="w-500 h-500" />
            <Box>
                <p
                    className="roboto-slab text-3xl"
                    style={{color: colors.heading.main}}
                >
                    Hein Htet Nyi
                </p>
                <p
                    className="roboto text-xl pt-5 w-[500px] mr-10"
                >
                    Hey! I am a Backend Developer and I have a girlfriend. Ooops!!!
                    Hahahahahahahahahahahahaha.....
                </p>
            </Box>
        </Box>
    );
}
 
export default Introduction;