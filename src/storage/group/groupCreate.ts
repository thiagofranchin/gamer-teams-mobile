import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { GROUP_COLLETION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll(); // Pega os grupos armazenados

    const groupAlreadyExists = storedGroups.includes(newGroup); // Verifica se grupo já existe

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome.");
    }

    const storage = JSON.stringify([...storedGroups, newGroup]); // Passa tudo para string

    await AsyncStorage.setItem(GROUP_COLLETION, storage); // Set o novo valor na Key (key, value)
  } catch (error) {
    throw error;
  }
}
