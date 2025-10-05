import React from "react";
import Image from "next/image";

const Logo = ({ url }) => {
  return (
    <Image
      src={url}
      width={30}
      height={30}
      layout="responsive"
      className="rounded"
      alt="work"
    />
  );
};

export default Logo;
