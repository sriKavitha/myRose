describe("Capture web performance speed for NYL", () => {
  before(async () => {
    await browser.enablePerformanceAudits();
  });

  it("Registration page - Capture metrics data", async () => {
    await browser.url("https://sso.nylservices.net/register?clientId=5td2qm6ha7d0uhqifiqn6s49dc&callbackUri=/update-profile&secondCallbackUri=false");

    let metrics = await browser.getMetrics();
    console.log("Metrics - SSO registration page:", metrics);

    console.log("Get Diagnostics:", await browser.getDiagnostics())
  });
  after(async () => {
    await browser.disablePerformanceAudits();
  });
});
