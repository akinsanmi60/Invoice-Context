/* eslint-disable no-useless-escape */
import React, { useState, useCallback, useMemo } from "react";
import Skeleton from "react-loading-skeleton";
import { nanoid } from "nanoid";
import {
  defaultInputStyle,
  defaultInputInvalidStyle,
} from "../constants/defaultStyles";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button/Button";

import { useForm } from "react-hook-form";
import ImageUpload from "../common/upload/ImageUpload";
import { AddFormValue } from "../types";

export type ClientFormValue = Pick<
  AddFormValue,
  "id" | "image" | "name" | "billingAddress" | "mobileNo" | "email"
>;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

type Props = {
  pageType?: string;
};

function QuickAddClient({ pageType }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ClientFormValue>();
  const [imageFile, setImageFile] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const onChangeImage = useCallback((imgValue: string) => {
    setImageFile(imgValue);
  }, []);

  const imageUploadClasses = useMemo(() => {
    const defaultStyle = "rounded-xl ";

    if (!imageFile) {
      return defaultStyle + " border-dashed border-2 border-indigo-400 ";
    }

    return defaultStyle;
  }, [imageFile]);

  const submitHandler = (payload: ClientFormValue) => {
    console.log("i click");
    console.log(payload);
    reset();
    setImageFile("");
    setIsTouched(true);
  };

  return (
    <div
      className={pageType === "clientslist" ? "" : "bg-white rounded-xl px-0"}
    >
      <SectionTitle className="text-center">
        {pageType === "clientslist" ? "Quick Add Client" : "Client Details "}
      </SectionTitle>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="mt-[15px] mb-[13px]">
          <ImageUpload
            keyName="QuickEditImageUpload"
            className={imageUploadClasses}
            url={imageFile}
            onChangeImage={onChangeImage}
          />
        </div>

        <div className={errors ? "mt-2" : "mt-4"}>
          <div className="flex-1">
            <input
              autoComplete="off"
              className={
                errors.name ? defaultInputInvalidStyle : defaultInputStyle
              }
              placeholder="Name"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && (
              <p role="alert" className=" text-red-500 text-[10px]">
                Name is required
              </p>
            )}
          </div>
        </div>
        <div className={errors ? "mt-2" : "mt-4"}>
          <div className="flex-1">
            <input
              autoComplete="off"
              placeholder="Email Address"
              className={
                errors.email ? defaultInputInvalidStyle : defaultInputStyle
              }
              {...register("email", {
                required: true,
                pattern: EMAIL_REGEX,
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === "required" && (
              <p role="alert" className=" text-red-500 text-[10px]">
                Email is required
              </p>
            )}
          </div>
        </div>
        <div className={errors ? "mt-2" : "mt-4"}>
          <div className="flex-1">
            <input
              autoComplete="off"
              placeholder="Mobile No"
              className={
                errors.mobileNo ? defaultInputInvalidStyle : defaultInputStyle
              }
              {...register("mobileNo", {
                required: true,
                pattern: /^0([89][01]|70)\d{8}$/,
              })}
              aria-invalid={errors.mobileNo ? "true" : "false"}
            />
            {errors.mobileNo?.type === "required" && (
              <p role="alert" className=" text-red-500 text-[10px]">
                Mobile Number is required
              </p>
            )}
          </div>
        </div>
        <div className={errors ? "mt-2" : "mt-4"}>
          <div className="flex-1">
            <input
              autoComplete="off"
              placeholder="Billing Address"
              className={
                errors.billingAddress
                  ? defaultInputInvalidStyle
                  : defaultInputStyle
              }
              {...register("billingAddress", { required: true })}
              aria-invalid={errors.billingAddress ? "true" : "false"}
            />
            {errors.billingAddress?.type === "required" && (
              <p role="alert" className=" text-red-500 text-[10px]">
                Bill Address is required
              </p>
            )}
          </div>
        </div>

        <div className="mt-3">
          <Button block={true} types="submit">
            <span className="inline-block ml-2"> Submit </span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default QuickAddClient;
