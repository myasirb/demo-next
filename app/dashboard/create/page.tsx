import { NextPage } from "next";
import EmployeeForm from "./EmployeeForm";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <EmployeeForm />
    </div>
  );
};

export default Page;
