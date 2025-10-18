import { DeviceCard } from "./device-card";

export enum DeviceType {
  MOBILE = "mobile",
  LAPTOP = "laptop",
}

interface DevicesFrameProps {
  type: DeviceType;
  title: string;
  image?: string;
  images?: [string, string, string];
  rounded?: string;
  border?: string;
  showNotch?: boolean;
  color?: string;
  borderClass?: string;
  notchClass?: string;
}

export const DevicesFrame: React.FC<DevicesFrameProps> = ({
  type,
  title,
  image,
  images,
  showNotch = false,
  borderClass,
  notchClass = "gray-200",
}) => {
  if (type === DeviceType.MOBILE) {
    return (
      <div className="w-full h-fit flex flex-row pt-11">
        {/* Left device */}
        <div className="flex-1 basis-1/3 aspect-[9/16] -mr-4 z-10 hover:-translate-y-4 transition-transform duration-200">
          <DeviceCard
            image={images?.[0] || "/placeholder.svg"}
            title={`${title} - 1`}
            showNotch={showNotch}
            borderClass={borderClass}
            notchClass={notchClass}
          />
        </div>

        {/* Center device (elevated) */}
        <div
          className="flex-1 basis-1/3 aspect-[9/16] z-20 -translate-y-6 hover:-translate-y-10 transition-transform duration-200 rounded-t-[1rem]"
          style={{ boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)" }}
        >
          <DeviceCard
            image={images?.[1] || "/placeholder.svg"}
            title={`${title} - 2`}
            showNotch={showNotch}
            notchClass={notchClass}
          />
        </div>

        {/* Right device */}
        <div className="flex-1 basis-1/3 aspect-[9/16] -ml-4 z-10 hover:-translate-y-4 transition-transform duration-200">
          <DeviceCard
            image={images?.[2] || "/placeholder.svg"}
            title={`${title} - 3`}
            showNotch={showNotch}
            borderClass={borderClass}
            notchClass={notchClass}
          />
        </div>
      </div>
    );
  }

  if (type === DeviceType.LAPTOP) {
    return (
      <div className="w-full flex flex-row h-fit pt-11">
        <div className="flex-1 aspect-[16/9] z-10 -translate-y-6 hover:-translate-y-10 transition-transform duration-200">
          <DeviceCard
            image={image || "/placeholder.svg"}
            title={title}
            showNotch={showNotch}
            borderClass={borderClass}
            notchClass={notchClass}
          />
        </div>
      </div>
    );
  }

  return null;
};
