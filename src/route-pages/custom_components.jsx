import AniText from "./custom_components/aniText";
import {Button1} from "./custom_components/button1";
import { useState, useMemo } from "react";



export const CustomComponents = () => {
    const [text, setText] = useState("");
    const randomHexCode = useMemo(() => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }, []);
    
    return (
        <div className="container mx-auto">
            <h1 className="mb-20">custom components</h1>
            <div className="custom_component_1 mb-20">
                <input className="caret-pink-500" type="text" placeholder="enter your text, to test " value={text} onChange={(e) => setText(e.target.value)} />
                <AniText text={text} />
            </div>
            <div className="custom_component_2">
                <Button1 onClick={() => console.log("clicked")} color={randomHexCode}>Button 1</Button1>
                <Button1 onClick={() => console.log("clicked")} color={randomHexCode}>Button 1</Button1>
                <Button1 onClick={() => console.log("clicked")} color={randomHexCode}>Button 1</Button1>
                </div>
        </div>

    );
}