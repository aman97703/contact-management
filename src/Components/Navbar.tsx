import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[190px] min-w-[190px] border-r-2 border-black h-[100vh] max-h-[100vh] border-solid overflow-x-hidden overflow-y-auto p-4">
      <div className="">
        <Link to={"/"}>Contacts</Link>
      </div>
      <div className="mt-4">
        <Link to={"/charts"}>Charts and Maps</Link>
      </div>
    </div>
  );
};

export default Navbar;
