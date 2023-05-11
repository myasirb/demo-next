"use client";
import React, { createContext, useEffect, useState } from "react";

// Define the context type
interface ListContextType {
  list: any[];
  addItem: (item: any) => void;
}

const defaultValue: ListContextType = {
  list: [
    {
      name: "Muhammad Yasir",
      email: "muhammadyasir@folio3.com",
      designation: "Trainee Software Engineer",
      country: "Pakistan",
      city: "Lahore",
      address: "Earth",
    },
    {
      name: "Muhammad Yasir",
      email: "muhammadyasir@folio3.com",
      designation: "Trainee Software Engineer",
      country: "Pakistan",
      city: "Lahore",
      address: "Earth",
    },
    {
      name: "Muhammad Yasir",
      email: "muhammadyasir@folio3.com",
      designation: "Trainee Software Engineer",
      country: "Pakistan",
      city: "Lahore",
      address: "Earth",
    },
    {
      name: "Muhammad Yasir",
      email: "muhammadyasir@folio3.com",
      designation: "Trainee Software Engineer",
      country: "Pakistan",
      city: "Lahore",
      address: "Earth",
    },
    {
      name: "Muhammad Yasir",
      email: "muhammadyasir@folio3.com",
      designation: "Trainee Software Engineer",
      country: "Pakistan",
      city: "Lahore",
      address: "Earth",
    },
    {
      name: "Muhammad Yasir",
      email: "muhammadyasir@folio3.com",
      designation: "Trainee Software Engineer",
      country: "Pakistan",
      city: "Lahore",
      address: "Earth",
    },
    {
      name: "Muhammad Yasir",
      email: "muhammadyasir@folio3.com",
      designation: "Trainee Software Engineer",
      country: "Pakistan",
      city: "Lahore",
      address: "Earth",
    },
  ],
  addItem: () => {},
};

// Create the context
const ListContext = createContext<ListContextType>(defaultValue);

// Create the provider component
const RecordProvider: any = ({ children }: { children: any }) => {
  const [list, setList] = useState<object[]>([
    {
      name: "Muhammad Yasir",
      email: "muhammadyasir@folio3.com",
      designation: "Trainee Software Engineer",
      country: "Pakistan",
      city: "Lahore",
      address: "Earth",
    },
    {
      name: "Muhammad Yasir",
      email: "muhammadyasir@folio3.com",
      designation: "Trainee Software Engineer",
      country: "Pakistan",
      city: "Lahore",
      address: "Earth",
    },
    {
      name: "Muhammad Yasir",
      email: "muhammadyasir@folio3.com",
      designation: "Trainee Software Engineer",
      country: "Pakistan",
      city: "Lahore",
      address: "Earth",
    },
    {
      name: "Muhammad Yasir",
      email: "muhammadyasir@folio3.com",
      designation: "Trainee Software Engineer",
      country: "Pakistan",
      city: "Lahore",
      address: "Earth",
    },
    {
      name: "Muhammad Yasir",
      email: "muhammadyasir@folio3.com",
      designation: "Trainee Software Engineer",
      country: "Pakistan",
      city: "Lahore",
      address: "Earth",
    },
    {
      name: "Muhammad Yasir",
      email: "muhammadyasir@folio3.com",
      designation: "Trainee Software Engineer",
      country: "Pakistan",
      city: "Lahore",
      address: "Earth",
    },
    {
      name: "Muhammad Yasir",
      email: "muhammadyasir@folio3.com",
      designation: "Trainee Software Engineer",
      country: "Pakistan",
      city: "Lahore",
      address: "Earth",
    },
  ]);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedList = localStorage.getItem("list");
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);

  // Update local storage when the list changes
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const addItem = (item: any) => {
    setList([...list, item]);
  };

  const contextValue: ListContextType = {
    list,
    addItem,
  };

  return (
    <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>
  );
};

export { ListContext, RecordProvider };
