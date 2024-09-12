import { useState } from "react";
import Navbar from "./Template/Nav";
let nextId = 0;

export default function CreateCard(){
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [photo, setPohto] = useState('');
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const handleClickAdd = (na:string, add:string, pho:string) => {
        setCards([
            ...cards,{
                id: nextId++,
                Name: na,
                Address: add,
                Photo: pho
            }
        ])
    }

    function viewTableData(){
        // const card = cards.find(card => card.nextId == nextId )
        // alert(setSelectedCard([selectedCard.nextId, selectedCard.Name, selectedCard.Photo]))
        alert([nextId, name, address, photo])
    }

    return (
        <div>
            <Navbar />
        <div className="font-sans">
            <div className="bg-teal-700 rounded-xl p-4 m-2">
                <h1 className="text-[32px]">เพิ่มข้อมูลนามบัตร</h1>
                <div className="m-4 grid grid-rows ">
                    <label htmlFor="">ชื่อ-นามสกุล: </label>
                    <input className="rounded-lg p-2 m-4" type="text" name="cName" value={name} onChange={(e) => setName(e.target.value)} id="" />
                    <label htmlFor="">ที่อยู่</label>
                    <textarea className="rounded-lg p-2 m-4" name="cAddress" value={address} onChange={(e) => setAddress(e.target.value)} id=""></textarea>
                    <label htmlFor="">รูปภาพ: </label>
                    <input className="rounded-lg p-2 m-4" type="text" name="cPhoto" value={photo} onChange={(e) => setPohto(e.target.value)} id="" />
                    <div className="text-end">
                        <button className="rounded-lg p-2 m-4 w-1/6 bg-green-500" onClick={() => handleClickAdd(name, address, photo)}>เพิ่มนามบัตร</button>
                    </div>
                </div>
            </div>
            <div className="bg-teal-700 rounded-xl p-4 m-2">
                <h1 className="text-[32px]">List</h1>
                <table className="table-fixed w-[100%]">
                    <thead>
                        <tr>
                            <th>ลำดับ</th>
                            <th>ชื่อ-นามสกุล</th>
                            <th>ที่อยู่</th>
                            <th>รูปภาพ</th>
                            <th>ดู</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            cards.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id+1}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.Address}</td>
                                    <td>{item.Photo}</td>
                                    <td><button className="rounded-lg p-2 bg-green-500" onClick={viewTableData}>View</button></td>
                                </tr>
                            )
                        )
                        }
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );

}