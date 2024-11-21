function HeroSection2() {
  return (
    <div className="bg-sky-950 flex justify-between text-black h-screen border-b border-black">
      <div className="w-1/2 flex justify-center items-center">
        {/* <img src={tailor} className="h-80 w-80 rounded-lg" /> */}hi
      </div>

      <div className="w-1/2 flex justify-center items-center text-left bg-white">
        <div className="w-3/4">
          <div className="text-wrap text-6xl font-bold text-blue-950">
            Simplifying Content Creation
          </div>
          <div className="text-slate-500">
            Unleash your creativity with our suite of AI-powered tools, from
            thumbnail generation to script writing and description crafting.
            Streamline your workflow and connect with a
          </div>
          <button className="mt-6 bg-blue-950 p-3 rounded-lg text-slate-500">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection2;
