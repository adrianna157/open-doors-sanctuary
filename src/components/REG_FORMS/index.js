
import React from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";


const REG_FORMS = ({ onFormFilled }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    onFormFilled({ ...data, DOB: new Date(data.DOB) });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto flex items-center justify-center">
        <div className="container bg-hacky-50 rounded-xl p-6 drop-shadow-2xl">
          <h1 className="text-2xl font-bold mb-4 text-white text-center ">
            Please Fill Out Form
          </h1>
          <div className="flex-col md:flex-row gap-2 flex items-center justify-between mb-2">
            <input
              {...register("firstName")}
              placeholder="First name"
              className="rounded-md box-border max-w-xs shrink px-2"
            />
            <input

              {...register("lastName")}
              placeholder="Last name"
              className="rounded-md box-border max-w-xs shrink px-2"
            />
          </div>

          <div className="flex-col md:flex-row gap-2 flex items-center justify-between mb-2 font-bold">
            <InputMask
              {...register("DOB")}
              mask="99/99/9999"
              className="rounded-md text-black shrink px-2"
              type="text"
              placeholder="Enter Date of Birth"
            />

            <div className=" inline-flex items-center mx-auto text-white shrink">
              <div className=" mr-2 ml-2">Gender:</div>
              <div className="flex flex-col items-start ">
                <label className="shrink">
                  <input
                    {...register("gender")}
                    type="radio"
                    value="Male"
                    name="gender"
                  />
                  <span className=" ml-2">Male</span>
                </label>
                <label className="shrink">
                  <input
                    {...register("gender")}
                    type="radio"
                    value="Female"
                    name="gender"
                  />
                  <span className=" ml-2">Female</span>
                </label>
                <label className="shrink">
                  <input
                    {...register("gender")}
                    type="radio"
                    value="na"
                    name="gender"
                  />
                  <span className="ml-2">N/A</span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex-col md:flex-row gap-2 flex items-center justify-between mb-2">
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="shrink rounded-md px-2"
            />
            <input
              {...register("telephoneNum")}
              type="tel"
              placeholder="Phone Number"
              className="shrink rounded-md px-2"
            />
          </div>
          <div className="flex-col md:flex-row gap-2 flex items-center justify-between mb-2">
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="shrink rounded-md px-2"
            />
            <input
              type="password"
              placeholder="Re-enter Password"
              className="shrink rounded-md px-2"
            />
          </div>
          <div className="flex-col md:flex-row gap-2 flex items-center justify-between mb-2">
            <input
              {...register("adress")}
              className="w-full rounded-md placeholder:text-center shrink px-2"
              placeholder="Adress"
            />
          </div>

          <div className="container p-4  w-full text-center ">
            <button
              type="submit"
              className="bg-white inline rounded-xl text-black font-medium px-4 py-2 hover:bg-secondary  hover:text-white duration-300 disabled:text-blue-200 disabled:bg-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form> );
};

 export default REG_FORMS






//  <input name="Email" type="email" placeholder="Email" />