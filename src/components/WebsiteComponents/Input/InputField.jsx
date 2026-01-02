const InputField = ({ placeholder, type = "text", className = "", ...rest }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`w-full border border-gray-300 rounded px-3 py-2 text-sm ${className}`}
    {...rest}
  />
);

export default InputField;
