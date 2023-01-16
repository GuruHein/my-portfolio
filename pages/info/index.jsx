import Box from '@mui/material/Box';
import colors from '../components/colors'
import Introduction from '../components/Introduction'
import Experiences from '../components/Experiences'
import Educations from '../components/Educations'
import Skills from '../components/Skills'
import Layout from '../components/Layout'

const Info = () => {

    return ( 
        <Layout>
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
        </Layout>
     );
}
 
export default Info;