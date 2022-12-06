import React, {useState} from 'react';
import { TextField, Autocomplete, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
//TODO: hacer que pueda distinguir entre busqueda de ingrediente y de titulo de receta
import { Ingredients } from '../../../../testing/data/Ingredients';
/* import { Recipes } from '../../../../testing/data/Recipes'; */
import '../../CSS/Searchbar.style.css';

export default function Searchbar() {
    const [recipe, setRecipe] = useState("");

    

    return (
        <Autocomplete
            freeSolo
            multiple
            limitTags={2}
            id="search-tags"
            options={Ingredients}
            getOptionLabel={(option) => option.Name}
            renderInput={(params) => (
                <TextField {...params} label="Search" placeholder="Search"/>
            )}
            sx={{ width: '25vw' }}
        >
        </Autocomplete>


    );
}