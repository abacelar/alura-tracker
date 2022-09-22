import IProjeto from "@/interfaces/IProjeto";
import { createStore } from "vuex";

interface Estado {
  projetos: IProjeto[];
}

export const store = createStore<Estado>({
  state: {
    projetos: [
      {
        id: new Date().toISOString(),
        nome: "TypeScript",
      },
      {
        id: new Date().toISOString(),
        nome: "Vue",
      },
      {
        id: new Date().toISOString(),
        nome: "Vuex",
      },
    ],
  },
});
