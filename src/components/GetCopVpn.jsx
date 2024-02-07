import { ArrowRight } from '../assets/Icons/ArrowRight';

const GetCopVpn = () => {
  return (
    <>
      <div className="offer-wrapper flex-1 flex items-center ml-8 h-auto text-white rounded-2xl bg-gradient-to-r from-0% from-[#4bb6c2] to-[#1e5178]">
        <div className="flex flex-wrap items-center md:flex-nowrap gap-5 justify-between py-10 px-10 w-full">
          <div className="flex-initial w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl sm:text-4xl !leading-snug">
              Exclusive 45-day <br />
              <strong>Money-Back Guarantee</strong>
            </h2>
            <p className="mt-5 text-lg">
              If you are unsatisfied with our service, contact us within 30
              days.
            </p>
          </div>
          <div className="flex-initial w-full md:w-1/3 text-center md:text-right">
            <div className="cop-button">
              <a
                className="py-3 px-6 inline-flex gap-2 items-center rounded-full relative text-[#202A36] text-lg font-semibold transition-all duration-300 bg-white hover:text-white hover:bg-gradient-to-l hover:from-0% hover:from-Primary hover:to-Secondary shadow-Secondary/10 shadow-xl"
                href="/pricing/"
                target="_self"
              >
                Get CopVPN <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetCopVpn;
