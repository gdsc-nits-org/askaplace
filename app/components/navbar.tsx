import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-black text-2xl font-bold bg-white px-4 py-2 mx-10">
          MyApp
        </Link>
        <div className="flex space-x-6">
          <Link href="/" className="font-bold text-white hover:underline">Home</Link>
          <Link href="/blogs" className="font-bold text-white hover:underline">Blogs</Link>
          <Link href="/contact" className="font-bold text-white hover:underline">Contact Us</Link>
          <Link href="/Login" className="font-bold text-white hover:underline">
          <FontAwesomeIcon icon={faUserPlus} height={25} width={25}/>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;