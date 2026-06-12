import Logo from "../components/Logo";
import info from "../assets/images/icon-info.svg";

const ResetPasswordPage = () => {
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
          <h1 className="text-preset-1 text-neutral-950 text-center dark:text-white">
            Reset Your Password
          </h1>
          <span className="text-preset-5 text-neutral-600 text-center dark:text-neutral-300">
            Choose a new password to secure your account.
          </span>
        </div>

        {/* Input Area */}
        <div className="pt-6 flex flex-col gap-4">
          {/* password section */}
          <div>
            <div className="flex flex-col gap-[6px]">
            <div className="flex justify-between">
              <label
                htmlFor="password"
                className="text-preset-4 text-neutral-950 dark:text-white"
              >
                New Password
              </label>
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
          <span className="text-neutral-600 text-[12px] dark:text-neutral-400">
            <img src={info} alt="info" className="inline-block mr-1 h-4 w-4" />
            At least 8 characters
          </span>
          </div>

          <div className="flex flex-col gap-[6px]">
            <div className="flex justify-between">
              <label
                htmlFor="password"
                className="text-preset-4 text-neutral-950 dark:text-white"
              >
                Confirm New Password
              </label>
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

        {/* Reset button */}
        <button
          type="submit"
          className="bg-blue-500 text-preset-3 text-white py-3.25 rounded-8 cursor-pointer hover:bg-blue-700 transition-colors"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};
export default ResetPasswordPage;
