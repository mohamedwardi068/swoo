import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Path() {
  const location = useLocation();

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter(x => x);
    return (
      <div className="bg-gray-100 p-6 w-full h-auto flex justify-center mt-2">
        <nav className="flex text-gray-500 text-sm relative bg-white p-4 rounded-full w-[95%] h-[80px] mt-1 shadow-md  ">
          <Link to="/" className="hover:text-gray-300 font-bold ml-7 text-lg">Home</Link>
          <span className="mx-3 mt-1">/</span>
          <Link to="/pages" className="hover:text-gray-300 font-bold text-lg">Pages</Link>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return (
              <React.Fragment key={to}>
                <span className="mx-3 mt-1">/</span>
                {isLast ? (
                  <span className="font-bold text-black text-lg">{value}</span>
                ) : (
                  <Link to={to} className="hover:text-gray-300 font-bold text-lg">{value}</Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    );
  };

  return generateBreadcrumbs();
}

export default Path;
