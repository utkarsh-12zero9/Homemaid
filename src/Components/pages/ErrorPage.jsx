import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-teal-50 via-blue-100 to-teal-200 px-4">
            <div className="bg-white/80 glassmorphism p-8 rounded-2xl shadow-xl flex flex-col items-center border border-teal-100">
                <h1 className="text-6xl font-extrabold text-teal-700 mb-4 drop-shadow-lg">404</h1>
                <h2 className="text-2xl font-bold text-teal-800 mb-2 font-poppins">Page Not Found!</h2>
                <p className="text-gray-600 mb-6 text-center font-poppins">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-teal-600 text-white px-6 py-3 rounded-lg font-poppins font-semibold shadow-md hover:shadow-lg hover:bg-teal-700 transition-all cursor-pointer"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;