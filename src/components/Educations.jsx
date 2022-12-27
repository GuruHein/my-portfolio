import * as React from 'react';
import Box from '@mui/material/Box';
import colors from '../components/colors'
import ucsy from './../assets/images/ucsy-logo-removebg-preview.png'

const Educations = () => {
    return ( 
        <Box
            sx={{
                paddingY: "2%",
                borderBottom: "0.5px solid",
                paddingX: "10%",
            }}
        >
            <p
                className="roboto-slab text-3xl pb-5"
                style={{color: colors.heading.main,
                        textAlign: "center",}}
            >My Educations</p>
            <table
                className="roboto"
            >
                <tr>
                    <td width="150px">
                        <img src={ucsy} alt="ucsy-logo" style={{
                            width: "100px",
                            height: "100px"
                        }} />
                    </td>
                    <td>
                        <p className="text-2xl font-semibold">University of Computer Studies, Yangon</p>
                        <small
                            className="text-xl italic"
                            style={{color: colors.heading.main,
                                }}
                        >2018 - 2020</small>
                        <p align="justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa sed repellendus distinctio quis porro? Eos inventore reiciendis nesciunt maxime excepturi provident iusto perspiciatis? Fugit voluptates eaque deserunt reiciendis voluptatibus eum, debitis corrupti quod suscipit harum cum tempore quisquam inventore sunt commodi minus vel, voluptatum, aspernatur magni doloremque eos? Aliquid!
                        </p>
                    </td>
                </tr>
            </table>
        </Box>
    );
}
 
export default Educations;