// @ts-nocheck

import { Api } from "@utils/request";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { getValuesById } from "src/Query";

type Inputs = {
  firstName: string;
  lastName: string;
  password: string;
};

const UpdateUserCom = () => {
  const { query } = useRouter();
  const { t } = useTranslation("common");

  const mutation = useMutation(
    async (value) => {
      const { data } = await Api.post("/api/add-value", value);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("values");
      },
    }
  );

  const { data: singleValue } = useQuery(["valueById", query?.id], async () => {
    const { data } = await getValuesById(query?.id);
    return data;
  });

  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    try {
      await mutation.mutateAsync(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-400">
      <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              {t("first_name")}
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              {...register("firstName", { required: true })}
              defaultValue={singleValue?.firstName}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              {t("last_name")}
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              defaultValue={singleValue?.lastName}
              readOnly
              {...register("lastName", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              {t("password")}
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
              defaultValue={singleValue?.password}
              readOnly
              {...register("password", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              {t("address")}
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-address"
              type="address"
              placeholder="******************"
              {...register("address", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zipCode"
            >
              {t("zipCode")}
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zipCode"
              type="zipCode"
              placeholder="******************"
              {...register("zipCode", { required: true })}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-black mb-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {t("save")}
        </button>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              {t("language")}
            </label>
            <div className="relative space-x-2">
              <Link href="/" passHref>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateUserCom;
