/* eslint-disable no-useless-escape */
import React, { useState, useCallback } from "react";

import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Input } from "@chakra-ui/react";
import ImageUpload from "../common/upload/ImageUpload";
import { AddFormValue } from "../types";

export type ClientFormValue = Pick<
  AddFormValue,
  "id" | "image" | "name" | "billingAddress" | "mobileNo" | "email"
>;

function TestComp() {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm<ClientFormValue>();

  const [imageFile, setImageFile] = useState("");

  const onChangeImage = useCallback((imgValue: string) => {
    setImageFile(imgValue);
  }, []);

  const submitHandler = (payload: ClientFormValue) => {
    console.log("i click");
    console.log(payload);
    reset();
    setImageFile("");
  };

  return (
    <div className="bg-white rounded-xl px-0">
      <SectionTitle className="text-center">Client Details </SectionTitle>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="mt-[15px] mb-[13px]">
          <ImageUpload
            keyName="QuickEditImageUpload"
            className=""
            url={imageFile}
            onChangeImage={onChangeImage}
          />
        </div>

        <div className="flex mt-4">
          <div className="flex-1">
            <div>
              <Input
                autoComplete="nope"
                placeholder="Name"
                {...register("name")}
                // disabled={initLoading}
              />
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex-1">
            <Input
              autoComplete="nope"
              placeholder="Email Address"
              {...register("email")}
            />
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex-1">
            <Input
              autoComplete="nope"
              placeholder="Mobile No"
              {...register("mobileNo")}
            />
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex-1">
            <Input
              autoComplete="nope"
              placeholder="Billing Address"
              {...register("billingAddress")}
            />
          </div>
        </div>

        <div className="mt-3">
          <Button block={true}>
            <span className="inline-block ml-2"> Submit </span>
          </Button>
          {/* <button>
            <span className="inline-block ml-2"> Submit </span>
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default TestComp;
