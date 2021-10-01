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
        backgroundAttachment: "fixed",
      }}
      className={`mainPictureDiv`}
    >
      <AllHeaders header="The Nail Lab" />
    </div>
  );
}
