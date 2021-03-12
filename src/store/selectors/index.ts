import { RootState } from './../index';

export const getList = (state: RootState) => {
    return state.menu.list;
  };

export const getUser = (state: RootState) => {
    return state.user.currentUser;
};

export const getNavList = (state: RootState) => {
  return state.navbar.list;
};

export const getBookCategories = (state: RootState) => {
  return state.bookCategories.main;
};

export const getBookInput = (state: RootState) => {
  return state.bookInfoFields.main
}

export const getRequestData = (state: RootState) => {
  return state.requestData.data;
};

export const getMainInput = (state: RootState) => {
  return state.regFields.main
}

export const getAdressInput = (state: RootState) => {
  return state.regFields.adress
}

export const getStartExchangeState = (state: RootState) => {
  return state.startExchange
}