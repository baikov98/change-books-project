import { RootState } from './../index';

// NAVIGATION
export const getList = (state: RootState) => state.menu.list;
export const getNavList = (state: RootState) => state.navbar.list;

// USER
export const getUser = (state: RootState) => state.user.currentUser;
export const getUserPersonalData = (state: RootState) => state.user.personalData;


//REGISTRATION 
export const getMainInput = (state: RootState) => state.regFields.main;
export const getAdressInput = (state: RootState) => state.regFields.adress;

// OFFERS LIST
export const getBookInfo = (state: RootState) => state.offersExchange.bookInfo;

// ACTIVE EXCHANGE
export const getActiveExchange = (state: RootState) => state.activeExchange.list;


export const getBookCategories = (state: RootState) => {
  return state.bookCategories.main;
};

export const getBookInput = (state: RootState) => {
  return state.bookInfoFields.main
}

export const getRequestData = (state: RootState) => {
  return state.requestData.data;
};

export const getStartExchangeState = (state: RootState) => {
  return state.startExchange
}

export const getRequestExchangeBooks = (state: RootState) => {
  return state.requestExchangeBooks.data
}

export const requestWishBooks = (state: RootState) => {
  return state.requestWishBooks.data
}