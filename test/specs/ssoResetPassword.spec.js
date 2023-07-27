describe("Capture web performance speed for NYL", () => {
  before(async () => {
    await browser.enablePerformanceAudits();
  });

  it("SSO Reset Password page - Capture metrics data", async () => {
    await browser.url("https://sso.nylservices.net/reset-password?clientId=5td2qm6ha7d0uhqifiqn6s49dc");

    let metrics = await browser.getMetrics();
    console.log("Metrics - SSO Reset Password page:", metrics);
  });
  after(async () => {
    await browser.disablePerformanceAudits();
  });
});
