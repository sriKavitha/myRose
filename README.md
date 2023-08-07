1. project setup
  a. npm i
2. Testcase execution. The results will be saved into results folder:
   a. npx wdio --spec test/specs/ssoLogin.spec.js | tee results/Apr21/ssoLogin_result3.txt
   b. npx wdio --spec test/specs/ssoRegistration.spec.js | tee results/Apr21/ssoRegistration_result1.txt
   c. npx wdio --spec test/specs/ssoResetPassword.spec.js | tee results/Apr21/ssoResetPassword_result1.txt
   d. npx wdio --spec test/specs/ssoUpdate.spec.js | tee results/Apr21/ssoUpdate_result1.txt
3. Just testcase execution:
   a. npx wdio --spec test/specs/ssoLogin.spec.js 
