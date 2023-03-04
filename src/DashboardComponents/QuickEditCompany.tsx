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

export type CompanyFormValue = Pick<
  AddFormValue,
  "id" | "image" | "companyName" | "billingAddress" | "companyMobile" | "email"
>;

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function QuickEditCompany() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CompanyFormValue>();

  const [isTouched, setIsTouched] = useState(false);
  const [imageFile, setImageFile] = useState("");

  const onChangeImage = useCallback((imgValue: string) => {
    setImageFile(imgValue);
  }, []);

  const submitHandler = (payload: CompanyFormValue) => {
    console.log(payload);
    setIsTouched(true);
    reset();
    setImageFile("");
  };

  const imageUploadClasses = useMemo(() => {
    const defaultStyle = "rounded-xl ";

    if (!imageFile) {
      return defaultStyle + " border-dashed border-2 border-indigo-400 ";
    }

    return defaultStyle;
  }, [imageFile]);

  return (
    <div className="bg-white rounded-xl px-0">
      <SectionTitle className="text-center"> Quick Edit Company </SectionTitle>
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
          <input
            autoComplete="nope"
            placeholder="Company Name"
            className={
              isTouched && errors.companyName
                ? defaultInputInvalidStyle
                : defaultInputStyle
            }
            {...register("companyName", { required: true })}
          />
          {errors.companyName?.type === "required" && (
            <p role="alert" className=" text-red-500 text-[10px]">
              Company Name is required
            </p>
          )}
        </div>
        <div className={errors ? "mt-2" : "mt-4"}>
          <input
            autoComplete="nope"
            placeholder="Email Address"
            className={
              errors.email && isTouched
                ? defaultInputInvalidStyle
                : defaultInputStyle
            }
            {...register("email", { required: true, pattern: EMAIL_REGEX })}
          />
          {errors.email?.type === "required" && (
            <p role="alert" className=" text-red-500 text-[10px]">
              Email is required
            </p>
          )}
        </div>
        <div className={errors ? "mt-2" : "mt-4"}>
          <input
            autoComplete="nope"
            placeholder="Mobile No"
            className={
              isTouched && errors.companyMobile
                ? defaultInputInvalidStyle
                : defaultInputStyle
            }
            {...register("companyMobile", {
              required: true,
              pattern: /^0([89][01]|70)\d{8}$/,
            })}
          />
          {errors.billingAddress?.type === "required" && (
            <p role="alert" className=" text-red-500 text-[10px]">
              Company Mobile is required
            </p>
          )}
        </div>
        <div className={errors ? "mt-2" : "mt-4"}>
          <input
            autoComplete="nope"
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

        <div className="mt-3">
          <Button block={true} types="submit">
            <span className="inline-block ml-2"> Submit </span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default QuickEditCompany;
