const packages = [
  {
    title: 'Samsung Galaxy A50',
    version: 'Android 9.1.1',
    logTime: 'Jan 31, 9:04',
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
            <div className="packages-wrapper">
              {packages.map((item, index) => (
                <div
                  className="item bg-white rounded-2xl shadow-md h-auto p-5"
                  key={index}
                >
                  <div className="top flex items-center gap-4">
                    <div className="left">{item.icon}</div>
                    <div className="right">
                      <h3 className="text-xl font-medium text-[#202A36] pb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-lg text-[#202A36]/50">
                        {item.version} - {item.logTime}
                      </p>
                    </div>
                  </div>
                  <button className="mt-5 h-[43px] w-full rounded-[5px] bg-[#F8F9FB] text-base">
                    Terminate Device
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
