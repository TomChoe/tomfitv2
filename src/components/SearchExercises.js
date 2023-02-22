import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, Select, TextField, Typography, MenuItem, InputLabel } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = () => {
  const [search, setSearch] = useState('')
  const [exercises, setExercises] = useState([]);

  const handleSearch = async () => {
    if(search) {
      const exerciseData = await fetchData('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises', exerciseOptions);
      setExercises(exerciseData);
      setSearch('');
    }
  }

  const urlBuilder = () => {
    // build url to append to api above
  
  }

  return (
    <Stack alignItems='center' mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' }}} mb="50px" textAlign="center">
        Exercises for fitness and improving your body
      </Typography>
      <Box position="relative" mb="72px">
        <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
        <Select>
          <MenuItem>beginner</MenuItem>
          <MenuItem>intermediate</MenuItem>
          <MenuItem>expert</MenuItem>
        </Select>

        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn"
          onClick={handleSearch}
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px'},
            height: "56px",
            position: "absolute",
            right: '0'
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar />
      </Box>
    </Stack>
  )
}

export default SearchExercises;