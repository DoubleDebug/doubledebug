import { createContext } from 'react';

export const OSContext = createContext<{
  isStartMenuShown: boolean;
  setIsStartMenuShown: (s: boolean) => void;
  selectedIconId: number | undefined;
  setSelectedIconId: (i: number | undefined) => void;
  openedWindows: ProjectInfo[];
  setOpenedWindows: (w: ProjectInfo[]) => void;
  activeWindowId: number | undefined;
  setActiveWindowId: (w: number | undefined) => void;
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
