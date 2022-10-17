import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit } = useForm();
    const [numbers, setNumbers] = useState([])
  const submitData = (e) => {
    // console.log(e);
    setNumbers([...numbers, e.phoneNumber])
    console.log("Data submitted");
  };
  return (
    <div>
      <h1>Frontend Contact</h1>
      <form action="" onSubmit={handleSubmit(submitData)}>
        <input {...register("phoneNumber")} type="text" />
        <br />
        <button type="submit">Send</button>
      </form>
      <Contacts numbers={numbers}  />
    </div>
  );
}

const Contacts = ({numbers}) => {
  return (
    <div>
      {numbers.map((n, i) => (
        <p key={i}>{n}</p>
      ))}
    </div>
  );
};

export default Form;
