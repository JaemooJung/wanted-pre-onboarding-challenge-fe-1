import {useNavigate} from "react-router-dom";
const Intro = () => {

  const navigate = useNavigate();

  const toSignIn = () => {
    navigate("/auth/sign-in");
  }

  const toSignUp = () => {
    navigate("/auth/sign-up");
  }

  return (
    <div className={`flex flex-col content-center justify-center gap-2`}>
      <h1>Want-To-Do</h1>
      <button onClick={toSignIn}>
        로그인
      </button>
      <button onClick={toSignUp}>
        회원가입
      </button>

    </div>
  )
}

export default Intro