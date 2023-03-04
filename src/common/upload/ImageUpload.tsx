/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useMemo, useRef } from "react";

type UploadProp = {
  keyName: string;
  onChangeImage: (imgValue: string) => void;
  url: string;
  className: string;
};

function ImageUpload({ keyName, onChangeImage, url, className }: UploadProp) {
  const sideClasses =
    "h-[150px] w-[150px] cursor-pointer primary-self-text flex justify-center items-center overflow-hidden mx-auto ";

  const inputRef = useRef<HTMLInputElement | null>(null);

  const classes = useMemo(() => {
    if (sideClasses) {
      return sideClasses + " " + className;
    }
    return sideClasses;
  }, [className]);

  const onClickImage = useCallback(() => {
    inputRef?.current?.click();
  }, []);

  const onFileChange = useCallback(
    (event: any) => {
      const file = event.target.files[0];

      const allowedExtensions = /(jpg|jpeg|png|svg)$/i;
      //checking the img type
      const isValid = allowedExtensions.exec(file.type);

      if (!isValid) {
        alert("Not Valid Image type");
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        onChangeImage(reader.result as string);
      };

      reader.onerror = error => error;
    },
    [onChangeImage],
  );

  return (
    <>
      <input
        ref={inputRef}
        id={keyName}
        className="hidden"
        type="file"
        onChange={onFileChange}
      />

      <div className={classes} onClick={onClickImage}>
        {url ? (
          <img
            className={"object-cover w-[70%] "}
            src={url}
            alt="upload_image"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
      </div>
    </>
  );
}

export default ImageUpload;
