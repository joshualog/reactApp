// import React, { useState, useEffect } from "react";
// import React, { useReducer } from "react";
import React from "react";
import useInput from "./useInput";

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// }

const Info = () => {
  // const [state, dispatch] = useReducer(reducer, {
  //   name: "",
  //   nickname: "",
  // });
  // const { name, nickname } = state;

  // const onChange = (e) => {
  //   dispatch(e.target);
  // };

  // const [name, setName] = useState("");
  // const [nickname, setNickname] = useState("");

  // useEffect(() => {
  //   console.log("effect");
  //   console.log(name);
  //   return () => {
  //     console.log("cleanup");
  //     console.log(name);
  //   };
  // }, []);

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangeNickname = (e) => {
  //   setNickname(e.target.value);
  // };

  const [state, onChange] = useInput({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
        {/* <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} /> */}
      </div>

      <div>
        <div>
          <b>이름: </b> {name}
        </div>
      </div>

      <div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
