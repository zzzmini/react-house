import { useState } from "react";
import "./MainPage.css";
import Modal from "./Modal";
import Room from "./Room"

function MainPage(props) {
  let roomsInfo = props.roomsInfo;
  let setRoomsInfo = props.setRoomsInfo;
  let [origin, setOrigin] = useState(props.setOrigin);

  let [showModal, setShowModal] = useState(false);
  let [isFirst, setIsFirst] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(-1);


  function originalData() {
    if (isFirst) {
      setOrigin([...roomsInfo]);
      setIsFirst(false);
    } else {
      setRoomsInfo([...origin]);
    }
  }
  function priceAscSort() {
    setOrigin([...roomsInfo]);
    roomsInfo.sort((a, b) => {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      else return 0;
    });
  }

  function priceDescSort() {
    setOrigin([...roomsInfo]);
    roomsInfo.sort((a, b) => {
      if (a.price < b.price) return 1;
      if (a.price > b.price) return -1;
      else return 0;
    });
  }

  function titleAscSort() {
    setOrigin([...roomsInfo]);
    roomsInfo.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      else return 0;
    });
  }

  function titleDescSort() {
    setOrigin([...roomsInfo]);
    roomsInfo.sort((a, b) => {
      if (a.title < b.title) return 1;
      if (a.title > b.title) return -1;
      else return 0;
    });
  }
  return (
    <div className="MainPage">
      <div className="sortMenu">
        <span
          onClick={() => {
            originalData();
          }}
        >
          처음처럼
        </span>{" "}
        가격
        <span
          onClick={() => {
            priceAscSort();
          }}
        >
          ▲
        </span>
        <span
          onClick={() => {
            priceDescSort();
          }}
        >
          ▼
        </span>
        물건명
        <span
          onClick={() => {
            titleAscSort();
          }}
        >
          ▲
        </span>
        <span
          onClick={() => {
            titleDescSort();
          }}
        >
          ▼
        </span>
      </div>
      <div>
        {showModal === true ? (
          <Modal
            currentIndex={currentIndex}
            roomsInfo={roomsInfo}
            setShowModal={setShowModal}
          />
        ) : null}
      </div>
      <div className="content">
        {roomsInfo.map((x, index) => {
          return (
            <div key={x.id}>
              <Room
                roomsInfo={roomsInfo}
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

export default MainPage;
