import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const REG_FORMS = () => {
  const [typeofForm, setTypeofForm] = useState(0);
  const AdditionalForm = () => {
    if (typeofForm === 0) {
      return null;
    } else if (typeofForm === 1) {
      return <div>Host</div>;
    } else {
      return <div>Refugee</div>;
    }
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <p>Hello There</p>
    </form>
  );
};

export default REG_FORMS;
