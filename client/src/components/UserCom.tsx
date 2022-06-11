import Link from "next/link";
import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { deleteValuesById, getValues } from "@Query";

const UserCom = ({ values }: any) => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery("values", getValues, {
    initialData: values,
  });

  const mutation = useMutation(
    async (item: any) => {
      const { data } = await deleteValuesById(item?._id);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("values");
      },
    }
  );

  return (
    <div className="flex space-x-2 justify-center m-4 items-center h-screen flex-col">
      {isLoading
        ? "Loading..."
        : data.map((item: any) => (
            <div key={item._id} className="flex flex-col text-2xl mb-3">
              <h1>First name : {item.firstName}</h1>
              <h1>Last name :{item.lastName}</h1>
              <h1>Password : {item.password}</h1>
              {item?.address && <h1>Address : {item?.address}</h1>}
              {item?.zipCode && <h1>Zip Code : {item?.zipCode}</h1>}
              <Link href={`/${item._id}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Update
                </button>
              </Link>
              <button
                onClick={async () => await mutation.mutateAsync(item)}
                className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                delete
              </button>
              <hr />
            </div>
          ))}

      {data.length === 0 && (
        <Link href="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Back
          </button>
        </Link>
      )}
    </div>
  );
};

export default UserCom;
