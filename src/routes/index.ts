const mainRoutes = {
    main: "/",
    start: "/start",
    userChange: "/userChange",
    feedback: "/feedback",
  };
  
  const authRoutes = {
  };
  
  export const routes = { ...mainRoutes, ...authRoutes };
  
  const mainLinks = {
    main: () => "/",
    start: () => "/start",
    userChange: () => "/userChange",
    feedback: () => "/feedback",
  };
  
  export const links = { ...mainLinks };