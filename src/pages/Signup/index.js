import { useState, useRef, useEffect } from "react";
function SignUp() {

  const userName = useRef();
  const userAge = useRef();
  const [user, setUser] = useState({});

  function save(e){
    e.preventDefault();

    console.log('userName.current.value : ' , userName.current.value)
    console.log('userAge.current.value : ' , userAge.current.value)

    // users 배열에 추가할 user 객체
    const newUser = {
      userName : userName.current.value,
      userAge : userAge.current.value
    }

    setUser(newUser);
    console.log('user : ' , user);

  }

  return (
    <div>
      <h1>사용자를 입력하세요!</h1>
      <div>
        {/* <input type="text" name="userName" onChange={handleOnChange} />
        <input type="text" name="userAge" onChange={handleOnChange} /> */}
        <input type="text" ref={userName} />
        <input type="text" ref={userAge} />
      </div>
      <button onClick={save}>저장</button>
      <p>{user.userName} 님 {user.userAge}</p>
    </div>

  );
}
export default SignUp;
