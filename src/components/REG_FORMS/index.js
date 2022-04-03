
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import RefugeeForms from "./refg_frm";
import HostForm from "./hst_frm";
import InputMask from "react-input-mask";


const REG_FORMS = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-screen container mx-auto flex items-center justify-center my-16">
        {" "}
        <div className="h-screen">
          <div className="bg-primary rounded-xl  p-6   ">
            <h1 className="text-2xl font-bold mb-4 text-white text-center ">
              Please Fill Out Form
            </h1>
            <div className=" flex justify-between mb-2">
              {" "}
              <input
                {...register("firstName")}
                placeholder="First name"
                className="rounded-md mr-2"
              />
              <input
                {...register("lastName")}
                placeholder="Last name"
                className="rounded-md m-0"
              />
            </div>

            <div className="flex items-center justify-between font-bold">
              <InputMask
                {...register("DOB")}
                mask="99/99/9999"
                className="rounded-md text-black px-2"
                type="text"
                placeholder="Enter Date of Birth"
              />

              <div className=" inline-flex items-center mx-auto text-white">
                <div className=" mr-2 ml-2">Gender:</div>
                <div className="flex flex-col items-start ">
                  <label>
                    <input
                      {...register("gender")}
                      type="radio"
                      value="Male"
                      name="gender"
                    />
                    <span className=" ml-2">Male</span>
                  </label>
                  <label>
                    <input
                      {...register("gender")}
                      type="radio"
                      value="Female"
                      name="gender"
                    />
                    <span className=" ml-2">Female</span>
                  </label>
                  <label>
                    <input
                      {...register("gender")}
                      type="radio"
                      value="na"
                      name="gender"
                    />
                    <span className=" ml-2">N/A</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <input
                {...register("email")}
                type="email"
                placeholder="  Email"
                className=" rounded-md mr-2 "
              />
              <input
                {...register("telephoneNum")}
                type="tel"
                placeholder="  Phone Number"
                className=" rounded-md"
              />
            </div>
            <div className=" flex justify-between ">
              <input
                {...register("password")}
                type="password"
                placeholder="  Password"
                className=" rounded-md mr-2 "
              />
              <input
                type="password"
                placeholder="  Re-enter Password"
                className=" rounded-md"
              />
            </div>
            <div className=" w-full flex justify-around">
              {" "}
              <label>
                <input
                  type="radio"
                  value="Host"
                  name="status"
                  {...register("status")}
                />
                <span className=" ml-2 text-white font-bold ">Host</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Refugee"
                  name="status"
                  {...register("status")}
                />
                <span className=" ml-2 text-white font-bold ">Refugee</span>
              </label>
            </div>

            <div className="container p-4  w-full text-center ">
              <button
                type="submit"
                className="bg-white inline rounded-xl text-primary text-bl font-medium px-4 py-2 hover:bg-secondary  hover:text-white duration-300 disabled:text-primary disabled:bg-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};



 export default REG_FORMS






//  <input name="Email" type="email" placeholder="Email" />