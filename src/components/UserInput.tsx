import type { ChangeEvent } from "react";
import { type InvestmentData } from "../contracts/contracts";

type InputTypes = "Initial" | "Annual" | "Return" | "Duration";

type UserInputProps = {
  onInvestmentChange: (
    event: ChangeEvent<HTMLInputElement>,
    inputTpes: InputTypes
  ) => void;
  data: InvestmentData;
};
console.log("Input rendered");
export default function UserInput({
  onInvestmentChange,
  data,
}: UserInputProps) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial investment</label>
          <input
            type="number"
            key="initial-investment"
            required
            id="initial-investment"
            defaultValue={data.initialInvestment}
            onChange={(event) => onInvestmentChange(event, "Initial")}
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual investment</label>
          <input
            type="number"
            key="annual-investment"
            required
            id="annual-investment"
            defaultValue={data.annualInvestment}
            onChange={(event) => onInvestmentChange(event, "Annual")}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected return</label>
          <input
            type="number"
            required
            id="expected-return"
            key="expected-return"
            defaultValue={data.expectedReturn}
            onChange={(event) => onInvestmentChange(event, "Return")}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            required
            key="duration"
            id="duration"
            defaultValue={data.duration}
            onChange={(event) => onInvestmentChange(event, "Duration")}
          />
        </p>
      </div>
    </div>
  );
}
