import { useForm } from "react-hook-form";
import React from "react";

// Building a contact form.

export default function Contact() {
  //Set up the form by using destructing to extract propeties to be used { register ( to register form fields),handleSubmit 9 to handle form submission), and errors(an object containing any validation error when a form is submitted)} from the useForm hook.

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Use the handleSubmit function to handle form submission in the return

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contactPage">
      <div>
         <h3>Welcome!  Submit Question / Request </h3>
      </div>
      <br />
      <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First and Last Name</label>
        <input
          type="First and Last Name"
          {...register("First and Last Name", { required: true })}
        />
        {errors.email && <p className="requiredField">First and Last Name required! </p>}
        <br />     <br />
        <label> E-mail </label>
        <input
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p className="requiredField">Email required! </p>}
        <br />     <br />
        <label> Question/Request </label>
        <input
          type="Question/Request"
          {...register("placeHolder", { required: true })}
        />
        {errors.email && <p className="requiredField">To better assist you please say something </p>}
        <br />   <br />
        <button className ="submitButton"> SUBMIT </button>
      </form>
      </div> 
      <br />   <br />
      <div className="contactLinks">
        <a href="https://calendly.com/amolinge17">
          <span>Set an appointment via my calendy below </span>
          <div>Calendy</div>
        </a>
      </div>
    </div>
  );
}
