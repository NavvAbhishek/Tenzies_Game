import heroImage from  "./../../public/hero-img.webp"; // Update this with the correct image path

const Hero = () => {
  return (
    <section className="relative bg-gray-50 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold textblack mb-6">
            Roll the Dice, Match the Numbers!
          </h1>
          <p className="text-md sm:text-xl text-gray-600 mb-8">
            Can you roll all the same number before time runs out? Sharpen your skills and enjoy the thrill of a classic game in a modern format!
          </p>
          <button className="bg-black text-white font-semibold px-6 py-3 rounded-md transition duration-300">
            Play Now
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={heroImage}
            alt="Tenzies game"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
