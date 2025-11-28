export default function Input({ label, placeholder, name, value, onChange, type = "text", error, children }) {
  return (
    <div className="flex flex-col gap-1">
      {/* Label */}
      <label htmlFor={name} className="text-md font-medium text-gray-700">
        {label}
      </label>

      {/* Input wrapper */}
      <div className="flex items-center gap-2 px-3 py-2.5 border border-gray-500 rounded-md bg-white focus-within:ring-2 focus-within:ring-blue-400">
        {/* Icon / children */}
        {children && <div className="text-gray-500">{children}</div>}

        {/* Input */}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
          className="flex-1 bg-white text-gray-900 placeholder-gray-400 outline-none"
        />
      </div>

      {/* Error message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
