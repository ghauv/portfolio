import Image from "next/image";
interface DeviceCardProps {
  showNotch?: boolean;
  image: string;
  title: string;
  borderClass?: string;
  notchClass?: string;
}

export const DeviceCard: React.FC<DeviceCardProps> = ({
  showNotch = false,
  image,
  title,
  borderClass,
  notchClass,
}) => {
  return (
    <div className="w-full relative overflow-hidden rounded-t-[0.5rem] bg-white">
      {image && (
        <Image
          src={image}
          alt={title}
          width={700}
          height={700}
          className={`w-full object-cover rounded-t-[0.5rem] ${borderClass}`}
          priority
        />
      )}
      {showNotch && (
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 h-2 rounded-b-md ${notchClass}`}
          style={{ width: "33%" }}
        />
      )}
    </div>
  );
};
