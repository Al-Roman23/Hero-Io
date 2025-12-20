import logo from "../assets/logo.png";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center gap-5 text-4xl font-bold tracking-wider opacity-50">
      L <img src={logo} alt="Loading" className="w-20 animate-spin" /> O A D I N
      G
    </div>
  );
};

export default LoadingPage;
