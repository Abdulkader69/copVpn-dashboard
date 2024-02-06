import ConnectedAccounts from '../components/ConnectedAccounts';
import DownloadApp from '../components/DownloadApp';
import GetCopVpn from '../components/GetCopVpn';
import Password from '../components/Password';
import StatusProfile from '../components/StatusProfile';

export const Account = () => {
  return (
    <>
      <div className="page-wrapper bg-[#F8F9FB] h-full">
        <div className="page-content-wrapper p-8 flex relative">
          <div className="inner flex-1">
            <div className="head text-[#202A36] mb-10 relative pb-6 pt-4">
              <h2 className="text-5xl font-bold leading-snug mb-2">
                Welcome to CopVPN!
              </h2>
              <p className="text-xl">Your Passport to Online Freedom!</p>
              <div className="line w-full h-0.5 bg-[#202A36]/10 absolute bottom-0 left-0"></div>
            </div>
            <div className="offer-and-profile flex">
              <StatusProfile />
              <GetCopVpn />
            </div>
            <div className="pass-and-connected-accounts flex mt-10">
              <Password />
              <ConnectedAccounts />
            </div>
            <div className="downloads-app w-full bg-white rounded-2xl shadow-md min-h-40 overflow-hidden mt-10">
              <div className="head px-7 py-4 w-full border-b border-solid border-[bg-[#202A360D]]">
                Downloads
              </div>
              <div className="wrapper px-5 py-4">
                <DownloadApp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
