

import { Route, Routes, useRoutes } from 'react-router-dom'
import SidebarLayout from './layout/SidebarLayout'
import AssignCarrier from './pages/AssignCarrier'
import Stop from './pages/Stop'
import { LogisticsRoutes } from './routes'

function App() {
  const routes = useRoutes(LogisticsRoutes)
  return (
    <>
      {routes}
    </>
  )
}

export default App
