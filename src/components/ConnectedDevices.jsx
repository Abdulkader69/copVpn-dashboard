import ChromeIcon from '../assets/Icons/ChromeIcon';
import AndroidIcon from '../assets/Icons/AndroidIcon';

const devices = [
  {
    title: 'Samsung Galaxy A50',
    version: 'Android 9.1.1',
    logTime: 'Jan 31, 9:04',
    icon: <AndroidIcon />,
  },
  {
    title: 'Chrome extention',
    version: '114.0.5735',
    logTime: 'Jan 31, 9:04',
    icon: <ChromeIcon />,
  },
];

const ConnectedDevices = () => {
  return (
    <>
      <div className="wrapper grid grid-cols-4 gap-5">
        {devices.map((device, index) => (
          <div
            className="item bg-white rounded-2xl shadow-md h-auto p-5"
            key={index}
          >
            <div className="top flex items-center gap-4">
              <div className="left">{device.icon}</div>
              <div className="right">
                <h3 className="text-xl font-medium text-[#202A36] pb-0.5">
                  {device.title}
                </h3>
                <p className="text-lg text-[#202A36]/50">
                  {device.version} - {device.logTime}
                </p>
              </div>
            </div>
            <button className="mt-5 h-[43px] w-full rounded-[5px] bg-[#F8F9FB] text-base">
              Terminate Device
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ConnectedDevices;
