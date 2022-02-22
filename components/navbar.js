import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./UI/Icons";

export default function Navbar() {
  return (
    <nav className="w-11/12 md:w-8/12 lg:w-5/12 py-10 grid grid-cols-2 mx-auto">
      <div>
        <Link href="/">
          <a className="inline-block w-fit font-black text-2xl text-white bg-gray-800 hover:bg-black transition easy-in-out duration-200 p-2 rounded">
            jordanrjdev
          </a>
        </Link>
      </div>
      <div className="nav-links flex justify-end items-center space-x-4">
        <Link href="https://twitter.com/jordanrjdev" rel="noopener noreferrer">
          <a target="_blank" className="text-gray-600">
            <TwitterIcon />
          </a>
        </Link>
        <Link href="https://github.com/jordanrjdev" rel="noopener noreferrer">
          <a target="_blank" className="text-gray-600 hover:text-black">
            <GithubIcon />
          </a>
        </Link>
        <Link href="https://linkedin/in/jordanrjdev" rel="noopener noreferrer">
          <a target="_blank" className="text-gray-600">
            <LinkedinIcon />
          </a>
        </Link>
      </div>
    </nav>
  );
}
