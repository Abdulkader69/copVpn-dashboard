import AppleIcon from '../assets/Icons/AppleIcon';
import GoogleIcon from '../assets/Icons/GoogleIcon';
import DownloadApp from '../components/DownloadApp';
import StatusProfile from '../components/StatusProfile';

export const Account = () => {
  return (
    <>
      <div className="page-wrapper bg-[#F8F9FB] h-full">
        <div className="top-bar h-[86px] bg-white flex items-center font-bold text-lg text-[#202A36] px-8">
          My Account
        </div>
        <div className="page-content-wrapper p-8 flex relative pr-[22.5rem]">
          <div className="inner flex-1">
            <div className="head text-[#202A36] mb-8">
              <h2 className="text-5xl font-bold leading-snug mb-2">Welcome!</h2>
              <p className="text-xl">
                Lorem Ipsum Der manga sir de lante quastes
              </p>
            </div>
            <div className="offer-pass flex">
              <div className="offer-wrapper flex-1 mr-6">
                <div className="text-white flex flex-wrap md:flex-nowrap gap-5 justify-between py-10 px-10 rounded-2xl bg-gradient-to-r from-0% from-[#4bb6c2] to-[#1e5178]">
                  <div className="flex-initial w-full md:w-2/3 text-center md:text-left">
                    <h2 className="text-2xl sm:text-4xl !leading-snug">
                      Exclusive 45-day <br />
                      <strong>Money-Back Guarantee</strong>
                    </h2>
                    <p className="mt-5 text-lg">
                      If you are unsatisfied with our service, contact us within
                      30 days.
                    </p>
                  </div>
                  <div className="flex-initial w-full md:w-1/3 text-center md:text-right">
                    <div className="cop-button">
                      <a
                        className="py-3 pl-5 sm:pl-10 pr-16 sm:pr-20 inline-block rounded-full relative text-[#202A36] text-lg font-semibold transition-all duration-300 bg-white hover:text-white hover:bg-gradient-to-l hover:from-0% hover:from-Primary hover:to-Secondary shadow-Secondary/10 shadow-xl"
                        href="/pricing/"
                        target="_self"
                      >
                        Get CopVPN
                      </a>
                    </div>
                    <div className="image-wrapper mt-5 sm:mt-8 lg:mt-16 prose-img:w-52 lg:prose-img:w-[22rem]"></div>
                  </div>
                </div>
              </div>
              <div className="pass-change w-[345px] h-full bg-white rounded-2xl shadow-md min-h-60"></div>
            </div>
            <div className="connected-accounts w-full bg-white rounded-2xl shadow-md min-h-40 overflow-hidden mt-10">
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
            <div className="connected-accounts w-full bg-white rounded-2xl shadow-md min-h-40 overflow-hidden mt-10">
              <div className="head px-7 py-4 w-full border-b border-solid border-[bg-[#202A360D]]">
                Downloads
              </div>
              <div className="wrapper px-5 py-4">
                <DownloadApp />
              </div>
            </div>
          </div>
          <div className="status-profile fixed top-0 right-0 bg-white px-5 pb-10 flex items-center justify-center w-80 h-screen">
            <StatusProfile />
          </div>
        </div>
      </div>
    </>
  );
};
