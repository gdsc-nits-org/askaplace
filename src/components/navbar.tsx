import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          MyApp
        </Link>
        <div className="flex space-x-6">
          <Link href="/" className="text-white hover:underline">Home</Link>
          <Link href="/blogs" className="text-white hover:underline">Blogs</Link>
          <Link href="/contact" className="text-white hover:underline">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
