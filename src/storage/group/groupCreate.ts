import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLETION } from "@storage/storageConfig";

export async function groupCreate(newGroup: string) {
  try {
    await AsyncStorage.setItem(GROUP_COLLETION, newGroup);
  } catch (error) {
    throw error;
  }
}
