import { React,useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';

export default function Filters(props) {
    const callback = props.applyFilterCallback;
    const [selectedContinent, setSelectedContinent] = useState([]);
    const [selectedDuration, setSelectedDuration] = useState('');
    // const [selectedAge, setSelectedAge] = useState('');

    const handleContinentChange = (event) => {
        // const updatedSelectedContinent = event.target.value;
        const {
            target: { value },
        } = event;
        setSelectedContinent(
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    const handleDurationChange = (event) => {
        const updatedSelectedDuration = event.target.value;
        setSelectedDuration(updatedSelectedDuration)
    }

    // const handleAgeChange = (event) => {
    //     const updatedSelectedAge = event.target.value;
    //     setSelectedAge(updatedSelectedAge)
    // }

    const applyCallback = (event) => {
        event.preventDefault();
        callback(selectedContinent, selectedDuration /*selectedAge*/)
    }


    // const continentOptions = props.uniqueContinent.map((continentName) => {
    //     return <Checkbox checked={continentName.indexOf(continentName) > -1} />
    //     //<option key={continentName} value={continentName}>{continentName}</option>
    // })

    const durationOptions = props.uniqueDuration.map((duration) => {
        return <option key={duration} value={duration}>{duration}</option>
    })

    // const ageOptions = props.uniqueAge.map((age) => {
    //     return <option key={age} value={age}>{age}</option>
    // })



    return (
        <section className="homepage-filters">
            <div className="container-filters">
                <FormControl sx={{m: 1, minWidth: 180, '& .MuiSelect-select' : {color: 'white'}, marginRight: '20rem' }}>
                    <InputLabel  htmlFor="continent-selection" shrink={false} sx={{fontWeight: '700'}}>Filter by</InputLabel>
                    <Select name="continent-selection" id="continent-selection" value={selectedContinent} multiple onChange={handleContinentChange} renderValue={(selected) => ''} className="filter" sx={{color: "white", '.MuiOutlinedInput-notchedOutline': {borderColor: 'white', borderWidth: 'medium'},'&.Mui-focused .MuiOutlinedInput-notchedOutline': {borderColor: 'white', borderWidth: 'medium'},'&:hover .MuiOutlinedInput-notchedOutline': {borderColor: 'white', borderWidth: 'medium'},'.MuiSvgIcon-root ': {fill: "white !important",}}}>
                        {props.uniqueContinent.map((continentName) => (
                            <MenuItem key={continentName} value={continentName}>
                                <Checkbox checked={selectedContinent.indexOf(continentName) > -1} />
                                <ListItemText primary={continentName} />
                            </MenuItem>
                        ))}    
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                    <InputLabel htmlFor="duration-selection" shrink={false} sx={{fontWeight: '700'}}>Sort by</InputLabel>
                    <Select name="duration-selection" className="filter" id="duration-selection" onChange={handleDurationChange} sx={{color: "white", '.MuiOutlinedInput-notchedOutline': {borderColor: 'white', borderWidth: 'medium'},'&.Mui-focused .MuiOutlinedInput-notchedOutline': {borderColor: 'white', borderWidth: 'medium'},'&:hover .MuiOutlinedInput-notchedOutline': {borderColor: 'white', borderWidth: 'medium'},'.MuiSvgIcon-root ': {fill: "white !important",}}}>
                        <MenuItem value="">All Duration</MenuItem>
                        {durationOptions}
                    </Select>

                    {/* <label htmlFor="age-selection">By Age Rating (+):</label>
                    <select name="age-selection" id="age-selection" onChange={handleAgeChange}>
                        <option value="">All Age</option>
                        {ageOptions}
                    </select>  */}
                </FormControl>
                <input type="submit" value="Apply Filter" onClick={applyCallback}></input>
            </div>
        </section>);
}