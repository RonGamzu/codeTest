import React from "react";

function Input({
  id,
  label = "",
  className = "",
  min = 1,
  placeholder,
  type,
  value,
  onChange,
}) {
  return (
    <>
      {label && <label to="price">{label}</label>}
      <input
        min={min}
        className={className}
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

export default Input;
