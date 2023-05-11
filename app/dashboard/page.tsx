import { NextPage } from "next";
import Table from "./Table";

interface Props {}

let record = [
  {
    name: "Muhammad Yasir",
    email: "muhammadyasir@folio3.com",
    designation: "Trainee Software Engineer",
  },
  {
    name: "Muhammad Yasir",
    email: "muhammadyasir@folio3.com",
    designation: "Trainee Software Engineer",
  },
  {
    name: "Muhammad Yasir",
    email: "muhammadyasir@folio3.com",
    designation: "Trainee Software Engineer",
  },
  {
    name: "Muhammad Yasir",
    email: "muhammadyasir@folio3.com",
    designation: "Trainee Software Engineer",
  },
  {
    name: "Muhammad Yasir",
    email: "muhammadyasir@folio3.com",
    designation: "Trainee Software Engineer",
  },
  {
    name: "Muhammad Yasir",
    email: "muhammadyasir@folio3.com",
    designation: "Trainee Software Engineer",
  },
  {
    name: "Muhammad Yasir",
    email: "muhammadyasir@folio3.com",
    designation: "Trainee Software Engineer",
  },
];

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <Table cols={["Name", "Email", "Designation"]}>
        {record?.map((r) => (
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-white-800 whitespace-nowrap">
              {r.name}
            </td>
            <td className="px-6 py-4 text-sm text-white-800 whitespace-nowrap">
              {r.email}
            </td>
            <td className="px-6 py-4 text-sm text-white-800 whitespace-nowrap">
              {r.designation}
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default Page;
