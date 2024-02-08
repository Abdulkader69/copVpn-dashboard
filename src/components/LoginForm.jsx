const LoginForm = () => {
  return (
    <>
      <div className="login-form-wrap">
        <form className="mt-4 login_area">
          <div className="">
            <label className="text-lg w-full text-[#202A36] ml-1.5 font-medium">
              {' '}
              Email{' '}
            </label>
            <input
              className="mt-2 flex h-16 w-full items-center placeholder:text-lg placeholder:font-normal justify-center rounded-sm border bg-white/0 border-[#f0efef] pt-[28px] pb-[28px] pl-[17px] text-sm outline-none mb-4"
              label="Email *"
              placeholder="Enter Your Email"
              name="email"
              id="email"
              type="email"
            />
          </div>
          <div className="">
            <label className="text-lg w-full text-[#202A36] ml-1.5 font-medium">
              {' '}
              Password{' '}
            </label>
            <input
              name="password"
              label="Password*"
              placeholder="Enter your password"
              className="mt-2 flex h-16 w-full items-center placeholder:text-lg placeholder:font-normal justify-center rounded-sm border bg-white/0 border-[#f0efef] pt-[28px] pb-[28px] pl-[17px] text-sm outline-none mb-8 "
              id="password"
              type="password"
            />
          </div>
          <div className="vpn_txt leading-normal text-lg text-[#1BA9AF] font-medium text-center pb-4">
            <a href="#/auth/forgot-password">
              <a className="relative">
                Forgot your password?<span className="after"></span>
              </a>
            </a>
          </div>
          <button className=" transition  duration-600 w-full rounded-[61px] hover:bg-gradient-to-br text-[18px] tracking-[.5px] bg-gradient-to-r from-[#1BAFB3] to-[#1D5379] text-[#fff] pt-[20px] pr-[25px] pb-[20px] pl-[28px] mt-2">
            Continue
          </button>
          <div className="vpn_txt leading-normal text-sm text-[#162D44] font-medium text-center py-2">
            <a href="#/auth/forgot-password">
              <a className="relative">Get Sign In Code</a>
            </a>
          </div>
          <div className="mb-6 flex items-center  gap-3 mt-5">
            <div className="h-px w-full bg-gray-200 dark:bg-navy-700"></div>
            <p className="text-base text-[#858b91] text-[18px]"> or </p>
            <div className="h-px w-full bg-gray-200 dark:bg-navy-700"></div>
          </div>
          <div className="flex  lg:flex-row md:flex-row sm:flex-row flex-row">
            <div className="lg:w-6/12 md:w-6/12 mr-4 sm:w-6/12 xm:w-6/12  mb-4 lg:mb-0 lg:mr-4 md:mr-4 sm:mr-4 smoleDevice">
              <div className="mb-6 flex  pt-[20px] pr-[25px] pb-[20px] pl-[28px] rounded-[61px] w-full items-center justify-center gap-2 border border-[#f0efef]   hover:cursor-pointer hover:bg-lightPrimary dark:bg-navy-800">
                <div className="rounded-full text-xl">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                    enableBackground="new 0 0 48 48"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </div>
                <h5 className="text-sm text-[18px] font-medium text-[#202A36]">
                  Google
                </h5>
              </div>
            </div>
            <div className="lg:w-6/12 md:w-6/12 mr__4 sm:w-6/12  lg:mb-0 smoleDevice">
              <div className="mb-6 flex w-full pt-[20px] pr-[25px] pb-[20px] pl-[28px] rounded-[61px] items-center justify-center gap-2 border border-[#f0efef] hover:cursor-pointer hover:bg-lightPrimary ">
                <div className="rounded-full text-xl">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    version="1.1"
                    viewBox="0 0 32 32"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.023 17.093c-0.033-3.259 2.657-4.822 2.777-4.901-1.512-2.211-3.867-2.514-4.705-2.548-2.002-0.204-3.91 1.18-4.926 1.18-1.014 0-2.583-1.15-4.244-1.121-2.185 0.033-4.199 1.271-5.323 3.227-2.269 3.936-0.58 9.769 1.631 12.963 1.081 1.561 2.37 3.318 4.061 3.254 1.63-0.064 2.245-1.055 4.215-1.055s2.524 1.055 4.248 1.021c1.753-0.032 2.864-1.591 3.936-3.159 1.24-1.814 1.751-3.57 1.782-3.659-0.038-0.017-3.416-1.312-3.451-5.202zM19.783 7.53c0.897-1.089 1.504-2.602 1.34-4.108-1.294 0.053-2.861 0.86-3.79 1.948-0.832 0.965-1.561 2.502-1.365 3.981 1.444 0.112 2.916-0.734 3.816-1.821z"></path>
                  </svg>
                </div>
                <h5 className="text-sm text-[18px] font-medium text-[#202A36]">
                  Apple
                </h5>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
