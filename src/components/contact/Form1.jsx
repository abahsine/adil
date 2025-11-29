import AddressAutocomplete from './googleApi';
import InputSearch from './InputSearch'
import { IoLocationSharp,IoCarSport  } from 'react-icons/io5';
export default function Form1({ handleChange, options, data, vehicleTypes, handleClick ,errors}) {
  return (
    <form
      className="flex flex-col w-[90%] shadow-2xl shadow-black max-w-[380px] h-[90%] max-h-[600px] gap-3 bg-white p-5 rounded-2xl min-h-[450px]"
      onSubmit={handleClick}
    >

 
            <AddressAutocomplete
  name="depart"
  label="Adresse de départ"
  placeholder="Adresse de départ"
  onChange={handleChange}
  error={errors.depart}
>
   <IoLocationSharp  className="text-[#07bb6a] mx-1 text-2xl " />
</AddressAutocomplete>
          
      
      <AddressAutocomplete
        onChange={handleChange}
        placeholder="Adresse de livraison"
        name="arrive"
        label="Adresse de livraison"
        error={errors.arrive}
      >
 <IoLocationSharp  className="text-[#bc0808] mx-1 text-2xl " />
        </AddressAutocomplete>

      <InputSearch
        options={vehicleTypes}
        data={data}
        setData={handleChange}
        placeholder="Type de véhicule"
        name="typeCar"
        label="Type de véhicule"
        error={errors.typeCar}
      >


        <IoCarSport className="text-[#1a222e] mx-1 text-2xl " />
      </InputSearch>

      <div className='flex gap-3 '>
        <input
          type="checkbox"
          className='bg-white border  w-5 border-amber-500'
          id="restitution"
          name="restitution"
          onChange={(e, actionMeta) => handleChange(e, actionMeta)}
        />
        <label htmlFor="restitution" className="block mb-1 text-md font-medium text-gray-700">Avec restitution</label>
      </div>

      {data.restitution && 
       <AddressAutocomplete
              label={"Adresse de restitution"}
              placeholder="Adresse de restitution"
              name="restitutionVille"
              onChange={handleChange}
            ><IoLocationSharp  className="text-[#07bb6a] mx-1 text-2xl " /></AddressAutocomplete>}

      <button className='bg-black text-white py-3 font-bold  w-[60%] self-center rounded-xl align-end'>Envoyer</button>
    </form>
  );
}