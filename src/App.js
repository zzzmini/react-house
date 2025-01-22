import "./App.css";
import { useState } from "react";
import roomsData from "./data/oneroom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import MainPage from "./pages/MainPage"
import SignUp from "./pages/Signup";
import Main from "./pages/Main";

function App(){
  const [menu, setMenu] = useState(["Home", "Shop", "About"]);
  const [roomsInfo, setRoomsInfo] = useState(roomsData);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{
              navigate("/main")
            }}>
              Main
            </Nav.Link>
            <Nav.Link onClick={()=>{
              navigate("/login")
            }}>
              로그인
            </Nav.Link>
            <Nav.Link onClick={()=>{
              navigate("/signup")
            }}>
              회원가입
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* 라우터 처리 */}
      <Routes>
        <Route path="/main" element={<Main/>} />
        <Route index element={
          <div>
            <MainPage
              roomsInfo={roomsInfo}
              setRoomsInfo = {setRoomsInfo}
               />
          </div>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="*" element={
          <div>
            <h4>
              404. That’s an error.
            </h4>
            <p>
              The requested URL /fdjsalflsadjfldsa was not found on this server. That’s all we know.
            </p>
          </div>
        } />
      </Routes>
    </div>
  )
}
export default App;