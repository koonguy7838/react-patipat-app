import { useState } from "react"; 
import { sculptureList } from "./SculptureLists";
import { i } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
import Navbar from "./Template/Nav";

export default function EProject() {
    const [index, setIndex] = useState(0);

    function handleClickNext(){
        console.log(index);
        if(index + 1 >= sculptureList.length){
            setIndex(0);
        }else{
            setIndex(index + 1);
        }
    }

    function handleClickprev(){
        console.log(index);
        if(index == 0){
            setIndex(sculptureList.length - 1);
        }else{
            setIndex(index - 1);  
        }
    }

    let sculpture = sculptureList[index];

    return(
        <div>  
        <Navbar /> 
        <div className="font-sans p-12 bg-teal-700 rounded-xl">
            <h2><i>{sculpture.name}</i> โดย {sculpture.author}</h2>
            <hr className="mb-3 mt-3"/>
            <img className="text-al" style={{ width: "75%;"}} src={sculpture.url} alt={sculpture.description} title={sculpture.name}/>
            <p>{sculpture.description}</p>
            <a href={sculpture.reference} target="_blank">อ้างอิง</a>
            <div className="flex flex-row">
            <button className="flex-1 m-3 p-1 bg-red-700 text-red-100 rounded-xl" onClick={handleClickprev}>prev</button>
            <button className="flex-1 m-3 p-1 bg-green-700 text-green-100 rounded-xl" onClick={handleClickNext}>Next</button><br />
            </div>
            <h3 className="text-center">({index + 1} จาก {sculptureList.length})</h3>
        </div>
        </div>
    );
}