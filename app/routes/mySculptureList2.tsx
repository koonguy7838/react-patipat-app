import { useState } from "react"; 
import { sculptureList } from "./SculptureLists";
import { i } from "node_modules/vite/dist/node/types.d-aGj9QkWt";

export default function EProject() {
    const [index, setIndex] = useState(0);
    const [sculpL, setSculpL] = useState(sculptureList);

    function handleClickNext(){
        console.log(index);
        if(index + 1 >= sculptureList.length){
            setIndex(0);
        }else{
            setIndex(index + 1);
        }
    }

    function handleClickDelete(){
        console.log(index);
        if(index == 0){
            setIndex(sculptureList.length - 1);
        }else{
            setIndex(index - 1);  
        }
    }

    let sculpture = sculptureList[index];

    return(
        <div className="font-sans p-12 bg-teal-700 rounded-xl">   
        <h1 className="">รายการโครงงาน</h1>
            {
                sculpL.map(item => (
                        <div key={item.id}>
                            <h2><i>{item.name}</i> โดย {item.author}</h2>
                            <hr className="mb-3 mt-3 color-grey-500"/>
                            <img className="text-al" src={item.url} alt={item.description} title={item.name}/>
                            <p>{item.description}</p>
                            <a href={item.reference} target="_blank">อ้างอิง</a>
                            <div className="flex flex-row">
                                <button className="flex-1 m-3 p-1 bg-yellow-500 text-green-100 rounded-xl" onClick={handleClickNext}>Edit</button><br />
                                <button className="flex-1 m-3 p-1 bg-red-700 text-red-100 rounded-xl" onClick={() => {
                                    setSculpL(
                                        sculpL.filter(
                                            tmp => tmp.id != item.id
                                        )
                                    );
                                }}>Delete</button>
                            </div>
                            <hr className="mb-2 mt-2" />
                        </div>
                        )
                    )
            } 
            
            <h3 className="text-center">({index + 1} จาก {sculptureList.length})</h3>
        </div>
    );
}
