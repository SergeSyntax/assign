export const cookieSessionOptions: CookieSessionInterfaces.CookieSessionOptions = {
  // jwt is already encrypted and can't be tempered
  signed: false,
  // check that the user use https connection
  secure: false,
  maxAge: 24 * 60 * 60 * 100,
};
