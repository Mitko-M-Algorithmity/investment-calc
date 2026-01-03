import "./App.css";
import { useState, type ChangeEvent } from "react";
import UserInput from "./components/UserInput";
import TableResult from "./components/TableResult";
import { type InvestmentData, type InputTypes } from "./contracts/contracts";

const INITIAL_INVESTMENT_DATA: InvestmentData = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 1,
};

function App() {
  console.log("App rendered");
  const [investmentData, setInvestmentData] = useState({
    ...INITIAL_INVESTMENT_DATA,
  });
  console.log(investmentData);

  function handleInvestmentChange(
    event: ChangeEvent<HTMLInputElement>,
    inputType: InputTypes
  ) {
    const updatedInvestment = { ...investmentData };
    const newData = Number(event.target.value);

    switch (inputType) {
      case "Initial":
        updatedInvestment.initialInvestment = newData;
        break;
      case "Annual":
        updatedInvestment.annualInvestment = newData;
        break;
      case "Duration":
        updatedInvestment.duration = newData;
        break;
      case "Return":
        updatedInvestment.expectedReturn = newData;
        break;
      default:
        console.log(event);
        break;
    }

    setInvestmentData(updatedInvestment);
  }

  let result = <p>Please enter valid data!</p>;

  if (investmentData.duration >= 1) {
    result = <TableResult data={investmentData} />;
  }

  return (
    <>
      <UserInput
        onInvestmentChange={handleInvestmentChange}
        data={investmentData}
      />
      {result}
    </>
  );
}

export default App;
