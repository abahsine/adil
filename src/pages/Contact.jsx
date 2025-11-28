import { useEffect, useState } from "react";

import vehiculesTypes from "../components/contact/vehiculeTypes";
import Villes from "../components/contact/Villes";
import validateFormStep from "../components/contact/ValidateDataForm";
import Form1 from "../components/contact/Form1";
import Form2 from "../components/contact/Form2";
import sendEmail from "../components/utils/EmailJs";

export default function Contact() {
  const formInit = {
    depart: "",
    arrive: "",
    typeCar: "",
    restitution: false,
    name: "",
    mail: "",
    telephone: "",
    restitutionVille :""
  }
  const [data, setData] = useState({...formInit});

  const [step,setStep] = useState(1)
  const [errors,setErrors] = useState({})


  const handleClick = (e) => {
    e.preventDefault();
    const validationData = validateFormStep(data,step)
    if(validationData!=="ok"){
      setErrors(validationData)
      console.log(errors)
    }else{
      setStep(step+1)
    }
  
  };
  const handlePrevious = ()=>{
    setStep(1)
  }

  
  const handleChange = (e, actionMeta) => {
    console.log(data);
    console.log(errors)
    try {
      if (e.target.name == "restitution") {
        return setData({ ...data, restitution: !data.restitution });
      } else {
        setErrors({...errors,[e.target.name] : ""})
        return setData({ ...data, [e.target.name]: e.target.value });
      }
    } catch {
      setErrors({...errors,[actionMeta.name]: ""})
      setData({
        ...data,
        [actionMeta.name]: e?.value || null,
      });
    }
  };

useEffect(()=>{
  if(step===3){
    sendEmail(data)
    setData({...formInit})
  }
},[step])

  return (
    <div className="h-[600px] flex flex-col justify-center bg-[url('/assets/about/heroAbout.jpeg')] items-center align  bg-[#fff]">
      {step==1 && (
        <Form1
          handleChange={handleChange}
          options={Villes}
          data={data}
          vehicleTypes={vehiculesTypes()}
          handleClick={handleClick}
          errors={errors}
        />
      )}
      {step==2 && (
        <Form2
          handleClick={handleClick}
          data={data}
          handleChange={handleChange}
          handlePrevious={handlePrevious}
          errors={errors}
        />
      )}

      {step==3 && (
        <h3>congratulation</h3>
      )}
    </div>
  );
}







