"use client";
import InputBox from "@/components/InputBox";
import { Backend_URL } from "@/lib/Constants";
import React, { useRef } from "react";

type FormInput = {
  name: string;
  email: string;
  password: string;
};

export default function Signup() {
  const data = useRef<FormInput>({
    name: "",
    email: "",
    password: "",
  });
  const register = async () => {
    const res = await fetch(Backend_URL + "/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: data.current.name,
        email: data.current.email,
        password: data.current.password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      alert(res.statusText);
      return;
    }
    const response = await res.json();
    alert("User created");
    console.log(response);
  };
  return (
    <div>
      <div>
        <form onSubmit={register}>
          <InputBox
            autoComplete="off"
            name="name"
            labelText="Name"
            required
            onChange={(e) => (data.current.name = e.target.value)}
          />
          <InputBox
            name="email"
            labelText="Email"
            required
            onChange={(e) => (data.current.email = e.target.value)}
          />
          <InputBox
            name="password"
            labelText="Password"
            required
            onChange={(e) => (data.current.password = e.target.value)}
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}
