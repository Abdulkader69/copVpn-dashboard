import { Tab } from '@headlessui/react';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
import { NavLink } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
const LoginPage = () => {
  return (
    <div className="page-wrapper bg-[#F8F9FB] h-full">
      <div className="page-content-wrapper h-full">
        <div className="w-full h-full max-w-3xl mx-auto bg-white pt-32">
          <div className="w-full max-w-[480px] mx-auto h-full">
            <div className="logo pb-10">
              <NavLink to="/">
                <img
                  className="w-full max-w-40 mx-auto"
                  src="https://copvpn.com/wp-content/uploads/2023/10/logo.svg"
                  alt="logo"
                />
              </NavLink>
            </div>
            <Tab.Group>
              <Tab.List className="bg-white mb-5 flex">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'w-1/2 overflow-hidden outline-none h-[76px] flex items-center justify-center text-[#202A36] font-medium text-lg border-b-[3px]',
                      selected ? 'border-[#1e5178]' : 'opacity-60'
                    )
                  }
                >
                  Sign In
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'w-1/2 overflow-hidden outline-none h-[76px] flex items-center justify-center text-[#202A36] font-medium text-lg border-b-[3px]',
                      selected ? 'border-[#1e5178]' : 'opacity-60'
                    )
                  }
                >
                  Sign Up
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <LoginForm />
                </Tab.Panel>
                <Tab.Panel>{/* <SignUpForm /> */} Sign up Form</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
