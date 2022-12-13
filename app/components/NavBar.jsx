import { NavLink } from '@remix-run/react';
import { useState } from 'react';
import Dog from './dog';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen((previous) => !previous);
  };

  return (
    <header className="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-2">
      <div className="flex items-center justify-between px-4 py-2 sm:p-0">
        <div className="">
          <NavLink to="/">
            <div className="flex items-center">
              <div className="w-20 h-20">
                <Dog />
              </div>
            </div>
          </NavLink>
        </div>
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="text-primary focus:text-gray-800 hover:text-primary sm:hidden dark:text-white dark:focus:text-primary"
            onClick={handleClick}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              )}
              <title>Menu</title>
            </svg>
          </button>
        </div>
      </div>
      <div className="px-4 pb-2 items-center flex">
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex sm:justify-between sm:p-0 sm:text-lg dark:text-white`}
        >
          <NavLink
            to="/articles"
            className="block py-1 hover:underline underline-animate sm:ml-4"
          >
            Articles
          </NavLink>
        </div>
      </div>
    </header>
  );
}
