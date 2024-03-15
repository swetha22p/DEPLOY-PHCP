import React, { useEffect, useRef } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Data from './components/Data/Data';
import Details from './components/Data/Details/Details';
import Overview from './components/Data/Overview/Overview';
import Assistants from './components/Groups/Assistants/Assistants';
import Groups from './components/Groups/Groups';
import MedicalAssistants from './components/Groups/MedicalAssistants/MedicalAssistants';
import Account from './components/Home/Account/Account';
import Dashboard from './components/Home/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Loader from './components/Loader/Loader';
import Login from './components/Login/Login';
import DrivesForms from './components/Tools/DrivesForms/DrivesForms';
import ScreeningApis from './components/Tools/ScreeningApis/ScreeningApis';
import Tools from './components/Tools/Tools';
import MainLayout from './pages/MainLayout';

import { Toast } from 'primereact/toast';
import { useDispatch, useSelector } from 'react-redux';
import { resetToast } from './store/features/toast/toastSlice';
        

function App() {

  const toastState = useSelector(state => state.toast);
  const toastRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if(toastState.showToast)
      toastRef.current.show({ 
        severity: toastState.toastType, 
        summary: String(toastState.toastType).toUpperCase(), 
        detail: toastState.toastMessage });
  }, [toastState]);

  return (
    <>
      <Loader />
      <Toast ref={toastRef} onShow={()=>dispatch(resetToast())} life={500} />
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='' element={<MainLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path='home' element={<Home />}>
            <Route index element={<Navigate to="account" replace />} />
            <Route path='account' element={<Account />} />
            <Route path='dashboard' element={<Dashboard />} />
          </Route>
          <Route path='groups' element={<Groups />}>
            <Route index element={<Navigate to="assistants" replace />} />
            <Route path='assistants' element={<Assistants />} />
            <Route path='medical-assistants' element={<MedicalAssistants />} />
          </Route>
          <Route path='data' element={<Data />}>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path='overview' element={<Overview />} />
            <Route path='details' element={<Details />} />
          </Route>
          <Route path='tools' element={<Tools />}>
            <Route index element={<Navigate to="drives-forms" replace />} />
            <Route path='drives-forms' element={<DrivesForms />} />
            <Route path='screening-apis' element={<ScreeningApis />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
