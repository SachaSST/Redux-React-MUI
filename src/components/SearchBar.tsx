import React from 'react';
import { TextField, Box } from '@mui/material';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <Box width="100%" mb={2}>
      <TextField
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        label="Search Tasks"
        variant="outlined"
      />
    </Box>
  );
};

export default SearchBar;
