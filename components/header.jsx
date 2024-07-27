import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-dark-blue">
      <a href="/" className="w-full text-7xl font-serif tracking-widest">
        <span className="font-thin italic">Lit</span>
        <span className="font-normal">Rate</span>
      </a>
      <div className="w-full flex justify-around items-center text-3xl font-extralight">
        <Link href={'/'}>Home</Link>
        <div>Browse</div>
        <div>My Books</div>
        <Link href={'/login'} className="bg-orange-red px-5 py-1 rounded-full font-normal">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
