import PaymentHistory from '../components/PaymentHistory';
import { Tab } from '@headlessui/react';
import PaymentMethod from '../components/PaymentMethod';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export const Billing = () => {
  return (
    <>
      <div className="page-wrapper bg-[#F8F9FB] h-full">
        <div className="page-content-wrapper p-8">
          <div className="head text-[#202A36] mb-10 relative pb-6 pt-4">
            <h2 className="text-5xl font-bold leading-snug mb-2">
              Your Budget, Your Security
            </h2>
            <p className="text-xl">
              CopVPN's Transparent Pricing History, Your Path to Peace of Mind!
            </p>
            <div className="line w-full h-0.5 bg-[#202A36]/10 absolute bottom-0 left-0"></div>
          </div>

          <div className="w-full">
            <Tab.Group>
              <Tab.List className="bg-white rounded-3xl mb-5 w-max">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'rounded-3xl overflow-hidden px-20 py-3 outline-none text-[#202A36] font-medium text-lg',
                      selected
                        ? 'bg-gradient-to-r from-0% from-[#4bb6c2] to-[#1e5178] text-white'
                        : 'opacity-60'
                    )
                  }
                >
                  Payment History
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'rounded-3xl overflow-hidden px-20 py-3 outline-none text-[#202A36] font-medium text-lg',
                      selected
                        ? 'bg-gradient-to-r from-0% from-[#4bb6c2] to-[#1e5178] text-white'
                        : 'opacity-60'
                    )
                  }
                >
                  Payment Method
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <PaymentHistory />
                </Tab.Panel>
                <Tab.Panel>
                  <PaymentMethod />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </>
  );
};
