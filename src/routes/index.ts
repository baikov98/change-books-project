const mainRoutes = {
    main: "/",
    start: "/start",
    userChange: "/userChange",
    feedback: "/feedback",
    signup: "/signUp",
    forgetPass: "/forgetPass"
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
    forgetPass: () => "/forgetPass",
  };
  
  export const links = { ...mainLinks };