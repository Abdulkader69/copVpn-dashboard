import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CloseIcon from '../assets/Icons/CloseIcon';
import MessageIcon from '../assets/Icons/MessageIcon';

const PaymentMethod = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="payment-method rounded-2xl border border-[#202A360D]/05 text[#202A36] overflow-hidden bg-white px-8 py-10">
      <div className="top flex items-center justify-between border-b border-[#202A360D]/05 pb-10">
        <div className="logo">
          <img
            className="w-full max-w-40"
            src="../../public/logo.png"
            alt="logo"
          />
        </div>
        <p className="paid bg-[#EDFFEE] h-10 font-medium text-sm leading-none text-[#43AF4E] w-max px-5 rounded-3xl flex items-center">
          Active
        </p>
      </div>
      <div className="details pt-10 w-full max-w-3xl">
        <div className="item flex items-center py-2">
          <p className="opacity-70 w-1/2">Subscription</p>
          <p className="w-1/2">2-year plan</p>
        </div>
        <div className="item flex items-center py-2">
          <p className="opacity-70 w-1/2">Auto-renewal</p>
          <p className="w-1/2">
            ON
            <button
              className="text-[#1C899B] hover:underline ml-2"
              onClick={() => setIsOpen(true)}
            >
              Manage
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
                        <div className="wrapper w-[767px] mx-auto relative py-10 px-5 bg-white rounded-2xl">
                          <button
                            className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center hover:bg-black/20"
                            onClick={() => setIsOpen(false)}
                          >
                            <CloseIcon />
                          </button>
                          <div className="content-wrap">
                            <div className="wrap bg-slate-100 py-2 px-3 mb-3 rounded-md">
                              What will happen if you cancel auto-renewal?
                            </div>
                            <ul className="text-sm leading-relaxed list-disc pl-6">
                              <li>
                                Your subscription will no longer automatically
                                renew and will expire on Aug 25, 2025.
                              </li>
                              <li>
                                When it expires, you will lose access to NordVPN
                                and advanced security features like ad blocking,
                                tracker blocking, and malware protection.
                              </li>
                              <li>
                                If you want to use NordVPN again, you'll need to
                                purchase a new subscription.
                              </li>
                            </ul>
                          </div>
                          <div className="buttons flex items-center justify-end gap-5 mt-6">
                            <a
                              href="#"
                              className="inline-block rounded-full text-[#1e5178] font-medium hover:underline"
                            >
                              Keep auto-renewal
                            </a>
                            <a
                              href="#"
                              className="border-2 border-solid border-[#4bb6c2] py-2 inline-block px-6 rounded-full text-[#1e5178] font-medium hover:bg-[#4bb6c2] hover:text-white"
                            >
                              Cancel auto-renewal
                            </a>
                          </div>
                        </div>
                        <div className="wrapper w-[767px] mx-auto relative py-10 px-5 bg-white rounded-2xl mt-5 flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm">
                            <MessageIcon />
                            <span>
                              If you've run into any issues, we'd love to help.
                            </span>
                          </div>
                          <a
                            href="#"
                            className="inline-block rounded-full text-sm text-[#1e5178] font-medium hover:underline"
                          >
                            Contact support
                          </a>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </p>
        </div>
        <div className="item flex items-center py-2">
          <p className="opacity-70 w-1/2">Renews on</p>
          <p className="w-1/2">Aug 25, 2025</p>
        </div>
        <div className="item flex items-center py-2">
          <p className="opacity-70 w-1/2">Payment method</p>
          <p className="w-1/2">Visa ****4594Exp 8/27</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
