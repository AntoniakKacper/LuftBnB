import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import "App.scss";
import { PasswordInput, TextInput } from "components";
import { signUpData } from "models/Authentication";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
//import { signUp } from "store/actions/authActions";
import { Link } from "react-router-dom";
import { signUpSchema } from "./ValidationSchema";

interface SignUpProps {
}

export const SignUp: React.FC<SignUpProps> = () => {
  //const action = useDispatch();
  const methods = useForm<signUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data: signUpData) => {
    //action(signUp(data));
  };
  return (
    <main className="auth">
      <div className="auth__header">
        <h1>Zaloguj się</h1>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="auth__form auth__form--sign-up"
        >
          <TextInput
            label="Imię"
            name="firstName"
            placeholder="Imię"
            type="text"
            variant="outlined"
          />
          <TextInput
            label="Nazwisko"
            name="lastName"
            placeholder="Nazwisko"
            type="text"
            variant="outlined"
          />
          <TextInput
            label="Email"
            name="email"
            placeholder="email@email.com"
            type="email"
            variant="outlined"
          />
          <PasswordInput label="Password" name="password" variant="outlined"/>
          <PasswordInput
            label="Confirm Password"
            name="password_confirmation"
            variant="outlined"
          />
          <Button type="submit" variant="contained">
            Zarejestruj się
          </Button>
        </form>
      </FormProvider>

      <span className="auth__footer">
        <p>Masz już konto? </p>
        <Link to="/signin" className="sign-in__footer__link">
          Zaloguj się
        </Link>
      </span>
    </main>
  );
};
