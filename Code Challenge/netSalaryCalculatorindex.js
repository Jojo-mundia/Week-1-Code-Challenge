function calculateNetSalary(basicSalary, benefits) {
  //This is the calculation of the Gross salary and Payee
  let grossSalary = basicSalary + benefits;

  let payee = 0;
  if (grossSalary <= 24000) {
    payee = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
    payee = 2400 + (grossSalary - 24000) * 0.25;
  } else if (grossSalary <= 500000) {
    payee = 2400 + 8333 * 0.25 + (grossSalary - 32333) * 0.3;
  } else if (grossSalary <= 800000) {
    payee = 2400 + 8333 * 0.25 + 467667 * 0.3 + (grossSalary - 500000) * 0.325;
  } else {
    payee =
      2400 +
      8333 * 0.25 +
      467667 * 0.3 +
      300000 * 0.325 +
      (grossSalary - 800000) * 0.35; // This is the calculation of the 35% above 800,000
  }
}
