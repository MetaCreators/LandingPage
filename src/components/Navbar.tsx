function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 sticky top-0 bg-sky-950 border border-b">
      <div>Landing page</div>
      <div className="flex items-center space-x-3 font-medium text-slate-500">
        <div>About</div>
        <div>Contact</div>
        <div>Products</div>
      </div>
    </div>
  );
}

export default Navbar;
