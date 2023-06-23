
import './App.css';
import { Navbar } from './components/Navbar';
import VoiceInput from './components/VoiceInput';
import { MainRoutes } from './page/MainRoutes';

function App() {
  return (
    <div>
     <Navbar/>
      <MainRoutes/>
    <VoiceInput />
    </div>
  );
}

export default App;
