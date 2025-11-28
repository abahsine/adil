import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";
import Input from "./Input";
import { IoPerson, IoPhoneLandscape } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

export default function Form2({ handleClick, data, handleChange,handlePrevious,errors }) {
  return (
    <form
      className="flex flex-col w-[90%] shadow-2xl shadow-black max-w-[380px] h-[90%] max-h-[600px] gap-3 bg-white p-5 rounded-2xl min-h-[450px]"

      onSubmit={handleClick}
    >
        <button className="text-[#64646498] text-2xl  self-start" onClick={handlePrevious}><FaArrowLeft/></button>
      <Input
        label={"Nom :"}
        placeholder="Nom"
        name="name"
        value={data.name}
        onChange={handleChange}
        error = {errors.name}

      >  <IoPerson className="text-[#1a222e] mx-1 text-2xl " /></Input>
      <Input
        label={"Adresse mail :"}
        placeholder="Adresse mail"
        name="mail"
        value={data.mail}
        onChange={handleChange}
        type="mail"
         error = {errors.mail}
      >

        <IoMdMail className="text-[#1a222e] mx-1 text-2xl "/>
      </Input>
      <Input
        label={"Téléphone (optionnel) : "}
        placeholder="Numéro de telephone"
        name="telephone"
        value={data.telephone}
        onChange={handleChange}
        type="tel"
         error = {errors.telephone}
      >

        <FaPhoneAlt className="text-[#1a222e] mx-1 text-2xl "/>

      </Input>
      <div className="flex justify-center">
      
       <button className='bg-black text-white py-3 font-bold  w-[60%] self-center rounded-xl' onClick={handleClick}>Envoyer</button>
       
      </div>
     
    </form>
  );
}