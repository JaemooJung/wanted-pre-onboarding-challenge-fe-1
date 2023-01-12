import {useNavigate} from "react-router-dom";

const useToIntroPage = () => {
  const navigate = useNavigate();

  return () => {
    navigate('/');
  }
}

export default useToIntroPage;