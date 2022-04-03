import React from "react";
import useForm from "react-hook-form";

export default function App () {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        
        <form onSubmit={handleSubmit(onSubmit)}>
        Host: <input type="radio" name="host" ref={register}/>
        Refugee: <input type="radio" name="refugee" ref={register} />
        <input type="submit" />
    </form>

    );
}
