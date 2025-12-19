import { type InvestmentData } from "../contracts/contracts";
import { calculateInvestmentResults, formatter } from "../utils/investment";

type TableProps = {
  data: InvestmentData;
};

export default function TableResult({ data }: TableProps) {
  const dataToDisplay = calculateInvestmentResults(data);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {dataToDisplay.map((e, i) => (
          <tr key={e.year}>
            <td>{e.year}</td>
            <td>{formatter.format(Math.round(e.valueEndOfYear))}</td>
            <td>{formatter.format(Math.round(e.interest))}</td>
            <td>
              {formatter.format(
                Math.round(
                  e.interest + (i > 0 ? dataToDisplay[i - 1].interest : 0)
                )
              )}
            </td>
            <td>
              {formatter.format(
                Math.round(
                  e.valueEndOfYear -
                    Math.round(
                      e.interest + (i > 0 ? dataToDisplay[i - 1].interest : 0)
                    )
                )
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
