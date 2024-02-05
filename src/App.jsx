import { Fragment } from 'react';
import './App.css';
import LeftNav from './components/LeftNav';
import { Account } from './pages/account';
import { Billing } from './pages/billing';
import { ConnectedDevices } from './pages/connected-devices';
import { Pricing } from './pages/pricing';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <div className="cop-main-wrapper flex flex-wrap relative overflow-hidden">
        <LeftNav />
        <div className="right min-h-screen flex-1 pl-72">
          <Routes>
            <Route exact path="/" element={<Account />} />
            <Route
              exact
              path="/connected-devices"
              element={<ConnectedDevices />}
            />
            <Route exact path="/billing" element={<Billing />} />
            <Route exact path="/pricing" element={<Pricing />} />
          </Routes>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
