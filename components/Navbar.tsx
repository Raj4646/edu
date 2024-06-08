import Link from "next/link";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="p-4 shadow-md ">
      <ul className="flex space-x-8 justify-between">
        <li>
          <Link href="/">
            Coursify
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <CgProfile size={24}/>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
