import { activeExchange } from './../models/activeExchange';
import { RootState } from './../index';

export const getList = (state: RootState) => state.menu.list;

export const getUser = (state: RootState) => state.user.currentUser;

export const getNavList = (state: RootState) => state.navbar.list;

// OFFERS
export const getFullOffersExchange = (state: RootState) => state.offersExchange.full;
export const getPartOffersExchange = (state: RootState) => state.offersExchange.part;
export const getOtherOffersExchange = (state: RootState) => state.offersExchange.other;
export const getBookInfo = (state: RootState) => state.offersExchange.bookInfo;

// ACTIVE EXCHANGE
export const getActiveExchange = (state: RootState) => state.activeExchange.list;
