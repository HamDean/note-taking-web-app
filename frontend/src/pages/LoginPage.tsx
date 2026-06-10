import Logo from '../assets/images/logo.svg'

const LoginPage = () => {
  return (
    <div className="bg-neutral-100 h-screen px-4 md:px-30.75 flex flex-col justify-center">
      <form className="bg-white px-4 py-10 rounded-12 border border-neutral-200 md:min-w-130.5">
        <div className="flex flex-col items-center gap-2">
            <img src={Logo} alt="Logo" className="h-7 w-23.75 mb-2" />
            <h1 className="text-preset-1 text-neutral-950">Welcome to Note</h1>
            <span className="text-preset-5 text-neutral-600">Please log in to continue</span>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
