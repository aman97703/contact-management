import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { deleteContact } from "../features/contactSlice";
import { useNavigate } from "react-router-dom";

const ContactList: React.FC = (): JSX.Element => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (id: number) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="p-10">
      <div className="flex justify-center items-center">
        <button
          className="text-lg bg-gray-200 text-black px-4 py-2 rounded-lg font-bold"
          onClick={() => navigate(`/form`)}
        >
          Add Contact
        </button>
      </div>
      {contacts.length > 0 ? (
        <div className="flex flex-wrap mt-10">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className=" w-3/12 mr-10 mb-8 border border-black rounded-lg p-3 flex justify-between flex-col items-center"
            >
              <p className="text-2xl">
                {contact.firstname} {contact.lastname}
              </p>
              <p className="text-xl font-bold mt-2">{contact.email}</p>
              <p className="text-lg mt-2">{contact.phoneNumber}</p>
              <p className="text-lg mt-2">{contact.status}</p>
              <div className="flex mt-3">
                <button
                  className="mr-12 text-sm bg-gray-200 text-black px-4 py-2 rounded-lg font-bold"
                  onClick={() => handleEdit(contact.id)}
                >
                  Edit
                </button>
                <button
                  className="text-sm bg-gray-200 text-red-900 px-4 py-2 rounded-lg font-bold"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>NO Contacts found</h1>
        </div>
      )}
    </div>
  );
};
export default ContactList;
