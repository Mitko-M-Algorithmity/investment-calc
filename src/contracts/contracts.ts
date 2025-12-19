export type InvestmentData = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

export type InputTypes = "Initial" | "Annual" | "Return" | "Duration";
