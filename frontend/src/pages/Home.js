import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Shagirds</h1>
          <p className="text-lg mb-6">
            Learn from experienced IT professionals and level up your career!
          </p>
          <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
              <p>Learn directly from experienced IT professionals.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
              <p>Book sessions at your convenience with your mentors.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
              <p>Get access to top-notch learning at reasonable rates.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
