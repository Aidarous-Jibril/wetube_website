import { Box, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Videos from './videos/Videos';

import jsonData from '../assets/data.json' 


const SearchResults = () => {

const [videos, setVideos] = useState(null);
const { searchTerm } = useParams();

useEffect(() => {
   const filtered_data = jsonData.filter( element => element.videoName == searchTerm)
   setVideos(filtered_data)
}, [searchTerm]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row", my: 10} }}>
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
            <Videos  videos={videos} />
        </Box>
  </Stack>
  )
}

export default SearchResults