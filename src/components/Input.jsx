import React from "react";

export const Input = ({ placeholder, name, onChange }) => {
  return (
    <div class="form-group mb-4">
      <input
        type="text"
        className="bg-light form-control input-style"
        id=""
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
