import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  }

  return (
    <div>
      <h1>Home</h1>
      <span> current token : {accessToken}</span>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  )
}

export default Home