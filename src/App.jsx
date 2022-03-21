// React
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
// Cmps
import { AppHeader } from './components/AppHeader';
import { AppFooter } from './components/AppFooter';

export function App() {


  return (
    <>
      <AppHeader />
      <Routes>
        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
      </Routes>
      <AppFooter />
    </>
  )
}