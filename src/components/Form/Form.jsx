import React, { useState } from 'react'
import Input from "../../UI/Input/Input";
import Button from "../../UI/Buttons/Button";
import { useToast } from "../Providers/ToastProvider";
import { X } from "lucide-react";
import "../FloatingMessageButton/FloatingMessageButton.css";

export default function Form({ onClose }) {
        const [errorMessagePhone , setErrorMessagePhone] = useState("");
        const [errorMessageEmail , setErrorMessageEmail] = useState("");
        const [email, setEmail] = useState("");
        const [phone, setPhone] = useState("");
        const [name , setName] = useState("");
        const {showToast } = useToast();


        const handleSubmit = (e) => {
            if(!name || !email || !phone){
              e.preventDefault();
                showToast({
                  text1: "Заполните все поля! ",
                  type: "warning",
                });
                return;
          };
        
            e.preventDefault();
            onClose(); 
          };

  return (
    <div className="floating-form">
    <X size={20} color="#fff"  onClick={onClose}  style={{position: "absolute", top: "10px", right: "10px", cursor: "pointer"}}/>
 <div className="form-header">
   <h2>Отправить заявку</h2>
 </div>
 <form onSubmit={handleSubmit}>
   <div className="form-group">
     <Input placeholder={"Имя"} onChange={(e, value) => setName(value)} mask={false} errorMessage={errorMessagePhone}/>
   </div>
   <div className="form-group">
     <Input placeholder={"Email"} onChange={(e, value) => setEmail(value)} mask={false} errorMessage={errorMessagePhone}/>
   </div>
   <div className="form-group">
     <Input placeholder={"Телефон"} onChange={(e, value) => setPhone(value)} mask={false} errorMessage={errorMessageEmail}/>
   </div>
   <Button type="submit">Отправить</Button>
 </form>
</div>
  )
}
