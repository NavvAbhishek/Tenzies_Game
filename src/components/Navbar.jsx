import { useState, useEffect } from "react";
import logo from "../../public/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu if the window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false); // Close the mobile menu on desktop view
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <nav className="bg-black text-white px-10 md:px-28 sm:px-20 py-4">
      <div className="container flex justify-between items-center">
        <div className="flex gap-20 justify-center items-center">
          <a href="/">
            <img
              src={logo}
              alt=""
              width={60}
              height={60}
              className="rounded-lg cursor-pointer"
            />
          </a>
          <a href="/" className="hidden sm:block">
            Home
          </a>
          <a href="/play" className="hidden sm:block">
            Play
          </a>
        </div>
        <div className="hidden sm:flex space-x-8">
          <a
            href="#"
            className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200"
          >
            Register
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <span className="text-white text-4xl">&#9776;</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center space-y-6 z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-10 text-6xl focus:outline-none"
          >
            &times;
          </button>
          <a href="/">
            <img
              src={logo}
              alt=""
              width={100}
              height={100}
              className="rounded-lg cursor-pointer"
            />
          </a>
          <a href="/" className="text-2xl hover:underline">
            Home
          </a>
          <a href="/" className="hidden sm:block">
            Play
          </a>
          <a
            href="#"
            className="bg-white text-black py-2 px-6 rounded-lg text-xl hover:bg-gray-200"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-white text-black py-2 px-6 rounded-lg text-xl hover:bg-gray-200"
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
