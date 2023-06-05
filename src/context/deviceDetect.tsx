"use client"
import { checkIfMobile } from "@/utils/userAgent";
import { createContext, useContext } from "react";

interface IDeviceDetectProps {
  isMobile: boolean;
}

const DeviceDetectContext = createContext<Partial<IDeviceDetectProps>>({});

export const useDeviceDetect = (): Partial<IDeviceDetectProps> =>
  useContext(DeviceDetectContext);

const DeviceDetectProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const isMobile = checkIfMobile();

  return (
    <DeviceDetectContext.Provider
      value={{
        isMobile,
      }}
    >
      {children}
    </DeviceDetectContext.Provider>
  );
};
export default DeviceDetectProvider;
