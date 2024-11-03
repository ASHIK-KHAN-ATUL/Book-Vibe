import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = <> 
                <li className="">
                    <NavLink to="/" className='bg-transparent' >Home</NavLink >
                 </li>
                 <li>
                    <NavLink to="" >Listed Books</NavLink >
                </li>
                <li>
                    <NavLink to="" >Pges to Read</NavLink >
                </li>
        </>;

  return (
    <div className="navbar bg-base-100 text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-green-400 sm:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <a className=" text-xl md:text-3xl xl:text-5xl font-bold">
          Book-vibe
        </a>
      </div>
      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-green-400 hover:bg-sky-400 hover:scale-105">Sign In</a>
        <a className="btn bg-sky-400 hover:bg-green-400 hover:scale-105">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
