import React from 'react';
import './App.scss';
import Menu from './components/Menu/Menu';
import AppRoutes from './components/AppRoutes';
import Footer from './components/footer/Footer';
import {ToastContainer} from 'react-toastify';


const App = () => (
  <>
    <Menu/>
    <div className="container" style={{minHeight: 'calc(100vh - (129px + 6rem))'}}>
      <AppRoutes/>
    </div>
    <Footer/>
    <ToastContainer
      position="bottom-center"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={'colored'}
    />
  </>
);

export default App;
