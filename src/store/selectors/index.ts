import { RootState } from './../index';

export const getList = (state: RootState) => {
    return state.menu.list;
  };

export const getUser = (state: RootState) => {
    return state.user.currentUser;
  };