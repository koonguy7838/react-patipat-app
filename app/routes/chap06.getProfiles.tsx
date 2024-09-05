import { useState, useEffect } from "react";

export default function GetProfiles(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fecthData = async() => {
            const response = await fetch('http://localhost:3000/api/getProfile');
            if(!response.ok){
                console.log('Network response was not ok.');
            }

            const result = await response.json();
            setData(result);
            setLoading(false);

        } 

        fecthData();

    }, []);
    if(loading){
        return <p className="m-4 p-4">Loading...</p>
    }

    return(
        <div className="m-4 p-4">
            <h1 className="text-2xl">Hi, User Porfile:</h1>
            <div>
                <img className="w-72" src={(data.img)} alt="" />
            </div>
            {/* <p>{JSON.stringify(data)}</p> */}
            <p>{(data.fname)} {(data.lname)}</p>
            <p>{(data.major)}</p>
        </div>
    )
}