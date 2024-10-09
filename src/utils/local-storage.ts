export const getStorageItem = (
  key: string,
  defaultValue?: string
): string | undefined => {
  return (
    (localStorage.getItem(key) !== null && localStorage.getItem(key)) ||
    defaultValue
  );
};

export const setStorageItem = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const removeStorageItem = (key: string): void => {
  localStorage.removeItem(key);
};

export const isTMeta = (error: any): error is TMeta => {
  return (
    typeof error === "object" &&
    error !== null &&
    "detail" in error &&
    "errorCode" in error &&
    "status" in error &&
    "title" in error
  );
};

export const isTResponse = (data: any): data is TResponse => {
  return data;
};
