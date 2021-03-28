import { RootState } from './../index';

// NAVIGATION
export const getList = (state: RootState) => state.menu.list;
export const getNavList = (state: RootState) => state.navbar.list;
export const getLoginModal = (state: RootState) => state.menu.loginModal;

// USER
export const getUser = (state: RootState) => state.user.personalData;
export const getAuth = (state: RootState) => state.user.isAuth;
export const getUserError = (state: RootState) => state.user.error;


//REGISTRATION 
export const getMainInput = (state: RootState) => state.regFields.main;
export const getAdressInput = (state: RootState) => state.regFields.adress;

// OFFERS LIST
export const getBookInfo = (state: RootState) => state.offersExchange.bookInfo;

// ACTIVE EXCHANGE
export const getActiveExchange = (state: RootState) => state.activeExchange.list;
export const getArchiveExchange = (state: RootState) => state.activeExchange.archive;

export const getMessages = (state: RootState) => state.messages.list;

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


// REVIEWS
export const getAuthorsList = (state: RootState) => state.reviews.authors 
export const getBooksByAuthor = (state: RootState) => state.reviews.books 
export const getReviewsByBook = (state: RootState) => state.reviews.reviewList 
export const getRiviewsError = (state: RootState) => state.reviews.error;