import { IoLocationSharp } from 'react-icons/io5';
import CreatableSelect from 'react-select/creatable';
import { components } from 'react-select';

export default function InputSearch({
  options = [],
  data = {},
  setData,
  placeholder,
  name,
  label,
  error,
  children
}) {

  const value = data[name] ? { value: data[name], label: data[name] } : null;

  // --- Control personnalisé ---
  const CustomControl = (props) => (
    <components.Control {...props}>
     {children}
      {props.children}
    </components.Control>
  );

  return (
    <div>
      <label htmlFor={name}>{label}</label>

     
        <CreatableSelect
          isClearable
          options={options}
          placeholder={placeholder}
          id={name}
          name={name}
          value={value}
          formatCreateLabel={(inputValue) => inputValue}
          onChange={(e, meta) => setData(e, meta)}
          
          components={{
            Control: CustomControl
          }}

          styles={{
            control: (base) => ({
              ...base,
              paddingLeft: '4px'
            })
          }}
        />


      {error && <p className="text-red-500  font-light">{error}</p>}
    </div>
  );
}
