import { FC, useEffect, useState } from "react";
import { spotifyService } from "../../services/spotifyService";
import { UserModel } from "../../models/userModel";
import { Input } from "../ai/input";

export const HomePage: FC = () => {
  const [name,setName]= useState<string>("gust")

 async function getData(){
const data:UserModel=   await spotifyService.getUserData()
setName(data.display_name)
 } 
  
  useEffect(() => {
    getData()
  }, []);
  return (<>
  <h4>hello {name}</h4>
  <Input/>
  </>);
};
