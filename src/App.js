import './App.scss';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Messenger } from './pages/Messenger/Messenger';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <Home /> */}
        <Messenger />
      </main>
    </div>
  );
}

export default App;
