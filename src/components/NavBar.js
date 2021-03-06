import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/" 
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Hung Duong
          </NavLink>
          <NavLink to="/about" 
          activeClassName="text-red-100 bg-red-700"
          className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >About Me
          </NavLink>
          <NavLink to="/project" 
          activeClassName="text-red-100 bg-red-700"
          className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >Projects
          </NavLink>
          <NavLink to="/post" 
          activeClassName="text-red-100 bg-red-700"
          className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >Blog Posts
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon url = "https://github.com/alazyfatcat" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
            <SocialIcon url = "https://www.linkedin.com/in/hung-duong-dev/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
            <SocialIcon url = "https://my.indeed.com/resume?hl=en&co=CA&from=gnav-homepage&_ga=2.80648535.1556946536.1630517327-2038866539.1627848311" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
        </div>
      </div>
    </header>
  );
}
