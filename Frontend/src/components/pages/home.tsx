import { FC, useEffect, useState } from "react";
import { SelectMood } from "../select/SelectMood";
import "./home.css"
import { UserModel } from "../../models/userModel";
import { spotifyService } from "../../services/spotifyService";
export const HomePage: FC = () => {
  const [urlItem, setUrlItem] = useState<{ name: string, url: string}>({name:"",url:""});

  const [name, setName] = useState<string>("gust");
  
  useEffect(() => {
    getData();
  }, [name]);

  async function getData() {
    try {
    const data: UserModel = await spotifyService.getUserData();
    setName(data.display_name); 
    } catch (error:any) {
      console.log(error);
    }
  }
 

  return (
    <div id="Home">
      <h4>hello {name}</h4>
      <SelectMood setUrlItem={setUrlItem} />
      {urlItem.url && (
        
  <a href={urlItem.url} target="_blank" rel="noopener noreferrer">
    {urlItem.name}
  </a>
)}

    
    </div>
  );
};
