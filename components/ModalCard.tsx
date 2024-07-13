import Image from "next/image";

type ModalCardProps = {
  imgURL: {
    thumbnail: string;
    bigPhoto: string;
  };
  changeBigProductPhoto: (photo: string) => void;
  bigProductPhoto: string;
};

const ModalCard = ({
  imgURL,
  changeBigProductPhoto,
  bigProductPhoto,
}: ModalCardProps) => {
  const handleClick = () => {
    if (bigProductPhoto !== imgURL.bigPhoto) {
      changeBigProductPhoto(imgURL.bigPhoto);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigProductPhoto === imgURL.bigPhoto
          ? "border-[#D4A373]"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="">
        <Image
          src={imgURL.thumbnail}
          alt="Product thumbnail"
          width={100}
          height={90}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ModalCard;
