import { create } from 'zustand';

type AppStore = {
  dark: boolean;
  disabled: boolean;

  switchMode: () => void;
  switchDisabled: () => void;
};

export const useAppStore = create<AppStore>()((set) => ({
  dark: true,
  disabled: false,

  switchMode: () => set((state) => ({ dark: !state.dark })),
  switchDisabled: () => set((state) => ({ disabled: !state.disabled })),
}));
