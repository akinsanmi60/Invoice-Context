import localforage from "localforage";

export const saveLocaleData = async (key: string, data: any) => {
  try {
    await localforage.setItem(key, data);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const retrieveLocalData = async (key: any) => {
  try {
    const data = await localforage.getItem(key);
    return data;
  } catch (e) {
    console.log(e);
    return "";
  }
};
