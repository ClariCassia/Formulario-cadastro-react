// Input.jsx
import React from "react";

function Input({ id, label, type, register, errors }) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={id} className="block text-lg font-medium leading-6 text-gray-900">
        {label}:
      </label>
      <input type={type} id={id} className="shadow-md p-2" {...register(id, { required: true })} />
      <span className="text-red-500 text-sm">{errors[id]?.message}</span>
    </div>
  );
}

export default Input;
