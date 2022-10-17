import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Form() {
  const { register, handleSubmit } = useForm();
  const [numbers, setNumbers] = useState([]);
  const submitData = (e) => {
    console.log(JSON.stringify(e));

    setNumbers([...numbers, e.phoneNumber]);
    // fetch("http://127.0.0.1:2000", {
    //   method: "POST",
    //   body: JSON.stringify(e),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((result) => alert(result.message));

    axios.post("http://127.0.0.1:2000", e).then((result) => {
      alert(result.data.message);
    });
  };
  return (
    <div>
      <h1>Frontend Contact</h1>
      <form action="" onSubmit={handleSubmit(submitData)}>
        <input {...register("phoneNumber")} type="text" />
        <br />
        <button type="submit">Send</button>
      </form>
      <Contacts numbers={numbers} />
    </div>
  );
}

const Contacts = ({ numbers }) => {
  return (
    <div>
      {numbers.map((n, i) => (
        <p key={i}>{n}</p>
      ))}
    </div>
  );
};

export default Form;
