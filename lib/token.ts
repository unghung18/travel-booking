import cookie from "js-cookie";

export const getUserIdToken = () => {
  try {
    const accessToken = getCmsToken();
    if (accessToken?.userId) return accessToken?.userId;

    return null;
  } catch (e) {
    console.warn("Userid không hợp lệ:", e);
    return null;
  }
};

export const getCmsToken = (): any | null => {
  try {
    return `eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodW5nIiwic3ViIjoicm9uZ2xvbjQiLCJleHAiOjE3NjcxMDEyMjYsImlhdCI6MTc2NzAxNDgyNiwidXNlcklkIjo5NTJ9.86jHXtn7QFc8tZ8DfERq_9UkAOTV-Zo9OAu8wTmUpmhMAhaeGwtgwO8YCPGevWJEdLtKRWCDER6m-7J1fZTaCw`;
  } catch (e) {
    console.warn("Token không phải là JSON hợp lệ:", e);
    return null;
  }
};

export const setCmsToken = (val: any) => {
  if (window.location.origin.includes("localhost")) {
    return cookie.set("ACCESS_TOKEN", JSON.stringify(val));
  }
  return cookie.set("ACCESS_TOKEN", JSON.stringify(val));
};

export const removeCmsToken = () => {
  cookie.remove("ACCESS_TOKEN");
};
