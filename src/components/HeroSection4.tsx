function HeroSection4() {
  return (
    <div className="bg-white flex justify-between text-black h-screen">
      <div className="w-1/2 flex justify-center items-center text-left">
        <div className="w-3/4 space-y-6">
          <div className="text-wrap text-6xl font-bold text-blue-950">
            Elevate your online presence
          </div>
          <div className="text-slate-500">
            Our AI-powered tools simplify every step of the content creation
            process, from generating eye-catching thumbnails to crafting
            compelling scripts and descriptions. Streamline your workflow,
            connect with a vibrant community
          </div>
          <button className="mt-6 bg-sky-950 p-3 rounded-lg text-white">
            Explore Solutions
          </button>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        {/* <img src={tailor} className="h-80 w-80 rounded-lg" /> */}hi
      </div>
    </div>
  );
}

export default HeroSection4;
