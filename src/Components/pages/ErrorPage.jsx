import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-teal-100 via-blue-100 to-teal-200 px-4 relative overflow-hidden">
            {/* Blurred floating shapes for extra glassmorphism */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-teal-300 opacity-30 rounded-full filter blur-3xl animate-pulse -z-10" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 opacity-30 rounded-full filter blur-3xl animate-pulse delay-2000 -z-10" />
            <div className="bg-white/70 backdrop-blur-xl glassmorphism p-10 rounded-3xl shadow-2xl flex flex-col items-center border border-teal-100 max-w-md w-full">
                {/* Animated icon */}
                <div className="mb-4 animate-bounce">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="#14b8a6" opacity="0.15" />
                        <path d="M12 8v4" stroke="#0e7490" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="12" cy="16" r="1" fill="#0e7490" />
                    </svg>
                </div>
                <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-teal-600 mb-2 drop-shadow-xl tracking-tight">404</h1>
                <h2 className="text-2xl font-bold text-teal-800 mb-3 font-poppins tracking-wide">Page Not Found!</h2>
                <p className="text-gray-700 mb-8 text-center font-poppins text-base leading-relaxed">
                    Sorry, the page you are looking for does not exist or has been moved.<br />
                    <span className="text-teal-600 font-semibold">Let&apos;s get you back on track!</span>
                </p>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-teal-600 text-white px-7 py-3 rounded-xl font-poppins font-semibold shadow-lg hover:shadow-xl hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-95 transform transition-all duration-200 ease-in-out hover:scale-105 hover:ring-2 hover:ring-blue-300 text-lg cursor-pointer"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;