import { Page1 } from './pages/page1';
import { Page2 } from './pages/page2';
import { PageTwoFive } from './pages/page2_5';
import { Page3 } from './pages/page3';
import { Page4 } from './pages/page4';
import { LatestNews } from './pages/latestnew';
import { PageContact } from './pages/pageContact';


function App() {
  return (
    <div>
      <Page1 />
      <Page2 />
      <PageTwoFive />
      <Page3 />
      <Page4 />
      <LatestNews />
      <PageContact />
      {/* Ajout du composant AuthForm */}
   
    </div>
  );
}

export default App;
