import { Api } from "@utils/request";
import React, { Fragment } from "react";
import { useQuery } from "react-query";

const UserCom = () => {
  const { data, isLoading } = useQuery("values", async () => {
    const { data } = await Api.get("/api/add-value");
    return data;
  });
  return (
    <div className="flex space-x-2 justify-center m-4">
      {isLoading
        ? "Loading..."
        : data.map((item: any) => (
            <div key={item._id} className="flex flex-col text-2xl">
              <h1>{item.firstName}</h1>
              <h1>{item.lastName}</h1>
              <h1>{item.password}</h1>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Update
              </button>
              <hr />
            </div>
          ))}
    </div>
  );
};

export default UserCom;
