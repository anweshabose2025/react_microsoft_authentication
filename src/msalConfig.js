// msalConfig.js

export const msalConfig = {
  auth: {
    clientId: "3f515280-5f90-4f62-ab6a-eeb511212967",
    authority: "https://login.microsoftonline.com/ecea507e-d964-42f3-8825-5c1b5efca41f",
    redirectUri: "http://localhost:5173"
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false
  }
};