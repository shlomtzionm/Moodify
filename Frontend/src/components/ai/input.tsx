import { ChangeEvent, FC, useState } from "react";
import { aiService } from "./aiService";

export const Input: FC = () => {
  const [text, setText] = useState<string>("");

  function handleText(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  async function handleClick() {
    console.log(await aiService.getEmotion(text));
  }


  return (
    <div>
      <input type="text" onChange={handleText} />

<button onClick={handleClick}>send</button>

    </div>


);
};
