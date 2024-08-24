import './App.css';
import './lib/fontawesome-free-6.6.0-web/css/all.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched'
import Add from './components/Add';
import { GlobalProvider } from './context/GlobalState';
import PopulerFilms from './components/PopulerFilms';
function App() {
  return (
<GlobalProvider>
<Router>  
<Header />
<Routes>
<Route path="/" element={<PopulerFilms />} />
<Route path="/add" element={<Add />} />
<Route path="/watched" element={<Watched />} />
<Route path="/Watchlist" element={<Watchlist />} />
</Routes>
   </Router>

</GlobalProvider>

 


  );
}

export default App;
