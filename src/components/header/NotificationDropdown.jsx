"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const handleClick = () => {
    toggleDropdown();
    setNotifying(false);
  };
  return (
    <div className="relative">
      <button
        className="relative dropdown-toggle flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={handleClick}
      >
        <span
          className={`absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400 ${
            !notifying ? "hidden" : "flex"
          }`}
        >
          <span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span>
        </span>
        <svg
          className="fill-current"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute -right-[0px] mt-[17px] flex h-[480px] w-[350px]  flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark sm:w-[361px] lg:right-0"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-gray-700">
          <h5 className="text-lg font-semibold text-[#ffcc00ef] dark:text-gray-200">
            Notification
          </h5>
          <button
            onClick={toggleDropdown}
            className="text-gray-500 transition dropdown-toggle dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <svg
              className="fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col h-auto overflow-y-auto custom-scrollbar">
          {/* Example notification items */}
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
            >
              <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                <Image
                  width={40}
                  height={40}
                  src="https://cdn-icons-png.flaticon.com/256/180/180644.png"
                  alt="User"
                  className="w-full overflow-hidden rounded-full"
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <span className="block">
                <span className="mb-1.5 space-x-1 block text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Terry Franci
                  </span>
                  <span>requests permission to change</span>
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Project - Nganter App
                  </span>
                </span>

                <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>5 min ago</span>
                </span>
              </span>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
            >
              <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                <Image
                  width={40}
                  height={40}
                  src="https://cdn-icons-png.flaticon.com/256/180/180644.png"
                  alt="User"
                  className="w-full overflow-hidden rounded-full"
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <span className="block">
                <span className="mb-1.5 block space-x-1  text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Alena Franci
                  </span>
                  <span> requests permission to change</span>
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Project - Nganter App
                  </span>
                </span>

                <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>8 min ago</span>
                </span>
              </span>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
            >
              <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                <Image
                  width={40}
                  height={40}
                  src="https://previews.123rf.com/images/pandavector/pandavector1901/pandavector190105561/126045782-vector-illustration-of-avatar-and-dummy-sign-collection-of-avatar-and-image-stock-symbol-for-web.jpg"
                  alt="User"
                  className="w-full overflow-hidden rounded-full"
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <span className="block">
                <span className="mb-1.5 space-x-1 block text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Alena Franci
                  </span>
                  <span>requests permission to change</span>
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Project - Nganter App
                  </span>
                </span>

                <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>8 min ago</span>
                </span>
              </span>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
            >
              <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                <Image
                  width={40}
                  height={40}
                  src="https://c8.alamy.com/comp/REB7MC/manbrunettehairwighaircutmustachebeardhairdresserfashionsalonavatardummypersonimageportraithairstyleprofessionalphotocharacterprofilesetvectoriconillustrationisolatedcollectiondesignelementgraphicsigncartooncolor-vector-vectors-REB7MC.jpg"
                  alt="User"
                  className="w-full overflow-hidden rounded-full"
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <span className="block">
                <span className="mb-1.5 space-x-1 block text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Jocelyn Kenter
                  </span>
                  <span>requests permission to change</span>
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Project - Nganter App
                  </span>
                </span>

                <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>15 min ago</span>
                </span>
              </span>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
              href="#"
            >
              <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                <Image
                  width={40}
                  height={40}
                  src="data:image/png;base64,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"
                  alt="User"
                  className="overflow-hidden rounded-full"
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-error-500 dark:border-gray-900"></span>
              </span>

              <span className="block">
                <span className="mb-1.5 space-x-1 block text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Brandon Philips
                  </span>
                  <span>requests permission to change</span>
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Project - Nganter App
                  </span>
                </span>

                <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>1 hr ago</span>
                </span>
              </span>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
              href="#"
            >
              <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                <Image
                  width={40}
                  height={40}
                  src="https://cdn-icons-png.flaticon.com/256/180/180644.png"
                  alt="User"
                  className="w-full overflow-hidden rounded-full"
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <span className="block">
                <span className="mb-1.5 block space-x-1 text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Jocelyn Kenter
                  </span>
                  <span>requests permission to change</span>
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Project - Nganter App
                  </span>
                </span>

                <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>15 min ago</span>
                </span>
              </span>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
              href="#"
            >
              <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                <Image
                  width={40}
                  height={40}
                  src="https://cdn-icons-png.flaticon.com/256/180/180644.png"
                  alt="User"
                  className="w-full overflow-hidden rounded-full"
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-error-500 dark:border-gray-900"></span>
              </span>

              <span className="block">
                <span className="mb-1.5 space-x-1 block text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Brandon Philips
                  </span>
                  <span> requests permission to change</span>
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Project - Nganter App
                  </span>
                </span>

                <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>1 hr ago</span>
                </span>
              </span>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
              onItemClick={closeDropdown}
            >
              <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                <Image
                  width={40}
                  height={40}
                  src="https://cdn-icons-png.flaticon.com/256/180/180644.png"
                  alt="User"
                  className="w-full overflow-hidden rounded-full"
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <span className="block">
                <span className="mb-1.5 space-x-1 block text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Terry Franci
                  </span>
                  <span>requests permission to change</span>
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Project - Nganter App
                  </span>
                </span>

                <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>5 min ago</span>
                </span>
              </span>
            </DropdownItem>
          </li>

          {/* Add more items as needed */}
        </ul>
        {/* <Link
          href="/"
          className="block px-4 py-2 mt-3 text-sm font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          View All Notifications
        </Link> */}
      </Dropdown>
    </div>
  );
}
