import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skillbar from 'react-skillbars';
import colors from './colors'

const skills = [
    { type: 'Python', level: 100 },
    { type: 'DRF', level: 90 },
    { type: 'Javascript', level: 70 },
    { type: 'SQL', level: 70 },
    { type: 'React', level: 70 },
    { type: 'Next', level: 50 },
    { type: 'Docker', level: 30 },
];

const barcolors = {
    bar: '#C0DEFF',
    title: {
      text: '#FF6E31',
      background: '#fff',
    },
  };

const Skills = () => {
    return ( 
        <Box
            sx={{
                paddingY: "2%",
                borderBottom: "0.5px solid",
                paddingX: "10%",
            }}
        >
            <Typography
                className="roboto-slab text-3xl pb-5"
                style={{color: colors.heading.main,
                        textAlign: "center",}}
            >My Skills</Typography>
            <Skillbar skills={skills} height={30} colors={barcolors}/>
        </Box>
     );
}
 
export default Skills;