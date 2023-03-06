import React, { useState, useCallback, useMemo } from "react";
import Skeleton from "react-loading-skeleton";
import { nanoid } from "nanoid";
import Button from "../Button/Button";

import { useAppContext } from "../../context/AppContext";
import {
  defaultInputStyle,
  defaultInputInvalidStyle,
  defaultInputLargeStyle,
  defaultSkeletonLargeStyle,
  defaultSkeletonNormalStyle,
} from "../../constants/defaultStyles";
import { useForm } from "react-hook-form";
import SectionTitle from "../SectionTitle";
import ImageUpload from "../upload/ImageUpload";

type ProductFromValue = {
  id: string;
  image: string;
  productID: string;
  name: string;
  amount: number;
};

function QuickAddProduct() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFromValue>();
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

  const submitHandler = (payload: ProductFromValue) => {
    console.log("i click");
    console.log(payload);
    reset();
    setImageFile("");
    setIsTouched(true);
  };

  return (
    <div className="bg-white rounded-xl p-4">
      <SectionTitle> Quick Add Product </SectionTitle>

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
            <div>
              <input
                autoComplete="off"
                placeholder="Product ID"
                className={
                  errors.name ? defaultInputInvalidStyle : defaultInputStyle
                }
                {...register("productID", { required: true })}
                aria-invalid={errors.productID ? "true" : "false"}
              />
              {errors.productID?.type === "required" && (
                <p role="alert" className=" text-red-500 text-[10px]">
                  Product Id is required
                </p>
              )}
            </div>
          </div>
        </div>

        <div className={errors ? "mt-2" : "mt-4"}>
          <div className="flex-1">
            <input
              autoComplete="off"
              placeholder="Product Name"
              type="text"
              className={
                errors.name ? defaultInputInvalidStyle : defaultInputStyle
              }
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
              placeholder="Amount"
              type="number"
              className={
                errors.amount ? defaultInputInvalidStyle : defaultInputStyle
              }
              {...register("amount", { required: true })}
              aria-invalid={errors.amount ? "true" : "false"}
            />
            {errors.amount?.type === "required" && (
              <p role="alert" className=" text-red-500 text-[10px]">
                Amount is required
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

export default QuickAddProduct;
