const mainRoutes = {
    main: "/",
    start: "/start",
    userChange: "/userChange",
    feedback: "/feedback",
    forgetPass: "/forgetPass",
    offer: "/userChange/offer",
    giveaway: "/userChange/giveaway",
    recieve: "/userChange/recieve",
    active: "/userChange/active",
    personal: "/userChange/personal",
    messages: "/userChange/messages",
    ask: "/userChange/ask",
    archive: "/userChange/archive",
    review: "/userChange/review",
    exit: "/userChange/exit",
  };
  
  const authRoutes = {
    signup: "/signUp",
  };
  
  export const routes = { ...mainRoutes, ...authRoutes };
