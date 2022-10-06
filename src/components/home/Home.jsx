
import { Stack, Box } from '@mui/system'

import { useState } from 'react'
import { Sidebar, Videos } from '..'

import jsonData from '../../assets/data.json'

import './Home.css'

const Home = () => {
  const [videos, setVideos] = useState(jsonData);
  const [selectedCategory, setSelectedCategory] = useState('New')

  
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row", my: 10} }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Videos  videos={videos} />
      </Box>
    </Stack>
  )
}

export default Home