"use client"
import { createContext, useContext } from "react";

interface IDeviceDetectProps {
  isMobile: boolean;
}

const DeviceDetectContext = createContext<Partial<IDeviceDetectProps>>({});

export const useDeviceDetect = (): Partial<IDeviceDetectProps> =>
  useContext(DeviceDetectContext);

const DeviceDetectProvider: React.FC<{
  userAgent: string;
  children: React.ReactNode;
}> = ({ children, userAgent }) => {
  let isMobile = false;
  if (userAgent) {
    isMobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
  }

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
