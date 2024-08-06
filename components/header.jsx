import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex text-white justify-between items-center bg-dark-blue">
      <a href="/" className="w-full text-7xl font-serif tracking-widest ml-5">
        <span className="font-thin italic">Lit</span>
        <span className="font-normal">Rate</span>
      </a>
      <div className="items-center text-3xl font-extralight">
        <a href={'/'}>Home</a>
        <Link href={'/login'} className="bg-orange-red mx-10 px-5 py-1 rounded-full font-normal">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
