import InputSearch from './InputSearch'
import { IoLocationSharp,IoCarSport  } from 'react-icons/io5';
import Input from './Input';
export default function Form1({ handleChange, options, data, vehicleTypes, handleClick ,errors}) {
  return (
    <form
      className="flex flex-col w-[90%] shadow-2xl shadow-black max-w-[400px] max-h-[500px] gap-3 bg-white p-5 rounded-2xl min-h-[450px]"
      onSubmit={handleClick}
    >
      <InputSearch
        options={options}
        data={data}
        setData={handleChange}
        placeholder="Sélectionnez la ville de départ"
        name="depart"
        label="Ville de départ"
        error={errors.depart}
      >

 <IoLocationSharp  className="text-[#07bb6a] mx-1 text-2xl " />

      </InputSearch>

      <InputSearch
        options={options}
        data={data}
        setData={handleChange}
        placeholder="Sélectionnez la ville de livraison"
        name="arrive"
        label="Ville de livraison"
        error={errors.arrive}
      >
 <IoLocationSharp  className="text-[#bc0808] mx-1 text-2xl " />
        </InputSearch>

      <InputSearch
        options={vehicleTypes}
        data={data}
        setData={handleChange}
        placeholder="Choisissez un type de véhicule"
        name="typeCar"
        label="Type de véhicule"
        error={errors.typeCar}
      >


        <IoCarSport className="text-[#1a222e] mx-1 text-2xl " />
      </InputSearch>

      <div className='flex gap-3'>
        <input
          type="checkbox"
          id="restitution"
          name="restitution"
          onChange={(e, actionMeta) => handleChange(e, actionMeta)}
        />
        <label htmlFor="restitution">Avec restitution</label>
      </div>

      {data.restitution && 
       <InputSearch
              label={"Ville de restitution"}
              placeholder="Entrez votre ville de restitution"
              name="restitutionVille"
              options={options}
              data={data}
              setData={handleChange}
            ><IoLocationSharp  className="text-[#07bb6a] mx-1 text-2xl " /></InputSearch>}

      <button className='bg-black text-white py-3 font-bold  w-[60%] self-center rounded-xl align-end'>Envoyer</button>
    </form>
  );
}