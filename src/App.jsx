// Pages
import { Home } from './js/pages/home/Home';
// Cmps
import { AppHeader } from './js/cmps/AppHeader';
import { AppFooter } from './js/cmps/AppFooter';

export function App() {


  return (
    <>
      <AppHeader />
      <Home />
      <AppFooter />
    </>
  )
}