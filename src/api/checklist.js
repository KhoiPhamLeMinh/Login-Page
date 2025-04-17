import api from "./api";

export const getCheckLists = () => api.get("/checklist/get");
export const addCheckList = (data) => api.post("/checklist/add", data);
export const deleteCheckList = (id) => api.delete(`/checklist/delete/${id}`);