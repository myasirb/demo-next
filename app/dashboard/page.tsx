import { NextPage } from "next";
import Table from "./Table";

interface Props {}

let record = [
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
];

let cols = ["Sr", "Name", "Email", "Designation", "Country", "City", "Address"];

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <Table cols={cols}>
        {record?.map((r, index) => (
          <tr key={index}>
            <td className="px-6 py-4 text-sm font-medium text-white-100">
              {index}
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
