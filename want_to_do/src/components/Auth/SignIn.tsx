import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSignInUser} from "../../hooks/user";

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { mutate } = useSignInUser();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSignIn = () => {
    mutate({email, password});
  }

  return (
    <div className={`flex flex-col content-center justify-center gap-2`}>
      <h1>Want-To-Do</h1>
      <span className={`text-xl mb-4`}>로그인</span>
      <span>아이디</span>
      <input className={`bg-neutral-100`}
             type="text"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
      />
      <span>비밀번호</span>
      <input className={`bg-neutral-100`}
             type="password"
             onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>로그인</button>
      <button onClick={() => {navigate("/")}}>홈으로</button>
    </div>
  )
}

export default SignIn