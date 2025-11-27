

export default function Input({ label, placeholder, name, value, onChange, type = "text",error,children }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="block mb-1 text-md font-medium text-gray-700">{label}</label>
      <div className="flex gap-2 py-2.5 px-1 border rounded-md items-center pl-3 ">
           <div >{children}</div>
   <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        className="flex-1"
      />
   
      </div>
   
  <p className="text-red-500">{error}</p>
    </div>
  );
}
