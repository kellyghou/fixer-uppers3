import { React,useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { FormControl, InputLabel, Select, Button } from '@mui/material';

export default function Filters(props) {
    const callback = props.applyFilterCallback;
    const homepageCategory = props.homepageCategory; 
    const [selectedCategory, setSelectedCategory] = useState(homepageCategory != null ? [homepageCategory] : []);

    const handleCategoryChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedCategory(
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    const applyCallback = (event) => {
        event.preventDefault();
        callback(selectedCategory)
    }  

    return (
        <section className="homepage-filters">
            <div className="container-filters">
                <FormControl sx={{m: 1, width: 250, '& .MuiSelect-select' : {color: 'white'}, '& .MuiSelect-select.MuiSelect-outlined.MuiSelect-multiple.MuiInputBase-input.MuiOutlinedInput-input': {fontWeight: "700", color: 'rgba(0, 0, 0, .7)', textAlign: 'left'}, marginRight: '20rem' }}>
                    <InputLabel  htmlFor="continent-selection" sx={{fontWeight: '700'}}>Filter by</InputLabel>
                    <Select name="continent-selection" id="continent-selection" value={selectedCategory} multiple onChange={handleCategoryChange} renderValue={(selected) => selected.join(', ')} MenuProps={{PaperProps: {sx: {backgroundColor: '#ffdab3', /*'& .MuiList-root': {width: '20rem',},*/ '& .MuiMenuItem-root': {padding: 0,}}}}} className="filter" sx={{color: "rgba(0, 0, 0, .7)", '.MuiOutlinedInput-notchedOutline': {borderColor: 'white', borderWidth: 'medium'},'&.Mui-focused .MuiOutlinedInput-notchedOutline': {borderColor: 'white', borderWidth: 'medium'},'&:hover .MuiOutlinedInput-notchedOutline': {borderColor: 'white', borderWidth: 'medium'},'.MuiSvgIcon-root ': {fill: "white !important",}}}>
                        {props.uniqueCategory.map((categoryName) => (
                            <MenuItem key={categoryName} value={categoryName}>
                                <Checkbox sx={{'&.Mui-checked': {color: '#ff9c33'}}} checked={selectedCategory.indexOf(categoryName) > -1} />
                                <ListItemText sx={{color: 'rgba(0, 0, 0, .7)'}} primary={categoryName} />
                            </MenuItem>
                        ))}    
                    </Select>
                </FormControl>
                <Button variant="contained" onClick={applyCallback} sx={{'&:hover' : {backgroundColor: '#ffbf80'}, textTransform: "none", borderColor: "white", fontWeight: "700", borderStyle: "solid", borderWidth: "medium", borderRadius: "20rem", color: "rgba(0, 0, 0, .7)", backgroundColor: "#ffbf80"}}>Apply Filter</Button>
            </div>
        </section>);
}