import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";
import { getValues } from "src/Query";

const UserCom = ({ values }: any) => {
  const { data, isLoading } = useQuery("values", getValues, {
    initialData: values,
  });
  return (
    <div className="flex space-x-2 justify-center m-4 items-center h-screen flex-col">
      {isLoading
        ? "Loading..."
        : data.map((item: any) => (
            <div key={item._id} className="flex flex-col text-2xl mb-3">
              <h1>First name : {item.firstName}</h1>
              <h1>Last name :{item.lastName}</h1>
              <h1>password : {item.password}</h1>
              <Link href={`/${item._id}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Update
                </button>
              </Link>
              <hr />
            </div>
          ))}
    </div>
  );
};

export default UserCom;
