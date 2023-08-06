import { useForm } from "react-hook-form";
// import React from "react";

// Building a contact form.

 function Contact() {
  //Set up the form by using destructing to extract propeties to be used { register ( to register form fields),handleSubmit 9 to handle form submission), and errors(an object containing any validation error when a form is submitted)} from the useForm hook.

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Use the handleSubmit function to handle form submission in the return

  const onSubmit = (data) => {
    console.log(data);
    // handleSubmit("");
  };
    

  return (
    <div className="contactPage">
      <div>
         <h3>Welcome!  Submit Question / Request </h3>
      </div>
      <br />

      <div>
      <form onSubmit={handleSubmit(onSubmit)}>
       {/* The onSubmit function is paaed to the handleSubmit function, and will be called when the form is submitted and will receive an object containing the values of each form field. */}
        <label>First and Last Name</label>
        <input
          type="name"
          {...register("name", { required: true })}
        />
        {errors.name && <p className="requiredField">First and Last Name required! </p>}
        <br />     <br />
        <label>E-mail</label>
        <input
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p className="requiredField">Email required! </p>}
        <br />     <br />

        <label> Question/Request </label>
        <input
          type="text"
          {...register("text", { required: true })}
        />
        {errors.text && <p className="requiredField">To better assist you please say something </p>}
        <br />   <br />

        <button type="submit" className="submitButton" > SUBMIT </button>
      </form>
      </div> 
      <br />   <br />

      <div className="contactLinks">
        <a href="https://calendly.com/amolinge17">
          <span>Setup an appointment via my calendy below  and connect via linkedIn and github </span>
          <div>Calendy</div>
        </a>
      </div>

      <div className="contactLinks" >
         <a href="https://www.linkedin.com/in/ann-likowo-molinge-39576473">
        <div>LinkedIn</div>
        </a>
       </div>

        
    <div className="contactLinks">
        <a href="https://github.com/Likowo?tab=repositories">
        <div>GitHub</div>
      </a> 
    </div>
    
    </div>
  );
}

export default Contact;
