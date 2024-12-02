import { Image } from "@nextui-org/image";

interface IHomeTrailImageProps {
  trailName: string;
}

export const HomeTrailImage = ({ trailName }: IHomeTrailImageProps) => {
  const chooseImage = (name: string) => {
    switch (name.toLowerCase()) {
      case "html5":
        return "/assets/trails/html.png";
      case "html":
        return "/assets/trails/html.png";
      case "javascript":
        return "/assets/trails/javascript.png";
      case "css":
        return "/assets/trails/css.png";
      case "sql":
        return "/assets/trails/sql.png";
      default:
        return "/assets/logo.png";
    }
  };

  return (
    <>
      <Image className="mb-2" src={chooseImage(trailName)} width={160} />
    </>
  );
};
