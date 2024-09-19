import { useNavigate } from "@remix-run/react";
import { useState } from "react";

export default function bookFrom(){
    const navigate = useNavigate();
    const [stock, setStock] = useState('In-Stock');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(
                'http://localhost:3000/api/addBook',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(formJson)
                }
            );

            if(response.ok){
                const data = await response.json();
                alert(`บันทึกเสร็จแล้ว ${data.message}`);
                navigate('/sec02/bookLists');
            }else{
                alert('error บันทึกไม่สำเร็จ');
            }

        }catch (error){
            alert('error Submit ผิดพลาด')
        }
    }
    return(
        <div className="m-3 bg-gray-500">
            <a href="/sec02/bookForm">[ ข้อมูลหนังสือ ]</a>
            <h1 className="font-bold">เพิ่มหนังสือใหม่</h1>
            <form method="POST" onSubmit={handleSubmit}>
            <label>ชื่อหนังสือ*:</label>
            <input type="text" name="bookTitle" required /><br />
            <label>รายละเอียด</label>
            <textarea rows={3} cols={50} name="bookDesc" id=""></textarea><br />
            <label>หมวดหมู่*</label>
            <select name="bookCat" required>
                <option value="">เลือกหมวดหมู่</option>
                <option value="10">วิทยาศาสตร์</option>
                <option value="20">เทคโนโลยี</option>
                <option value="30">คอมพิวเตอร์</option>
            </select><br />
            <div className="p-3">
                <input 
                type="radio" 
                name="bookStock" 
                value="In-Stock"
                defaultChecked={stock === 'In-Stock'}                
                />
                <label>In-Stock</label>
            </div>
            <div className="p-3">
                <input 
                type="radio" 
                name="bookStock" 
                value="Out-Stock"
                defaultChecked={stock === 'Out-Stock'}                
                />
                <label>Out-Stock</label>
            </div>
            <button type="submit">[ บันทึก ]</button>
            <button type="reset">[ เคลียร์ ]</button>
            </form>
        </div>
    )
}