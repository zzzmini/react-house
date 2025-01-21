const Room = (props) => {
  let rooms = props.roomsInfo;

  let i = props.index;
  let price = rooms[i].price;
  let strPrice = price.toLocaleString("ko-KR");
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
export default Room;