

import { useLocation, useRoutes } from 'react-router-dom'
import { ROUTES } from './routes'
import { useEffect } from 'react';

function App() {
  const routes = useRoutes(ROUTES);
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      {routes}
    </>
  )
}

export default App
