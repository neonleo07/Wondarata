import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/Constants";

const Navbar = () => {
  return (
    <div className="relative z-20">
      <nav
        id="Navbar"
        className="flex items-center gap-32 mt-5 text-md justify-center"
      >
        <Link href="/" className="hover:font-bold">
          Home
        </Link>
        <Link href="/works" className="hover:font-bold">
          Works
        </Link>
        <Image src={IMAGES.LOGO} alt="Logo" width={90} height={90} />
        <Link href="/blogs" className="hover:font-bold">
          Blogs
        </Link>
        <Link href="/about" className="hover:font-bold">
          About
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
