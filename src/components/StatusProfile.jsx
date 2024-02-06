import Shield from '../assets/Icons/shield';
const StatusProfile = () => {
  return (
    <>
      <div className="profile-status flex items-center justify-center text-center w-96 bg-white rounded-2xl shadow-md h-auto px-5 py-5">
        <div className="inner">
          <Shield />
          <div className="sta font-medium text-lg text-[#202A36] opacity-50">
            Status
          </div>
          <h3 className="font-bold text-3xl text-[#202A36] py-1">Premium</h3>
          <p className="font-semibold text-base text-[#1BABB1]">
            329 Days Left
          </p>
          <div className="date flex items-center gap-5 pt-8">
            <div className="start text-center">
              <p className="text-sm font-normal text-[#202A36]/50">
                Activated on
              </p>
              <p className="text-base font-medium text-[#202A36]">
                Nov 16, 2022
              </p>
            </div>
            <div className="line bg-[#202A36]/15 w-0.5 h-8"></div>
            <div className="start text-center">
              <p className="text-sm font-normal text-[#202A36]/50">
                Expire date
              </p>
              <p className="text-base font-medium text-[#202A36]">
                Nov 16, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusProfile;
