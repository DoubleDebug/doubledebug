import { createContext } from 'react';

export const OSContext = createContext<{
  isStartMenuShown: boolean;
  setIsStartMenuShown: (s: boolean) => void;
  selectedIconId: string | undefined;
  setSelectedIconId: (i: string | undefined) => void;
  activeWindowId: string | undefined;
  setActiveWindowId: (w: string | undefined) => void;
  openedWindows: Project[];
  setOpenedWindows: (w: Project[]) => void;
}>({
  isStartMenuShown: false,
  setIsStartMenuShown: () => {},
  selectedIconId: undefined,
  setSelectedIconId: () => {},
  openedWindows: [],
  setOpenedWindows: () => {},
  activeWindowId: undefined,
  setActiveWindowId: () => {},
});
