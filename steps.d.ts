/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginPage = typeof import('./Pages/loginPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
