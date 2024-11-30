import { FC, useEffect, useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box, FormControl, InputLabel, MenuItem } from "@mui/material";
import "./selectMood.css";
import { Moods } from "../../models/moodsEnum";
import { spotifyService } from "../../services/spotifyService";

export const SelectMood: FC = () => {
  const [moodList, setMoodList] = useState<string[]>([]);
  const [selectedMood, setSelectedMood] = useState<Moods>(Moods.Happy); 

  useEffect(() => {
    const list: Moods[] = [];
    for (const mood of Object.values(Moods)) {
      list.push(mood);
    }
    setMoodList(list);
  }, []);

  const handleChange = async (event: SelectChangeEvent) => {
    const newMood = event.target.value as Moods;
    setSelectedMood(newMood);   
    const tracks = await spotifyService.getTracks(newMood);
    console.log(tracks);  // Make sure tracks are logged after being fetched
  };
  

  return (
    <div id="SelectMood">
      <Box>
        <FormControl fullWidth>
          <InputLabel>Mood</InputLabel>
          <Select 
            value={selectedMood} 
            label="Mood" 
            onChange={handleChange}
            
          >
            {moodList.map((moodItem, index) => (
              <MenuItem key={index} value={moodItem}>
                {moodItem}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};
