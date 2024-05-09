import ReactDOM from 'react-dom/client';
import App from './App';
import LoginPage from './pages/loginPage';
import Header from './components/Header/header';
import RegisterEditUser from './pages/RegisterEditUser';
import AdmPanel from './pages/AdmPanel';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <div>
      <Header />
      <RegisterEditUser />
    </div>
);
