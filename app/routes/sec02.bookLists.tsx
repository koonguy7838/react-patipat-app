import { useState, useEffect } from "react";
import { useNavigate } from "@remix-run/react";

export default function BookLists(){
    const navigate = useNavigate();
    const [loadstatus, setLoadStatus] = useState(true);
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        try{
            const fetchData = async() => {
                const book = await fetch(
                    'http://localhost:3000/api/getBooks'
                );
                if(book.ok){
                    const bookJson= await book.json();
                    setBookData(bookJson);
                }else{
                    alert('error ไม่สามารถอ่านข้อมูลได้');
                }
            }
            fetchData().catch(console.error);
        } catch (error) {
            alert('error อ่านข้อมูลผิดพลาด');
        }
    });

    return(
        <div className="m-3">
            <a href="/sec02/bookForm">[ เพิ่มหนังสือ ]</a>
            <h1 className="font-bold">รายการหนังสือ</h1>
            {
                bookData.map((item, index) => 
                    <>
                        <div className="font-bold p-2 m-2 border">
                            <h4>ชื่อ:{item.bookTitle}</h4>
                        </div><br />
                        <div className="p-2 m-2 border">
                            <a href={`/sec02/bookDetail/${item.id}`}>[ รายละเอียด ]</a>
                            <a href={`/sec02/bookEdit/${item.id}`}>[ แก้ไข ]</a>
                            <a href={`/sec02/bookDelete/${item.id}`}>[ ลบ ]</a>
                        </div>
                    </>
                )
            }
            <a href="/sec02/bookForm">[ ย้อนกลับ ]</a>
        </div>
    )
}