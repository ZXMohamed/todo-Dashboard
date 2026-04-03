import { create } from "zustand";
import constValues from "../data/constValues";

const useFormsState = create((set) => ({
    forms: {
        create: {
            show: false,
            status: constValues.columns.backlog
        },
        edit: {
            show: false,
            data:null
        }
    },

    openCreateForm: (show,status) =>
        set((state) => ({
            forms: {
                create: { show,status },
                edit: { ...state.forms.edit, show:false}
            }
        })),

    openEditForm: (show,data) =>
        set((state) => ({
            forms: {
                create: { ...state.forms.create, show: false },
                edit: { show, data }
            }
        })),
}));

export default useFormsState;