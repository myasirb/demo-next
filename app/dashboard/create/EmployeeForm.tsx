"use client";

import { useContext, useState } from "react";
import { ListContext } from "../RecordContext";

export default function EmployeeForm() {
  const { addItem } = useContext(ListContext);

  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [designation, setDesignation] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const formSubmitHandler = () => {
    addItem({
      name: fname + " " + lname,
      email: email + "@folio3.com",
      designation,
      country,
      city,
      address,
    });
    formClearHandler();
  };

  const formClearHandler = () => {
    setFname("");
    setLname("");
    setCity("");
    setCountry("");
    setAddress("");
    setDesignation("");
  };

  return (
    <form>
      <div className="space-y-12 x-15">
        <div className="border-b border-white-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white-900">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-white-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white-900 placeholder:text-white-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                  <span className="flex select-none items-center pl-3 text-white-500 sm:text-sm">
                    @folio3.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-white-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="bg-black block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="bg-black block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Designation
              </label>
              <div className="mt-2">
                <input
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  type="text"
                  name="first-name"
                  id="designation"
                  autoComplete="given-name"
                  className="bg-black block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="bg-black block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="pakistan">Pakistan</option>
                  <option value="dubai">Dubai</option>
                  <option value="mexico">Mexico</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                City
              </label>
              <div className="mt-2">
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  id="city"
                  name="country"
                  autoComplete="country-name"
                  className="bg-black block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="lahore">Lahore</option>
                  <option value="karachi">Karachi</option>
                  <option value="islamabad">Islamabad</option>
                </select>
              </div>
            </div>

            <div className="col-span-4">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="bg-black block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          onClick={formClearHandler}
          type="button"
          className="text-sm font-semibold leading-6 text-white-900"
        >
          Cancel
        </button>
        <button
          onClick={formSubmitHandler}
          type="button"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
