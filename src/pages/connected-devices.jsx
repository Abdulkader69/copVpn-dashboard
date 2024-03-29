import ConnectedDevices from '../components/ConnectedDevices';

export const ConnectedDevicesPage = () => {
  return (
    <>
      <div className="page-wrapper bg-[#F8F9FB] h-full">
        <div className="page-content-wrapper p-8">
          <div className="head text-[#202A36] mb-10 relative pb-6 pt-4">
            <h2 className="text-5xl font-bold leading-snug mb-2">
              Stay Safe, Stay Connected
            </h2>
            <p className="text-xl">
              CopVPN's Unlimited Devices Subscription Ensures Security Across
              the Board!
            </p>
            <div className="line w-full h-0.5 bg-[#202A36]/10 absolute bottom-0 left-0"></div>
          </div>
          <div className="content-wrapper">
            <ConnectedDevices />
          </div>
        </div>
      </div>
    </>
  );
};
