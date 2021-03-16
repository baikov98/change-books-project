const mainRoutes = {
    main: "/",
    start: "/start",
    accessEmail: "/access",
    politics: "/politics",
    userChange: "/userChange",
    feedback: "/feedback",
    forgetPass: "/forgetPass",
    offer: "/userChange/offer",
    giveaway: "/userChange/giveaway",
    recieve: "/userChange/recieve",
    active: "/userChange/active",
    personal: "/userChange/personal",
    messages: "/userChange/messages",
    archive: "/userChange/archive",
    review: "/userChange/review",
    exit: "/userChange/exit",
    exchangeCard: "/userChange/offer/:offer",
    activeCard: "/userChange/active/:card"
  };
  
  const authRoutes = {
    signup: "/signUp",
  };
  
  export const routes = { ...mainRoutes, ...authRoutes };

  export const links = {
    main: "/",
    exchangeCard: (offer: string) => `/userChange/offer/${offer}`,
    activeCard: (card: string) => `/userChange/active/${card}`,
  };
 