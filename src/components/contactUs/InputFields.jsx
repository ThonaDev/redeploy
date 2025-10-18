import React from "react";

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder, 
}) => {
  return (
    <div className="relative w-full">
      {/* Label inside border */}
      <label
        htmlFor={name}
        className="absolute -top-2 left-3 bg-white px-1 text-sm text-[#1A5276] font-medium"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}  // ✅ pass placeholder here
        className="w-full border rounded-md px-3 py-2 text-[#1A5276] focus:outline-none focus:ring-2 focus:ring-[#1A5276]"
      />
    </div>
  );
};

export default InputField;