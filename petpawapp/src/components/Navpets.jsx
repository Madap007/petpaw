import { useState } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';

function NavPets() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'All Pets', href: '#' },
    { name: 'Dogs', href: '#' },
    { name: 'Cats', href: '#' },
    { name: 'Small Pets', href: '#' },
    { name: 'Birds', href: '#' },
  ];

  return (
    <nav className="bg-rose-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Dropdown */}
          <div className="relative">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 rounded-md">
                  Categories
                  <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {categories.map((category) => (
                      <Menu.Item key={category.name}>
                        {({ active }) => (
                          <a
                            href={category.href}
                            className={`${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } block px-4 py-2 text-sm`}
                          >
                            {category.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          {/* Center - Navigation Links */}
          {/* <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-rose-500 px-3 py-2 text-sm font-medium">
              Featured
            </a>
            <a href="#" className="text-gray-900 hover:text-rose-500 px-3 py-2 text-sm font-medium">
              Recently Added
            </a>
            <a href="#" className="text-gray-900 hover:text-rose-500 px-3 py-2 text-sm font-medium">
              Success Stories
            </a>
          </div> */}

          {/* Right side - Search Bar */}
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                placeholder="Search pets..."
              />
            </div>
            <button className="ml-4 px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavPets;
