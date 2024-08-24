import './App.css';
import './lib/fontawesome-free-6.6.0-web/css/all.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched'
import Add from './components/Add';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
<GlobalProvider>
<Router>  
<Header />
<Routes>
<Route path="/" element={<Watchlist />} />
<Route path="/watched" element={<Watched />} />
<Route path="/Add" element={<Add />} />
</Routes>
   </Router>

</GlobalProvider>

 


  );
}

export default App;
