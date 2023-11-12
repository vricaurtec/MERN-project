import api from "./apiConfig.js";

export const getCharacters = async () => {
  try {
    const response = await api.get("/characters");
    return response.data;
  } catch (error) {
    console.error("Error: Getting all Characters: ", error);
  }
};

export const getCharacter = async (id) => {
  try {
    const response = await api.get(`/characters/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error: Getting one Character: ", error);
  }
};

export const createCharacter = async (characterData) => {
  try {
    const response = await api.post("/characters", characterData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editCharacter = async (id, characterData) => {
  try {
    const response = await api.put(`/characters/${id}`, characterData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCharacter = async (id) => {
  try {
    const response = await api.delete(`/characters/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
