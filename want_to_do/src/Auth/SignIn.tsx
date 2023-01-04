import {useState} from "react";
import {useNavigate} from "react-router-dom";

const SignIn = () => {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className={`flex flex-col content-center justify-center gap-2`}>
      <h1>Want-To-Do</h1>
      <span className={`text-xl mb-4`}>로그인</span>
      <span>아이디</span>
      <input className={`bg-neutral-100`}
             type="text"
             value={id}
             onChange={(e) => setId(e.target.value)}
      />
      <span>비밀번호</span>
      <input className={`bg-neutral-100`}
             type="password"
             onChange={(e) => setPassword(e.target.value)}
      />
      <button>로그인</button>
      <button onClick={() => {navigate("/")}}>홈으로</button>
    </div>
  )
}

export default SignIn