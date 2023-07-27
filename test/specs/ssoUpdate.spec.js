const Utils = require('../utils/readData');
describe("Capture web performance speed for NYL", () => {
  before(async () => {
    await browser.enablePerformanceAudits();
  });

  it("SSO Update Profile page - Capture metrics data", async () => {
    // Read the datafile to get the environment name ex: dev/QA/stage
    data=await Utils.readData();

    await browser.url("https://sso.nylservices.net/login?clientId=5td2qm6ha7d0uhqifiqn6s49dc&callbackUri=/update-profile&secondCallbackUri=false");
    await $('#sso-email').setValue(data.emailid)
    await $('//input[@name="password"]').setValue(data.pwd)
    await $('//button[@class="nyl-button"]').click()

    let metrics = await browser.getMetrics();
    console.log("Metrics - SSO Update Profile page - 1:", metrics);
    });
  //   it("SSO Update Profile page - Capture metrics data", async () => {
  //   await browser.url("https://sso.nylservices.net/update-profile?clientId=5td2qm6ha7d0uhqifiqn6s49dc&callbackUri=/update-profile&secondCallbackUri=false");

  //   let metrics = await browser.getMetrics();
  //   console.log("Metrics - SSO Update Profile page - 2:", metrics);
  // });
  // after(async () => {
  //   await browser.disablePerformanceAudits();
  // });
});