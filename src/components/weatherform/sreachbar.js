import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const city = formData.get('city');
    onSubmit(city);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 400 }}>
      <TextField
        name="city"
        placeholder="Search location..."
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          sx: {
            borderRadius: '25px',
            backgroundColor: 'white', 
            width: '450px',
            height: '50px',
            marginRight: '90px',
            '& .MuiOutlinedInput-input': {
              color: 'black', 
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent', 
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent', 
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent', 
            },
          },
        }}
      />
    </form>
  );
};

export default SearchBar;