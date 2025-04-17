import api from './api';

export const getCheckListItems = () => api.get("/checklistitem/get");
export const addCheckListItem = (data) => api.post("/checklistitem/add", data);
export const deleteCheckListItem = (id) => api.delete(`/checklistitem/delete/${id}`);
// export const updateCheckListItem = (id, data) => api.put(`/checklistitem/update/${id}`, data);