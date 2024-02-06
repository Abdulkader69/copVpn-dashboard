import AppleIcon from '../assets/Icons/AppleIcon';
import GoogleIcon from '../assets/Icons/GoogleIcon';

const ConnectedAccounts = () => {
  return (
    <>
      <div className="connected-accounts flex-1 ml-8 h-auto w-full bg-white rounded-2xl shadow-md min-h-40 overflow-hidden">
        <div className="head px-7 py-4 w-full border-b border-solid border-[bg-[#202A360D]]">
          Connected accounts
        </div>
        <div className="wrapper px-7">
          <div className="item flex items-center py-4 border-b border-solid border-#202A360D] text-[#202A36]">
            <div className="name w-1/5 flex items-center gap-8">
              <GoogleIcon />
              <span className="opacity-50">Google</span>
            </div>
            <div className="connected-or-not flex-1">
              <span className="opacity-50">Not Connected</span>
            </div>
            <div className="right w-1/5 flex justify-end items-center">
              <a
                href="#"
                className="border-2 border-solid border-[#4bb6c2] py-2 inline-block px-6 rounded-full text-[#1e5178] font-medium"
              >
                + Connect
              </a>
            </div>
          </div>
          <div className="item flex items-center py-4 border-b border-solid border-#202A360D] text-[#202A36]">
            <div className="name w-1/5 flex items-center gap-8">
              <AppleIcon />
              <span className="opacity-50">Apple</span>
            </div>
            <div className="connected-or-not flex-1">
              <span className="opacity-50">Connected</span>
            </div>
            <div className="right w-1/5 flex justify-end items-center">
              <a
                href="#"
                className="border-2 border-solid border-[#4bb6c2] py-2 inline-block px-6 rounded-full text-[#1e5178] font-medium"
              >
                + Disconnect
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectedAccounts;
