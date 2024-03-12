import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ViewDetails from './Components/ViewDetails';
import PasswordList from './Components/PasswordList';
import PasswordGenerator from './Components/Pwd';
import Login from './Components/Login';
import Vault from './Components/Vault';
import AddDetails from './Components/Adddetails';
import UserEntry from './Components/UserEntry';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pwd" element={<PasswordGenerator />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/password/:id" element={<ViewDetails />} />
        <Route path="/password" element={<PasswordList search={''} />} />
        <Route path='/pwd/get-all'  Component={PasswordList} />
        <Route path='/pwd/get-all/:title' Component={ViewDetails} />
        <Route path='/add' Component={AddDetails} />
        <Route path = '/adduser'Component={UserEntry}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
