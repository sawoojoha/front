import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home';
import Login from './login/Login';
import Join from './login/Join';
import { RecoilRoot } from 'recoil';
import Studio from './studio/Studio';
import AuthRoutes from './auth/AuthRoutes';
import VideoDetail from './watch/VideoDetail';
import Appp from './watch/Appp';


function App() {
  return (

<BrowserRouter>
<RecoilRoot>
<Routes>
<Route path='watch' element={< VideoDetail/>} />
<Route path='asdf' element={<Appp />}/>
<Route path='/' element={< Home />} />
<Route path="/login" element={< Login/>} />
<Route path ="/join" element={< Join/>} />
<Route element={<AuthRoutes />}>
<Route path='/studio/*' element={< Studio/>} />
</Route> 
</Routes>
</RecoilRoot>
</BrowserRouter>
  );
}

export default App;
