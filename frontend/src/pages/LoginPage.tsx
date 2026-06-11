import Logo from "../components/Logo";

const LoginPage = () => {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-700 h-screen px-4 md:px-30.75 flex flex-col items-center justify-center">
      <form
        className="bg-white dark:bg-neutral-950 px-4 md:px-[32px] lg:px-12 py-10 rounded-12 
            border border-neutral-200 dark:border-neutral-800
            flex flex-col gap-4 w-full max-w-135"
      >
        {/* Heading */}
        <div className="flex flex-col items-center gap-2">
          <Logo className="mb-2" />
          <h1 className="text-preset-1 text-neutral-950 dark:text-white">
            Welcome to Note
          </h1>
          <span className="text-preset-5 text-neutral-600 dark:text-neutral-300">
            Please log in to continue
          </span>
        </div>

        {/* Input Area */}
        <div className="pt-6 flex flex-col gap-4">
          {/* email section */}
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="email"
              className="text-preset-4 text-neutral-950 dark:text-white"
            >
              Email Address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email@example.com"
              className="placeholder:text-neutral-500 placeholder:text-preset-5 outline-none border
                    border-neutral-300 dark:border-neutral-600 rounded-8 h-10.5 px-4 py-3 cursor-pointer
                    hover:bg-neutral-50 transition-colors hover:dark:bg-neutral-800 dark:text-white
              "
            />
          </div>
          {/* password section */}
          <div className="flex flex-col gap-[6px]">
            <div className="flex justify-between">
              <label
                htmlFor="password"
                className="text-preset-4 text-neutral-950 dark:text-white"
              >
                Password
              </label>
              <span className="text-neutral-600 underline text-xs cursor-pointer hover:text-blue-500 transition-colors">
                Forgot
              </span>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              className=" outline-none hover:bg-neutral-50 dark:border-neutral-600 transition-colors
               border border-neutral-300 rounded-8 h-10.5 px-4 py-3 cursor-pointer
               hover:dark:bg-neutral-800 dark:text-white
               "
            />
          </div>
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="bg-blue-500 text-preset-3 text-white py-3.25 rounded-8 cursor-pointer hover:bg-blue-700 transition-colors"
        >
          Login
        </button>

        <hr className="text-neutral-200 dark:text-neutral-800" />

        <span className="text-neutral-600 dark:text-neutral-300 text-center text-preset-5">
          Or log in with:
        </span>

        {/* Google Login Button */}
        <div
          className="flex items-center w-full justify-center border hover:bg-neutral-50 transition-colors
         border-neutral-300 dark:border-neutral-600 rounded-8 h-11 text-neutral-950
          dark:text-white text-[16px] gap-4 cursor-pointer hover:dark:bg-neutral-800"
        >
          <GoogleIcon />
          <span>Google</span>
        </div>

        {/* Horizontal Rule */}
        <hr className="text-neutral-200 dark:text-neutral-800" />

        <span className="text-center text-neutral-600 dark:text-neutral-300 text-preset-5">
          No account yet?{" "}
          <a
            href=""
            className="text-neutral-950 dark:text-white hover:text-blue-500 transition-all"
          >
            Sign up
          </a>
        </span>
      </form>
    </div>
  );
};

export default LoginPage;



const GoogleIcon = ({ textColor = "#0E121B" }: { textColor?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      viewBox="0 0 24 25"
    >
      <path
        fill={textColor}
        fill-rule="evenodd"
        d="M20.838 14.718a8.932 8.932 0 0 0 .086-2.857.558.558 0 0 0-.557-.473h-7.805a.562.562 0 0 0-.562.562v2.206c0 .31.252.562.562.562h4.275c.176 0 .305.18.239.343-.935 2.31-3.39 3.826-6.132 3.32-2.106-.39-3.832-2.06-4.284-4.153a5.477 5.477 0 0 1 8.369-5.776.572.572 0 0 0 .73-.06l1.703-1.733a.559.559 0 0 0-.046-.832 8.897 8.897 0 0 0-5.161-1.815c-4.872-.135-9.091 3.823-9.25 8.694-.167 5.108 3.927 9.302 8.995 9.302 4.383 0 8.037-3.14 8.838-7.29Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};
