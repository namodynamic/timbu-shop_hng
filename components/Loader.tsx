import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex items-center justify-center mt-20 w-full">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading..."
        width={50}
        height={50}
      />
    </div>
  );
};

export default Loader;
