import { useGetCatagoriesNameQuery } from "@/redux/api/api";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data } = useGetCatagoriesNameQuery();
  const categoriesNames = data?.data;

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Parent</a>
              <ul className="p-2">
                {categoriesNames?.map((category) => (
                  <li key={category._id}>
                    <Link href={`categories/${category}`}>{category}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-2xl" href="/">
          PixelWise
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <details>
              <summary>Categories</summary>
              <ul className="p-2">
                {categoriesNames?.map((category) => (
                  <li key={category._id}>
                    <Link href={`/category/${category}`}>{category}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary btn-outline">PC Builder</a>
        <button
          className="btn btn-secondary btn-outline ml-2"
          onClick={() => signIn()}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
