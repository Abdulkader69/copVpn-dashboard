import ChromeIcon from '../assets/Icons/ChromeIcon';
import AndroidIcon from '../assets/Icons/AndroidIcon';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CloseIcon from '../assets/Icons/CloseIcon';

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
  let [isOpen, setIsOpen] = useState(false);
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
            <button
              className="mt-5 h-[43px] w-full rounded-[5px] bg-[#F8F9FB] text-base"
              onClick={() => setIsOpen(true)}
            >
              Terminate Device
            </button>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="fixed inset-0 overflow-y-auto bg-black/20">
                  <div className="flex min-h-full w-full items-center justify-center p-4 text-left">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel>
                        <div className="wrapper w-[580px] mx-auto relative py-8 px-5 bg-white rounded-2xl">
                          <button
                            className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center hover:bg-black/20"
                            onClick={() => setIsOpen(false)}
                          >
                            <CloseIcon />
                          </button>
                          <div className="content">
                            <h3 className="text-3xl font-semibold mb-2">
                              Terminate Device
                            </h3>
                            <p>Do you want to terminate the Device</p>
                          </div>
                          <div className="buttons flex items-center justify-end gap-5 mt-6">
                            <a
                              href="#"
                              className="inline-block rounded-full text-[#1e5178] font-medium hover:underline"
                            >
                              Cancel
                            </a>
                            <a
                              href="#"
                              className="border-2 border-solid border-[#4bb6c2] py-2 inline-block px-6 rounded-full text-[#1e5178] font-medium hover:bg-[#4bb6c2] hover:text-white"
                            >
                              Confirm
                            </a>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        ))}
      </div>
    </>
  );
};

export default ConnectedDevices;
