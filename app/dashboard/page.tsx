"use client";

import { NextPage } from "next";
import Table from "./Table";
import { useContext } from "react";
import { ListContext } from "./RecordContext";

interface Props {}

let cols = ["Sr", "Name", "Email", "Designation", "Country", "City", "Address"];

const Page: NextPage<Props> = ({}) => {
  const { list } = useContext(ListContext);

  return (
    <div>
      <Table cols={cols}>
        {list?.map((r, index) => (
          <tr key={index}>
            <td className="px-6 py-4 text-sm font-medium text-white-100">
              {index + 1}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-white-10">
              {r.name}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-white-10">
              {r.email}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-white-10">
              {r.designation}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-white-10">
              {r.country}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-white-10">
              {r.city}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-white-10">
              {r.address}
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default Page;
