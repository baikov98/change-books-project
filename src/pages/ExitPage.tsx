import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Main from "../components/organisms/Main";

const ExitPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  dispatch.user.logout();
  history.push("/");
  return <Main />;
};

export default ExitPage;
