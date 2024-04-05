import { React,useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { FormControl, InputLabel, Select, SelectChangeEvent, Typography } from '@mui/material';

export default function Filters(props) {
    // {console.log("entered filters")}

    
    // url.searchParams.set('step', '...');

    const callback = props.applyFilterCallback;
    const [selectedCategory, setSelectedCategory] = useState([]);
    // const [selectedDuration, setSelectedDuration] = useState('');
    // const [selectedAge, setSelectedAge] = useState('');

    const handleCategoryChange = (event) => {
        // const updatedSelectedContinent = event.target.value;
        const {
            target: { value },
        } = event;
        setSelectedCategory(
            typeof value === 'string' ? value.split(',') : value,
        );
        // const paramCounter = 1;

        // if (Array.isArray(selectedCategory) && selectedCategory.length) {
        //     setSelectedCategory(
        //         // typeof value === 'string' ? value.split(',') : value,
        //         [...selectedCategory, {value}]
        //     );
        // }
    }

    // const handleDurationChange = (event) => {
    //     const updatedSelectedDuration = event.target.value;
    //     setSelectedDuration(updatedSelectedDuration)
    // }

    // const handleAgeChange = (event) => {
    //     const updatedSelectedAge = event.target.value;
    //     setSelectedAge(updatedSelectedAge)
    // }

    const applyCallback = (event) => {
        event.preventDefault();
        // selectedCategory.forEach((checkedCategory) => {
        //     urlParams.set(`param${paramCounter}`, checkedCategory);
        //     paramCounter++;
        // });
        callback(selectedCategory /*selectedDuration selectedAge*/)
    }


    // const categoryOptions = props.uniqueCategory.map((categoryName) => {
    //     return <Checkbox checked={categoryName.indexOf(categoryName) > -1} />
    //     //<option key={continentName} value={continentName}>{continentName}</option>
    // })

    // const durationOptions = props.uniqueDuration.map((duration) => {
    //     return <option key={duration} value={duration}>{duration}</option>
    // })

    // const ageOptions = props.uniqueAge.map((age) => {
    //     return <option key={age} value={age}>{age}</option>
    // })

    

    return (
        <section className="homepage-filters">
            {/* {console.log("reached filters return")} */}
            <div className="container-filters">
                <FormControl sx={{m: 1, minWidth: 180, '& .MuiSelect-select' : {color: 'white'}, marginRight: '20rem' }}>
                    <InputLabel  htmlFor="continent-selection" shrink={false} sx={{fontWeight: '700'}}>Filter by</InputLabel>
                    <Select name="continent-selection" id="continent-selection" value={selectedCategory} multiple onChange={handleCategoryChange} renderValue={(selected) => ''} MenuProps={{PaperProps: {sx: {backgroundColor: '#F0FFFF', /*'& .MuiList-root': {width: '20rem',},*/ '& .MuiMenuItem-root': {padding: 0,}}}}} className="filter" sx={{color: "white", '.MuiOutlinedInput-notchedOutline': {borderColor: 'white', borderWidth: 'medium'},'&.Mui-focused .MuiOutlinedInput-notchedOutline': {borderColor: 'white', borderWidth: 'medium'},'&:hover .MuiOutlinedInput-notchedOutline': {borderColor: 'white', borderWidth: 'medium'},'.MuiSvgIcon-root ': {fill: "white !important",}}}>
                        {/* <Typography sx={{width: '9rem', height: '2rem', margin: '.2rem .7rem', backgroundColor: 'rgba(38, 171, 144, 0.28)'}}>
                            Category
                        </Typography> */}
                        {props.uniqueCategory.map((categoryName) => (
                            <MenuItem key={categoryName} value={categoryName}>
                                <Checkbox sx={{'&.Mui-checked': {color: 'rgba(38, 171, 144, 0.28)'}}} checked={selectedCategory.indexOf(categoryName) > -1} />
                                <ListItemText sx={{color: 'rgba(0, 0, 0, .7)'}} primary={categoryName} />
                            </MenuItem>
                        ))}    
                    </Select>
                </FormControl>
                {/* <FormControl sx={{ m: 1, minWidth: 180 }}> */}
                    {/* <InputLabel htmlFor="duration-selection" shrink={false} sx={{fontWeight: '700'}}>Sort by</InputLabel>
                    <Select name="duration-selection" className="filter" id="duration-selection" onChange={handleDurationChange} sx={{color: "white", '.MuiOutlinedInput-notchedOutline': {borderColor: 'white', borderWidth: 'medium'},'&.Mui-focused .MuiOutlinedInput-notchedOutline': {borderColor: 'white', borderWidth: 'medium'},'&:hover .MuiOutlinedInput-notchedOutline': {borderColor: 'white', borderWidth: 'medium'},'.MuiSvgIcon-root ': {fill: "white !important",}}}>
                        <MenuItem value="">All Duration</MenuItem>
                        {durationOptions}
                    </Select> */}

                    {/* <label htmlFor="age-selection">By Age Rating (+):</label>
                    <select name="age-selection" id="age-selection" onChange={handleAgeChange}>
                        <option value="">All Age</option>
                        {ageOptions}
                    </select>  */}
                {/* </FormControl> */}
                <input type="submit" value="Apply Filter" onClick={applyCallback}></input>
            </div>
        </section>);
}