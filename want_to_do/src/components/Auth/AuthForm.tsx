import React from "react";
import useAuthForm from "./hooks/useAuthForm";

export interface AuthFormProps {
  submitLabel: string;
  handleSubmit: (email: string, password: string) => void;
  cancelLabel: string;
  handleCancel: () => void;
}

const AuthForm = (props: AuthFormProps) => {
  const {
    handleEmailInput,
    handlePasswordInput,
    handleSubmit,
    handleCancel,
  } = useAuthForm(props.handleSubmit, props.handleCancel);

  return (
    <div className={`flex flex-col content-center justify-center gap-2`}>
      <h1>Want-To-Do</h1>
      <span className={`text-xl mb-4`}>{props.submitLabel}</span>
      <span>아이디</span>
      <input className={`bg-neutral-100`}
             type="text"
             onChange={handleEmailInput}
      />
      <span>비밀번호</span>
      <input className={`bg-neutral-100`}
             type="password"
             onChange={handlePasswordInput}
      />
      <button onClick={handleSubmit}>
        {props.submitLabel}
      </button>
      <button onClick={handleCancel}>
        {props.cancelLabel}
      </button>
    </div>
  )

}

export default AuthForm;