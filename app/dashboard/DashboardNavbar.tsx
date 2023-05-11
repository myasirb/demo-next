"use client";
import { classNames } from "../AppNavbar";

const DashboardNavbar = () => {
  const navigation = [
    { name: "All Record", href: "/dashboard", current: false },
    { name: "New record", href: "/dashboard/create", current: false },
  ];

  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-10">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "rounded-md px-3 py-2 text-sm font-medium mt-10 mb-10"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DashboardNavbar;
