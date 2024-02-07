import { NavLink } from 'react-router-dom';
import ProfileIcon from '../assets/Icons/ProfileIcon';
import DevicesIcon from '../assets/Icons/DevicesIcon';
import PriceIcon from '../assets/Icons/PriceIcon';
import BillingIcon from '../assets/Icons/BillingIcon';
import Head from '../assets/Icons/Head';
import LogoutIcon from '../assets/Icons/LogoutIcon';

const menus = [
  {
    title: 'My Account',
    slug: '/',
    icon: <ProfileIcon />,
  },
  {
    title: 'Connected Devices',
    slug: '/connected-devices',
    icon: <DevicesIcon />,
  },
  {
    title: 'Pricing',
    slug: '/pricing',
    icon: <PriceIcon />,
  },
  {
    title: 'Billing',
    slug: '/billing',
    icon: <BillingIcon />,
  },
];

const LeftNav = () => {
  return (
    <>
      <div className="left fixed left-0 top-0 min-h-screen border-r-2 border-solid border-[#202a360d] w-72">
        <div className="top">
          <div className="logo p-8">
            <img
              className="w-full max-w-40"
              src="https://copvpn.com/wp-content/uploads/2023/10/logo.svg"
              alt="logo"
            />
          </div>
          <div className="menu-wrapper">
            <div className="menu-items px-1">
              {menus.map((menu, index) => (
                <NavLink
                  to={menu.slug}
                  key={index}
                  className={({ isActive }) =>
                    isActive
                      ? 'active h-[60px] flex items-center border-l-4 border-solid border-[#1B97A4] bg-[#F8F9FB] font-semibold text-[#1C899B]'
                      : 'h-[60px] flex items-center border-l-4 border-solid border-transparent text-[#202A36]'
                  }
                >
                  <p className="m-0 flex items-center px-8 gap-6">
                    <span className="w-5 text-center">{menu.icon}</span>
                    <span>{menu.title}</span>
                  </p>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="profile-left p-5 absolute bottom-0 w-full">
          <div className="line bg-[#202A36] w-full h-0.5 opacity-5 mb-7"></div>
          <div className="wrapper pb-2 text-center">
            <div className="head-pic mx-auto bg-gradient-to-r from-0% from-[#4bb6c2] to-[#1e5178] w-16 h-16 rounded-full overflow-hidden flex items-end justify-center">
              <Head />
            </div>
            <h3 className="mt-6 font-medium text-lg text-[#202A36]">
              Example@gmail.com
            </h3>
            <button className="mt-5 h-[43px] w-full rounded-[5px] bg-[#F8F9FB] text-base flex items-center justify-center gap-2">
              <LogoutIcon /> Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftNav;
