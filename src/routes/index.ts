const mainRoutes = {
    main: "/",
    start: "/start",
    userChange: "/userChange",
    feedback: "/feedback",
    signup: "/signUp"
  };
  
  const authRoutes = {
  };
  
  export const routes = { ...mainRoutes, ...authRoutes };
  
  const mainLinks = {
    main: () => "/",
    start: () => "/start",
    userChange: () => "/userChange",
    feedback: () => "/feedback",
    signup: () => "/signUp",
  };
  
  export const links = { ...mainLinks };