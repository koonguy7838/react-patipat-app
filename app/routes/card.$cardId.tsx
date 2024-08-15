import { useParams } from "@remix-run/react";
import { card } from "./data";
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
            </div>
        </div>
    );
}

export default function GetCard() {
    const myParams = useParams();
    const cardId = Number(myParams.cardId)
    // console.log(cardId)

    const item = card.filter(
        cardItem => cardItem.id == cardId
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

    return(
        <>
           <div className="m-2 p-2">{cardItem}</div>
        </>
        
    );
    
}