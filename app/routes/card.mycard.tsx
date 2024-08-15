import { useState } from "react";
import { card } from "./data";
import Index from "./_index";
import Navbar from "./Template/Nav";
function IsMember (
    { 
        active
    } : { 
        active: boolean
    }
){
    if(active){
        return <span>🟢 Hi, VIP Menber</span>
    }else{
        return <span>🔴 Menber Only</span>
    }
}



function Profile 
(
    {
        id,
        name,
        bio, 
        bgProf, 
        userIcon, 
        username, 
        createAt, 
        active
    } : {
        id:number, 
        name:string, 
        bio:any, 
        bgProf:string, 
        userIcon:string, 
        username:string, 
        createAt:string, 
        active:boolean
    }
) {
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${userIcon})`, color: "#38AFD9"}} title={username}>
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                <IsMember active={active}/>
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    {bio}
                </p>
                </div>
                <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src={bgProf} alt="Avatar of Jonathan Reinink" />
                <div className="text-sm">
                    <p className="text-gray-900 leading-none">{username}</p>
                    <p className="text-gray-600">{createAt}</p>
                </div>
                </div>
                <a href={`/card/${id}`}>
                    <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 m-2">ViewMore</button>
                </a> 
            </div>
        </div>
    );
}

export default function Mycard () {
    const [ btnActive, setActive ] = useState(true);
    const name = "Patipat";
    const note = "Welcome my name is Guy";
    const chk = true;
    const note2 = "Test999999999999999999";

    const item = card.filter(
        cardItem => cardItem.active == btnActive
    );

    const cardItem = item.map(cardItem => (
        <Profile
            key={cardItem.id}
            id={cardItem.id}
            name={cardItem.name}
            bio={cardItem.bio}
            bgProf={cardItem.bgProf}
            userIcon={cardItem.userIcon}
            username={cardItem.userName}
            createAt={cardItem.createAt}
            active={cardItem.active}
        />
    ));

    function handleClickActive(){
        console.log("---> handleClickActive"+btnActive);
        setActive(true);
    }

    function handleClickNonActive(){
        console.log("---> handleClickActive"+btnActive);
        setActive(false);
    }
    
    return (
        <div>
        <Navbar />
        <div className="p-3 bg-teal-700 rounded-xl">
            <h1 className="text-xl">Mycard : {name}</h1> <br />
            <div className="flex flex-row">
                <div className="flex-1 flex m-2 p-2 bg-blue-300 rounded-xl text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
                {note}</div> <br />
                <div className="flex-1 flex m-2 p-2 bg-green-300 rounded-xl text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
                {note2}
                </div>
            </div>
            {/* <Profile /> */}
            <div className="m-2 p-2">{cardItem}</div>
            <div className="flex flex-row">
                <button className="flex-1 m-3 p-1 bg-green-700 text-green-100 rounded-xl" onClick={ handleClickActive }>Active</button>
                <button className="flex-1 m-3 p-1 bg-red-700 text-red-100 rounded-xl" onClick={ handleClickNonActive }>NonActive</button>
            </div>
            </div>
        </div> 
    );
}