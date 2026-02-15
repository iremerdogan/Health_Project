Feature('login');

Scenario('Login test',  ({ I, loginPage }) => {
loginPage.login();
});
