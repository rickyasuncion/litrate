const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-dark-blue">
      <div className="w-full text-7xl font-serif tracking-widest">
        <span className="font-thin italic">Lit</span>
        <span className="font-normal">Rate</span>
      </div>
      <div className="w-full flex justify-around items-center text-3xl font-extralight">
        <div>Home</div>
        <div>Browse</div>
        <div>My Books</div>
        <div className="bg-orange-red px-5 py-1 rounded-full font-normal">Login</div>
      </div>
    </nav>
  );
};

export default Header;
