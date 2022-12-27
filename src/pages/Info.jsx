import Box from '@mui/material/Box';
import colors from '../components/colors'
import Introduction from '../components/Introduction'
import Experiences from '../components/Experiences'
import Educations from '../components/Educations'
import Skills from '../components/Skills'

const Info = () => {

    return ( 
        <Box
            sx={{
                color: "body.main",
            }}
            className="roboto"
        >
            
            <Introduction />
            <Experiences />
            <Educations />
            <Skills />
        </Box>
     );
}
 
export default Info;