import React, { InputHTMLAttributes, FC } from "react"
import { MenssageErrorInputForm } from "./style"
import {
    RegisterOptions,
    DeepMap,
    FieldError,
    UseFormRegister,
    Path,
  } from 'react-hook-form';




  interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    error?: string;
    register?: any;
    wrapperClass?: string;
    className?: string;
  }


 type FormInputProps<TFormValues> = {
    name: Path<TFormValues>;
    rules?: RegisterOptions;
    register?: UseFormRegister<InputProps>;
    errors?: DeepMap<TFormValues, FieldError>;
  } & Omit<InputProps, 'name'>;




export const FormInput: FC<InputProps> = ({
   
    id, 
    register,
    label, 
    error,
    name,   
    ...props 
}): JSX.Element => {

 
    
    return (
        <>
        {label && <label htmlFor={id}>{label}</label>}

            <input
               // ref={register}                
                id={id}
                ref={register}
                {...(register && register(name))}
                {...props}
            />

        {error && <MenssageErrorInputForm> {error} </MenssageErrorInputForm>}
        </>
    );
}

