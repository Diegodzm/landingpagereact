import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link href="/">
        <span className="text-xl font-bold cursor-pointer">MyApp</span>
      </Link>
      <div>
        <Link href="/about">
          <span className="mr-4 cursor-pointer">About</span>
        </Link>
        <Link href="/contact">
          <span className="cursor-pointer">Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;