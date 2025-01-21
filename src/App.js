import "./App.css";
import { useState } from "react";
import roomsData from "./data/oneroom";

function App() {
  const [menu, setMenu] = useState(["Home", "Shop", "About"]);

  const [roomsInfo, setRoomsInfo] = useState(roomsData);

  let [showModal, setShowModal] = useState(false);

  const [bad, setBad] = useState([0, 0, 0]);

  const [currentIndex, setCurrentIndex] = useState(-1);

  return (
    <div className="App">
      <div className="menu">
        {menu.map((x) => {
          return <a href="#">{x}</a>;
        })}
      </div>

        <div>{showModal === true ? 
          <Modal 
            currentIndex={currentIndex}
            roomsInfo={roomsInfo}
            setShowModal={setShowModal}/> : null}</div>
      <div className="content">
        {roomsInfo.map((x, index) => {
          return (
            <div key={x.id}>
              <Room
                roomsInfo={roomsInfo}
                setBad={setBad}
                index={index}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Modal(props) {
  let room = props.roomsInfo[props.currentIndex];;
  return (
    <div className="black-bg">
      <div className="white-bg">
        <h4>{room.title}</h4>
        <p>{room.content}</p>
        <p>가격 : {room.price}</p>
        <button onClick={()=>{
          props.setShowModal(false);
        }}>닫기</button>
        <div className="modal-img">
          <img src={room.image} width='400px'></img>
        </div>
        
      </div>
    </div>
  );
}

const Room = (props) => {
  let rooms = props.roomsInfo;

  let i = props.index;
  let strPrice = rooms[i].price.toLocaleString('ko-KR');
  return (
    <div>
      <h4
        onClick={() => {
          // // 현재 선택한 인덱스를 스테이트에 저장
          props.setCurrentIndex(i);
          props.setShowModal(true);
        }}
      >
        {rooms[i].title}
      </h4>
      <p>
        {strPrice}만원
        <span>☎ 허위매물신고</span>
      </p>
      <div className="imgBox">
        <img src={rooms[i].image} className="room-img"></img>
      </div>
    </div>
  );
};

export default App;
