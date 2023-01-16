import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import colors from './colors'

const Experiences = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return ( 
        <Box
            sx={{
                textAlign: "center",
                paddingY: "2%",
                borderBottom: "0.5px solid",
            }}
        >
            <Typography
                className="roboto-slab text-3xl pb-5"
                style={{color: colors.heading.main}}
            >My Experiences</Typography>
            <Box 
                sx={{ 
                        width: '100%', 
                        typography: 'body1', 
                        // color: colors.body.main, 
                }}
            >
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example"
                        centered
                    >
                        <Tab label="Item One" value="1" 
                            sx={{
                                color: colors.body.main,
                            }}
                        />
                        <Tab label="Item Two" value="2" 
                            sx={{
                                color: colors.body.main,
                            }}
                        />
                        <Tab label="Item Three" value="3" 
                            sx={{
                                color: colors.body.main,
                            }}
                        />
                    </TabList>
                    </Box>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box>
        </Box>
    );
}
 
export default Experiences;