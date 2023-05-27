import { create } from "zustand";

import type { MenuProps } from "types/types";

export const useMenuStore = create<MenuProps>((set) => ({
	toggleMenu: false,
	showNav: false,
	setMenu: (toggleMenu) => set({ toggleMenu }),
	setNav: (showNav) => set({ showNav }),
}));
