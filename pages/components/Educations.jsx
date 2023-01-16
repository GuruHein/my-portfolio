import * as React from 'react';
import Image from 'next/image'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import colors from './colors'

const Educations = () => {
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
            >My Educations</Typography>
            <Box
                className="roboto"
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    justifyItems: "center",
                }}
            >
                    <Image src='/images/ucsy-logo-removebg-preview.png' alt="ucsy-logo" 
                        width= "100"
                        height= "100"
                    />
                    <Box>
                        <Typography className="text-2xl font-semibold">University of Computer Studies, Yangon</Typography>
                        <Typography
                            className="text-xl italic"
                            style={{color: colors.heading.second,
                                }}
                        >2018 - 2020</Typography>
                        <Typography align="justify" width="900px">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa sed repellendus distinctio quis porro? Eos inventore reiciendis nesciunt maxime excepturi provident iusto perspiciatis? Fugit voluptates eaque deserunt reiciendis voluptatibus eum, debitis corrupti quod suscipit harum cum tempore quisquam inventore sunt commodi minus vel, voluptatum, aspernatur magni doloremque eos? Aliquid!
                        </Typography>
                    </Box>
            </Box>
        </Box>
    );
}
 
export default Educations;