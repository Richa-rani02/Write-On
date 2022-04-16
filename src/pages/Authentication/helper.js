export const initialFormValues = {
    email: "",
    password: "",
    firstname:"",
    lastname:"",
  };

  export const testLogin = {
    email: "test@gmail.com",
    password: "Test123@",
  };

  export const validateInput=(values)=>{
    const errors = {};

    const PASS_REGEX =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
    const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

    if (!values.firstname) {
        errors.firstname = "Full name is required!";
      }
    if(!values.email){
      errors.email = "Email is required!!";
    }else if (!EMAIL_REGEX.test(values.email)) {
      errors.email = "Enter a valid emailId!!";
    }

    if (!values.password) {
      errors.password = "Password is required!!";
    }else if (!PASS_REGEX.test(values.password.trim())) {
      errors.password =
        "Password should be 6-10 characters and include at least 1 letter, 1 number and 1 special character!";
    }

    return errors;
  }