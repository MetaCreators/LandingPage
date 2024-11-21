function HeroSection1() {
  return (
    <div className="bg-sky-950 flex justify-between text-black h-screen border-b border-black">
      <div className="w-1/2 flex justify-center items-center text-left">
        <div className="w-3/4">
          <div className="text-wrap text-6xl font-bold text-white">
            Empowering Creators
          </div>
          <div className="text-slate-500">
            Our platform simplifies content creation with AI tools like a
            thumbnail maker, script writer, and description writer
          </div>
          <button className="mt-6 bg-yellow-300 p-3 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        {/* <img src={tailor} className="h-80 w-80 rounded-lg" /> */}hi
      </div>
    </div>
  );
}

export default HeroSection1;
