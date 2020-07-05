import React from "react";
import WithRouterSample from "./WithRouterSample";

const data = {
  hertune: {
    name: "양윤기",
    desc: "R을 좋아하는 개발자",
  },
  velopert: {
    name: "김민준",
    desc: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    desc: "고전 소설 홍길동전의 주인공",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>There is not user</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.desc}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
