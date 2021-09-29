import React from "react";
import { mainPicture } from "../../images";
import { AllHeaders } from "..";

export default function MainPicture() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: `url(${mainPicture.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`mainPictureDiv`}
    >
      <AllHeaders header="The Nail Lab" />
    </div>
  );
}
