"use client";
import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  error?: string;
}

export default function InputBox({ labelText, error, ...props }: Props) {
  return (
    <div className={props.className}>
      <label
        className={`block text-slate-600 mb-2 text-xs lg:text-sm xl:text-base`}
      >
        {labelText}
      </label>
      <input
        className={`w-full h-12 border border-slate-300 rounded-lg px-2 ${
          error ? "border-red-500 animate-shake" : ""
        }`}
        {...props}
      />
    </div>
  );
}
