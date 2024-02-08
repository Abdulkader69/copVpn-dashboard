const PaymenstHistory = [
  {
    date: '06/25/2023',
    subscription: '1 Year',
    method: 'Credit Card',
    amount: '$80',
    status: 'Paid',
    invoices: true,
  },
  {
    date: 'Jan 31, 9:04',
    subscription: '3 month',
    method: 'Credit Card',
    amount: '$280',
    status: 'Payment failed',
    invoices: false,
  },
  {
    date: '06/25/2023',
    subscription: '6 month',
    method: 'Credit Card',
    amount: '$180',
    status: 'pending',
    invoices: true,
  },
  {
    date: '06/25/2023',
    subscription: '2 Year',
    method: 'Credit Card',
    amount: '$810',
    status: 'Paid',
    invoices: false,
  },
];
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CloseIcon from '../assets/Icons/CloseIcon';

const PaymentHistory = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="table-wrapper overflow-auto">
      <div className="payment-history-table rounded-2xl border border-[#202A360D]/05 text[#202A36] overflow-hidden bg-white">
        <div className="table-head flex py-3 px-6 opacity-50 border-b border-[#202A360D]/05">
          <div className="item flex-1">Date</div>
          <div className="item flex-1">Subscription</div>
          <div className="item flex-1">Payment method</div>
          <div className="item flex-1">Amount</div>
          <div className="item flex-1">Status</div>
        </div>
        {PaymenstHistory.map((item, index) => (
          <div
            className="table-item flex items-center py-3 px-6 border-b border-[#202A360D]/05 text[#202A36]"
            key={index}
          >
            <div className="item flex-1">{item.date}</div>
            <div className="item flex-1">{item.subscription}</div>
            <div className="item flex-1">{item.method}</div>
            <div className="item flex-1">{item.amount}</div>
            <div className="item flex-1 flex flex-wrap items-center gap-2">
              {item.status === 'Payment failed' ? (
                <p className="failed bg-[#FFF5F5] h-10 font-medium text-sm leading-none text-[#D94B4B] w-max px-5 rounded-3xl flex items-center">
                  Payment failed
                </p>
              ) : (
                <p className="paid bg-[#EDFFEE] h-10 font-medium text-sm leading-none text-[#43AF4E] w-max px-5 rounded-3xl flex items-center">
                  Paid
                </p>
              )}
              {item.invoices ? (
                <div className="get-invoice">
                  <button
                    className="text-[#1C899B] text-sm hover:underline"
                    onClick={() => setIsOpen(true)}
                  >
                    Get invocie
                  </button>
                  <Transition appear show={isOpen} as={Fragment}>
                    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                      <div className="fixed inset-0 overflow-y-auto bg-black/20">
                        <div className="flex min-h-full w-full items-center justify-center p-4 text-center">
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
                                <div className="top">
                                  <p className="opacity-60">Payment</p>
                                  <h3 className="price font-semibold text-3xl pt-2">
                                    {item.amount}
                                  </h3>
                                </div>
                                <div className="details bg-[#202A36]/10 px-5 py-3 mt-4">
                                  <div className="item flex items-center justify-between py-1">
                                    <p className="opacity-70">Payment date</p>
                                    <p>{item.date}</p>
                                  </div>
                                  <div className="item flex items-center justify-between py-1">
                                    <p className="opacity-70">Subscription</p>
                                    <p>{item.subscription}</p>
                                  </div>
                                  <div className="item flex items-center justify-between py-1">
                                    <p className="opacity-70">Product</p>
                                    <p>CopVPN</p>
                                  </div>
                                </div>
                                <div className="buttons flex items-center justify-end gap-3 mt-6">
                                  <a
                                    href="#"
                                    className="border-2 border-solid border-[#4bb6c2] py-2 inline-block px-6 rounded-full text-[#1e5178] font-medium hover:bg-[#4bb6c2] hover:text-white"
                                  >
                                    Get receipt
                                  </a>
                                  <a
                                    href="#"
                                    className="border-2 border-solid border-[#4bb6c2] py-2 inline-block px-6 rounded-full text-[#1e5178] font-medium hover:bg-[#4bb6c2] hover:text-white"
                                  >
                                    Get invoice
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
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
