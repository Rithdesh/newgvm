import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ViewDetails from './Components/ViewDetails';
import PasswordList from './Components/PasswordList';
import PasswordGenerator from './Components/Pwd';
import Login from './Components/Login';
import Vault from './Components/Vault';
import Adddetails from './Components/Adddetails';
import UserEntry from './Components/UserEntry';
import Update from './Components/Update';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pwd/:uid" element={<PasswordGenerator />} />
        <Route path="/pwd/get-all/:uid" element={<Vault />} />
        {/* <Route path="/password/:id" element={<ViewDetails />} /> */}
        {/* <Route path="/password" element={<PasswordList />} /> */}
        {/* <Route path='/pwd/get-all/' Component={PasswordList} /> */}
        <Route path='/pwd/get-details/:title/:uid' Component={ViewDetails} />
        <Route path='/add/:uid' Component={Adddetails} />
        <Route path = '/adduser'Component={UserEntry}/>
        <Route path='/pwd/update/:id/:uid' Component={Update}/>
        <Route path='/signup' Component={UserEntry}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;