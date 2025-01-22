import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "../Signup";
function Main(){
  let navigate = useNavigate;
  return (
    <div>
      
      <button onClick={()=>{
        navigate('/signup')
      }}>회원가입</button>
      
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  )
}
export default Main;