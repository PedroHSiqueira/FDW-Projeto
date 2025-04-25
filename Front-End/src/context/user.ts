import {create} from 'zustand';
import { UsuarioI } from '../utils/types/user';

type UsuarioStore = {
  usuario: UsuarioI;
  logar: (usuario: UsuarioI) => void;
  deslogar: () => void;
};

export const useUsuarioStore = create<UsuarioStore>((set) => ({
  usuario: {} as UsuarioI,
    logar: (usuarioLogado) => set({ usuario: usuarioLogado }),
    deslogar: () => set({ usuario: {} as UsuarioI}),
}));