const packages = [
  {
    title: '1 months',
    price: '$2.50',
    billed: 'Billed $33.99 for 12 months',
    save: '',
    selected: false,
  },
  {
    title: '3 months',
    price: '$2.50',
    billed: 'Billed $33.99 for 12 months',
    save: 'Save 57%',
    selected: true,
  },
  {
    title: '6 months',
    price: '$2.50',
    billed: 'Billed $33.99 for 12 months',
    save: 'Save 57%',
    selected: false,
  },
  {
    title: '1 year',
    price: '$2.50',
    billed: 'Billed $33.99 for 12 months',
    save: 'Save 57%',
    selected: false,
  },
  {
    title: 'Life time',
    price: '$2.50',
    billed: 'Billed $33.99 for 12 months',
    save: 'Save 57%',
    selected: false,
  },
];

export const Pricing = () => {
  return (
    <>
      <div className="page-wrapper bg-[#F8F9FB] h-full">
        <div className="page-content-wrapper p-8">
          <div className="head text-[#202A36] mb-10 relative pb-6 pt-4">
            <h2 className="text-5xl font-bold leading-snug mb-2">
              Premium Security, Affordable Rates
            </h2>
            <p className="text-xl">CopVPN's Subscriptions Redefine Value! </p>
            <div className="line w-full h-0.5 bg-[#202A36]/10 absolute bottom-0 left-0"></div>
          </div>
          <div className="content-wrapper">
            <div className="packages-wrapper grid grid-cols-3 gap-x-4 gap-y-6">
              {packages.map((item, index) => (
                <div
                  className={`item bg-white rounded-2xl shadow-md h-auto relative overflow-hidden group ${
                    item.selected ? 'selected-package' : ''
                  }`}
                  key={index}
                >
                  <div
                    className={`overlay opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full bg-gradient-to-r from-0% from-[#4bb6c2] to-[#1e5178] ${
                      item.selected ? 'opacity-100' : ''
                    }`}
                  ></div>
                  <div className="inner px-5 py-8 relative z-20">
                    <h3
                      className={`text-xl font-semibold text-transparent group-hover:text-white bg-clip-text bg-gradient-to-r from-0% from-[#4bb6c2] to-[#1e5178] ${
                        item.selected ? '!text-white' : ''
                      }`}
                    >
                      {item.title}
                    </h3>
                    <h2
                      className={`price font-semibold text-4xl text-[#202A36] group-hover:text-white pt-2 pb-3 ${
                        item.selected ? '!text-white' : ''
                      }`}
                    >
                      {item.price}{' '}
                      <span className="font-medium text-lg">/mo</span>
                    </h2>
                    <p
                      className={`text-lg text-[#202A36] group-hover:text-white ${
                        item.selected ? '!text-white' : ''
                      }`}
                    >
                      {item.billed}
                    </p>
                    {item.save ? (
                      <div className="save absolute top-3 right-0 rounded-l-[52px] bg-[#F2F9F9] inline-block py-2 pl-5 pr-3">
                        <h3 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-0% from-[#4bb6c2] to-[#1e5178]">
                          {item.save}
                        </h3>
                      </div>
                    ) : (
                      ''
                    )}
                    <button
                      className={`mt-5 h-[43px] w-full bg-[#F8F9FB] group-hover:text-white rounded-lg group-hover:shadow-lg group-hover:bg-gradient-to-l group-hover:from-10% group-hover:from-[#4bb6c2] group-hover:to-[#1e5178] text-base font-semibold ${
                        item.selected
                          ? 'shadow-lg bg-gradient-to-l from-10% from-[#4bb6c2] to-[#1e5178] text-white'
                          : ''
                      }`}
                    >
                      {item.selected ? 'Current Plan' : 'Select Plan'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
