import Logo from "../components/icon-components/Logo";

const ForgotPasswordPage = () => {
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
          <h1 className="text-preset-1 text-center text-neutral-950 dark:text-white">
            Forgotten your password?
          </h1>
          <span className="text-preset-5 text-center text-neutral-600 dark:text-neutral-300">
            Enter your email below, and we’ll send you a link to reset it.
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
        </div>

        {/* Reset Password button */}
        <button
          type="submit"
          className="bg-blue-500 text-preset-3 text-white py-3.25 rounded-8 cursor-pointer hover:bg-blue-700 transition-colors"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
export default ForgotPasswordPage