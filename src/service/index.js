import axios from "axios";
let token = localStorage.getItem('token');

const apiClient = axios.create({
    baseURL: "https://excursion.pi.mirea.ru/api",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    timeout: 10000,
});

export const api = {
    getAllEquipments(complexityID) {
        return apiClient.get(`/equipment`, complexityID);
    },
    getEquipment(equipmentID) {
        return apiClient.get(`/equipment/${equipmentID}`);
    }
}
// export const api = {
//     getAllLevels() {
//         return apiClient.get(`/complexity`);
//     },
//     getAllEquipments(complexityID) {
//         return apiClient.get(`/equipment`, complexityID);
//     },
//     getEquipment(equipmentID) {
//         return apiClient.get(`/equipment/${equipmentID}`);
//     },


//     postNewApplication(data) {
//         return apiClient.post(`/applications`, data);
//     },
//     updateApplication({ appId, application }) {
//         return apiClient.put(`/applications/${appId}`, application);
//     },
//     deleteApplication(appId) {
//         return apiClient.delete(`/applications/${appId}`);
//     }
// }