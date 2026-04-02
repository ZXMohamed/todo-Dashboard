import React from 'react'
import StatusColumn from '../components/ui/statusColumn'
import { Box, Grid } from '@mui/material'

function Home() {
    return (
        <Box>
            <Grid container spacing={3} className="h-[100vh] pt-10 px-6 pb-0">
                <Grid size={{xs:12,sm:6,lg:4,xl:3}}>
                    <StatusColumn/>
                </Grid>
                <Grid size={{xs:12,sm:6,lg:4,xl:3}}>    
                    <StatusColumn/>
                </Grid>
                <Grid size={{xs:12,sm:6,lg:4,xl:3}}>    
                    <StatusColumn/>
                </Grid>
                <Grid size={{xs:12,sm:6,lg:4,xl:3}}>    
                    <StatusColumn/>
                </Grid>
            </Grid>
        </Box>
  )
}

export default Home