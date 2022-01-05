import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import "App.scss";
import { PasswordInput } from "components";
import { TextInput } from "components";
import { signInData } from "models/Authentication";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
//import {RootState} from "store";
//import {signIn, signInSocial} from "store/actions/authActions";
import { signInSchema } from "./ValidationSchema";
import { Link } from "react-router-dom";

interface SignInProps {}

export const SignIn: React.FC<SignInProps> = () => {
  const methods = useForm<signInData>({
    resolver: yupResolver(signInSchema),
  });
  const onSubmit = (data: signInData) => {
    //action(setLoading(true));
    //action(signIn(data));
    //action(setLoading(false));
  };

  return (
    <main className="auth">
      <div className="auth__header">
        <h1>Zaloguj się</h1>
        <p>Zaloguj się jedną z wybranych opcji</p>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="auth__form auth__form--sign-in"
        >
          <TextInput
            label="Email"
            name="email"
            placeholder="email@email.com"
            type="email"
            variant="outlined"
          />
          <PasswordInput label="Hasło" name="password" variant="outlined" />

          <Button type="submit" variant="contained">
            Zaloguj się
          </Button>
        </form>
        <div className="auth__footer">
          <p>Nie masz konta? </p>
          <Link to="/signup">Zarejestruj się</Link>
        </div>
      </FormProvider>
    </main>
  );
};
