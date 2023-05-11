import { NextPage } from "next";
import EmployeeForm from "./EmployeeForm";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="m-10">
      <EmployeeForm />
    </div>
  );
};

export default Page;
