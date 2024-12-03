import { FC, useEffect, useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box, FormControl, InputLabel, MenuItem } from "@mui/material";
import "./selectMood.css";
import { Moods } from "../../models/moodsEnum";
import { spotifyService } from "../../services/spotifyService";
import { TracksResModel } from "../../models/tracksResModel";

type SelectMoodProps = {
  setUrlItem: (item: { name: string; url: string }) => void;
};

export const SelectMood: FC<SelectMoodProps> = ({ setUrlItem }) => {
  const [moodList, setMoodList] = useState<string[]>([]);
  const [selectedMood, setSelectedMood] = useState<Moods | undefined>(undefined);

  useEffect(() => {
    const list: Moods[] = [];
    for (const mood of Object.values(Moods)) {
      list.push(mood);
    }
    setMoodList(list);
  }, []);

  const handleChange = async (event: SelectChangeEvent) => {
    try {
      const newMood = event.target.value as Moods;
      setSelectedMood(newMood);

      const tracks: TracksResModel = await spotifyService.getTracks(newMood);
      const urlList = tracks.playlists.items
        .filter(t => t?.external_urls?.spotify) // Only include items with a valid spotify URL
        .map(t => ({
          name: t.name,
          url: t.external_urls.spotify,
          id: t.id,
        }));
      const randomNum = spotifyService.getRandom(urlList.length - 1);
      setUrlItem(urlList[randomNum]);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div id="SelectMood">
      <Box>
        <FormControl fullWidth>
          <InputLabel>Mood</InputLabel>
          <Select value={selectedMood} label="Mood" onChange={handleChange}>
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
