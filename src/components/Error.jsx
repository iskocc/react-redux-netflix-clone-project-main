import React from "react";
import { BiSolidError } from "react-icons/bi";

const Error = ({ info }) => {
  return (
    <div className=" mx-auto mt-40 p-5 h-fit flex flex-col items-center gap-10">
      <p className="text-center">
        Üzgünüz hoş olmayan bir durumla karşılaştık. Sanırım sorun bizde değil
        sizde :) Lütfen ulaşmaya çalıştığınz adresi kontrol edip tekrar
        deneyiniz..{" "}
      </p>
      <BiSolidError className="text-[100px] text-red-500" />
      <p className=" text-2xl font-semibold text-yellow-400">{info}</p>
    </div>
  );
};

export default Error;
