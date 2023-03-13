import './App.css';
import Users from './Components/Users';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import FrontPage from './Components/Frontpage';
//import FrontPage from './Components/Upload';
import Education from './Components/Education';
import Workexperience from './Components/Workexperience';
import Cvupload from './Components/Cvupload';
import SuccessMessage from './Components/Success';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/CVform' element={<FrontPage/>}/>
          <Route path='/' element={<Users/>}/>
          <Route path='/Education' element={<Education/>}/>
          <Route path='/Workexperience' element={<Workexperience/>}/>
          <Route path='/Cvupload' element={<Cvupload/>}/>
          <Route path='/Success' element={<SuccessMessage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
