import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import logo from "./logo.png";

const Header: React.FC = () => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleMoreMenuToggle = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
    setIsResourcesOpen(false);
    setIsCompanyOpen(false);
  };

  const handleResourcesHover = () => {
    setIsResourcesOpen(true);
    setIsCompanyOpen(false);
  };

  const handleCompanyHover = () => {
    setIsCompanyOpen(true);
    setIsResourcesOpen(false);
  };

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header className="bg-[#382e5e] h-[52px] pl-4 pr-8 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="/" className="block">
          <img src={logo} alt="Semrush" className="w-[123px] h-8" />
        </a>
      </div>

      {/* Search Bar */}
      <div className="flex-1 flex justify-center mx-8">
        <div className="flex">
          <input
            type="text"
            placeholder="Enter your task, website, or keyword"
            className="w-[420px] h-[30px] bg-[#4d407e] hover:bg-[#5b4e8b] text-white placeholder-white/70 px-3 text-sm rounded-l-md border-none outline-none focus:ring-0 transition-colors"
          />
          <button className="w-8 h-[30px] bg-[#ff642d] hover:bg-[#c33909] rounded-r-md flex items-center justify-center transition-colors">
            <Search size={14} className="text-white" />
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center space-x-1.5">
        {/* Pricing Button */}
        <a
          href="/pricing"
          className="h-8 px-3 text-sm text-white/80 hover:text-white hover:bg-[#4d407e] rounded-md flex items-center transition-all duration-200"
        >
          Pricing
        </a>

        {/* Enterprise Button */}
        <a
          href="/enterprise"
          className="h-8 px-3 text-sm text-white/80 hover:text-white hover:bg-[#4d407e] rounded-md flex items-center transition-all duration-200"
        >
          Enterprise
        </a>

        {/* More Menu */}
        <div className="relative">
          <button
            onClick={handleMoreMenuToggle}
            className="h-8 px-3 text-sm text-white/80 hover:text-white hover:bg-[#4d407e] rounded-md flex items-center space-x-2.5 transition-all duration-200"
          >
            <span>More</span>
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${isMoreMenuOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* More Dropdown */}
          {isMoreMenuOpen && (
            <div className="absolute top-full right-0 mt-1 w-[238px] bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
              <a href="/pricing" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                Pricing
              </a>
              <a href="/features" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                Features
              </a>
              <a href="/blog" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                Blog
              </a>

              <div
                className="relative"
                onMouseEnter={handleResourcesHover}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <button className="w-full text-left px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50 flex items-center justify-between">
                  Resources
                  <ChevronDown size={14} className="rotate-[-90deg]" />
                </button>

                {/* Resources Submenu */}
                {isResourcesOpen && (
                  <div className="absolute left-full top-0 ml-1 w-[238px] bg-white rounded-md shadow-lg border border-gray-200 py-2">
                    <a href="/help" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                      Help Center
                    </a>
                    <a href="/whats-new" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                      What's new
                    </a>
                    <a href="/webinars" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                      Webinars
                    </a>
                    <a href="/insights" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                      Insights
                    </a>
                    <a href="/hire-agency" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                      Hire a Trusted Agency
                    </a>
                    <a href="/academy" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                      Academy
                    </a>
                    <a href="/top-websites" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                      Top Websites
                    </a>
                    <a href="/content-marketing" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                      Content Marketing Hub
                    </a>
                    <a href="/local-marketing" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                      Local Marketing Hub
                    </a>
                  </div>
                )}
              </div>

              <div className="relative" onMouseEnter={handleCompanyHover} onMouseLeave={() => setIsCompanyOpen(false)}>
                <button className="w-full text-left px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50 flex items-center justify-between">
                  Company
                  <ChevronDown size={14} className="rotate-[-90deg]" />
                </button>

                {/* Company Submenu */}
                {isCompanyOpen && (
                  <div className="absolute left-full top-0 ml-1 w-[238px] bg-white rounded-md shadow-lg border border-gray-200 py-2">
                    <a href="/about" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                      About Us
                    </a>
                    <a href="/careers" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                      Careers
                    </a>
                    <a href="/newsroom" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                      Newsroom
                    </a>
                    <a href="/investors" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                      Investors
                    </a>
                    <a href="/contact" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                      Contact Us
                    </a>
                  </div>
                )}
              </div>

              <a href="/enterprise" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                Enterprise
              </a>
              <a href="/prowly" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                Prowly
              </a>
              <a href="/api" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                Semrush API
              </a>

              <div className="border-t border-gray-200 my-2"></div>

              <a href="/demo" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                Online demo
              </a>
              <a href="/hire-agency" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                Hire a digital agency
              </a>
            </div>
          )}
        </div>

        {/* User Menu */}
        <div className="relative ml-4">
          <button
            onClick={handleUserMenuToggle}
            className="w-6 h-6 bg-[#ff642d] rounded-full flex items-center justify-center text-white text-xs font-semibold hover:bg-[#c33909] transition-colors"
          >
            V
          </button>

          {/* User Dropdown */}
          {isUserMenuOpen && (
            <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
              <a href="/subscription" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                Subscription info
              </a>
              <a href="/manage-users" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                Manage users
              </a>
              <div className="border-t border-gray-200 my-2"></div>
              <a href="/logout" className="block px-4 py-2 text-sm text-[#171a22] hover:bg-gray-50">
                Log out
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Overlay to close menus when clicking outside */}
      {(isMoreMenuOpen || isUserMenuOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsMoreMenuOpen(false);
            setIsUserMenuOpen(false);
            setIsResourcesOpen(false);
            setIsCompanyOpen(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;
