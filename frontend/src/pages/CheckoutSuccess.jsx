import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 md:mx-auto rounded-lg shadow-md max-w-md w-full text-center">
        {/* Centered and scaled up the SVG checkmark */}
        <div className="flex justify-center mb-4">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#00A651"/>
            <path d="M17.3333 8L10 15.3333L6.66667 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        
        <div>
          <h3 className="md:text-2xl text-xl text-gray-900 font-semibold mb-2">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p className="text-gray-500"> Have a great day! </p>
          
          <div className="py-6">
            <Link
              to="/home"
              className="inline-block px-12 bg-buttonBgColor text-white font-semibold py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Go Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;