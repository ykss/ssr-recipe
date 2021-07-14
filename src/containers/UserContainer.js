import React from "react";
import User from "../components/User";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../modules/users";
import { Preloader } from "../lib/PreloadContext";

const { useEffect } = React;

const UserContainer = ({ id }) => {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  // 컴포넌트 마운트될 때 호출
  useEffect(() => {
    if (user && user.id === parseInt(id, 10)) return; // users가 이미 유효하다면 요청하지 않음
    dispatch(getUser(id));
  }, [dispatch, id, user]);
  if (!user) {
    return <Preloader resolve={() => dispatch(getUser(id))} />;
  }

  return <User user={user} />;
};

export default UserContainer;
