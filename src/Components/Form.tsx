import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  editContact,
  selectContactById,
} from "../features/contactSlice";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store";
import { toast } from "react-hot-toast";

interface ContactFormProps {
  contact?: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    status: string;
  };
}

const Form: React.FC<ContactFormProps> = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("active");
  const { id } = useParams();
  const contact = useSelector((state: RootState) =>
    selectContactById(state, Number(id) || 0)
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (contact) {
      setFirstName(contact.firstname);
      setLastName(contact.lastname);
      setEmail(contact.email);
      setPhone(contact.phoneNumber);
      setStatus(contact.status);
    }
  }, [contact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (contact) {
      dispatch(
        editContact({
          ...contact,
          firstname,
          lastname,
          email,
          phoneNumber: phone,
          status,
        })
      );
      toast.success("Edited");
      navigate("/");
    } else {
      dispatch(
        addContact({
          id: Date.now(),
          firstname: firstname,
          lastname,
          email,
          phoneNumber: phone,
          status,
        })
      );
      toast.success("Added");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setStatus("active");
  };

  return (
    <div className="form_root h-[100vh] flex justify-center items-center">
      <div className="form_main border-2 border-black border-solid p-10 rounded-md w-[600px] max-w-[90%]">
        <div className="flex justify-between">
          <div className="form_input flex flex-col lg:w-[48%] md:w-[48%] w-[100%] ">
            <label htmlFor="fname" className="text-lg font-semibold">
              First Name
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              className="border-[1px] border-black border-solid mt-2 rounded-md p-2 text-lg"
            />
          </div>
          <div className="form_input flex flex-col lg:w-[48%] md:w-[48%] w-[100%] ">
            <label htmlFor="lname" className="text-lg font-semibold">
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              className="border-[1px] border-black border-solid mt-2 rounded-md p-2 text-lg"
            />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="form_input flex flex-col lg:w-[48%] md:w-[48%] w-[100%] ">
            <label htmlFor="email" className="text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[1px] border-black border-solid mt-2 rounded-md p-2 text-lg"
            />
          </div>
          <div className="form_input flex flex-col lg:w-[48%] md:w-[48%] w-[100%] ">
            <label htmlFor="phone" className="text-lg font-semibold">
              Mobile Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border-[1px] border-black border-solid mt-2 rounded-md p-2 text-lg"
            />
          </div>
        </div>
        <div className="form_input form_input flex flex-col mt-4">
          <label htmlFor="status" className="text-lg font-semibold">
            Status
          </label>
          <div className="flex items-center mt-2">
            <div className="flex items-center  mr-10">
              <input
                type="radio"
                name="status"
                id="active"
                value={"active"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <p className="text-sm font-bold ml-2">Active</p>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="status"
                id="inactive"
                value={"inactive"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <p className="text-sm font-bold ml-2">Inactive</p>
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="text-lg bg-gray-200 text-black px-4 py-2 rounded-lg font-bold mt-10"
        >
          {id ? "Edit" : "Save Contact"}
        </button>
      </div>
    </div>
  );
};

export default Form;
