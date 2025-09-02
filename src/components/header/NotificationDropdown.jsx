"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { X, Trash2 } from "lucide-react"; // icon library (lucide-react)

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  // Mock notification data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      name: "Terry Franci",
      avatar: "https://cdn-icons-png.flaticon.com/256/180/180644.png",
      message: "requests permission to change",
      project: "Project - Nganter App",
      type: "Project",
      time: "5 min ago",
      status: "online", // online/offline/error
    },
    {
      id: 2,
      name: "Alena Franci",
      avatar: "https://cdn-icons-png.flaticon.com/256/180/180644.png",
      message: "requests permission to change",
      project: "Project - Nganter App",
      type: "Project",
      time: "8 min ago",
      status: "online",
    },
    {
      id: 3,
      name: "Brandon Philips",
      avatar:
        "https://c8.alamy.com/comp/REB7MC/manbrunettehairwighaircutmustachebeardhairdresserfashionsalonavatardummypersonimageportraithairstyleprofessionalphotocharacterprofilesetvectoriconillustrationisolatedcollectiondesignelementgraphicsigncartooncolor-vector-vectors-REB7MC.jpg",
      message: "requests permission to change",
      project: "Project - Nganter App",
      type: "Project",
      time: "1 hr ago",
      status: "error",
    },
    {
      id: 4,
      name: "Terry Franci",
      avatar: "https://cdn-icons-png.flaticon.com/256/180/180644.png",
      message: "requests permission to change",
      project: "Project - Nganter App",
      type: "Project",
      time: "5 min ago",
      status: "online", // online/offline/error
    },
    {
      id: 5,
      name: "Alena Franci",
      avatar: "https://cdn-icons-png.flaticon.com/256/180/180644.png",
      message: "requests permission to change",
      project: "Project - Nganter App",
      type: "Project",
      time: "8 min ago",
      status: "online",
    },
    {
      id: 6,
      name: "Brandon Philips",
      avatar:
        "https://c8.alamy.com/comp/REB7MC/manbrunettehairwighaircutmustachebeardhairdresserfashionsalonavatardummypersonimageportraithairstyleprofessionalphotocharacterprofilesetvectoriconillustrationisolatedcollectiondesignelementgraphicsigncartooncolor-vector-vectors-REB7MC.jpg",
      message: "requests permission to change",
      project: "Project - Nganter App",
      type: "Project",
      time: "1 hr ago",
      status: "error",
    },
  ]);

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

  // remove single notification
  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // clear all
  const clearAll = () => {
    setNotifications([]);
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
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z"
          />
        </svg>
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="sm:absolute sm:-right-[0px] xsm:-left-[8vw] -left-[17vw] mt-[16px] flex sm:max-h-[480px] w-[340px]  max-h-[480px] sm:w-[350px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark lg:right-0"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-gray-700">
          <h5 className="text-lg font-semibold text-[#444] dark:text-gray-200">
            Notifications
          </h5>
          {notifications.length > 0 && (
            <button
              onClick={clearAll}
              className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600 cursor-pointer"
            >
              <Trash2 className="w-4 h-4" /> Clear All
            </button>
          )}
          <button
            onClick={toggleDropdown}
            className="ml-2 text-gray-500 transition dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <ul className="flex flex-col h-auto overflow-y-auto custom-scrollbar">
          {notifications.length === 0 ? (
            <li className="p-4 text-center text-gray-500 dark:text-gray-400">
              No notifications Yet
            </li>
          ) : (
            notifications.map((n) => (
              <li key={n.id} className="flex items-start justify-between">
                <DropdownItem
                  onItemClick={closeDropdown}
                  className="flex flex-1 gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
                >
                  <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                    <Image
                      width={40}
                      height={40}
                      src={n.avatar}
                      alt={n.name}
                      className="w-full overflow-hidden rounded-full"
                    />
                    <span
                      className={`absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white dark:border-gray-900 ${
                        n.status === "online"
                          ? "bg-green-500"
                          : n.status === "error"
                          ? "bg-red-500"
                          : "bg-gray-400"
                      }`}
                    ></span>
                  </span>

                  <span className="block">
                    <span className="mb-1.5 space-x-1 block text-theme-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-gray-800 dark:text-white/90">
                        {n.name}
                      </span>
                      <span>{n.message}</span>
                      <span className="font-medium text-gray-800 dark:text-white/90">
                        {n.project}
                      </span>
                    </span>
                    <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                      <span>{n.type}</span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>{n.time}</span>
                    </span>
                  </span>
                </DropdownItem>

                <button
                  onClick={() => removeNotification(n.id)}
                  className="p-2 text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </li>
            ))
          )}
        </ul>

        <Link
          href="/"
          className="block px-4 py-2 mt-3 text-sm font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          View All Notifications
        </Link>
      </Dropdown>
    </div>
  );
}
