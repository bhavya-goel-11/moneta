export interface Investment {
  id: string;
  type: 'Mutual Fund' | 'Stock' | 'Digital Gold' | 'EPF';
  name: string;
  currentValue: number;
  investedAmount: number;
  returns: number;
  returnsPercentage: number;
}

export const mockInvestments: Investment[] = [
  {
    id: "inv_1",
    type: "Mutual Fund",
    name: "SIPs Portfolio",
    currentValue: 320000,
    investedAmount: 250000,
    returns: 70000,
    returnsPercentage: 28.0
  },
  {
    id: "inv_2",
    type: "Stock",
    name: "Direct Equity (12 stocks)",
    currentValue: 180000,
    investedAmount: 150000,
    returns: 30000,
    returnsPercentage: 20.0
  },
  {
    id: "inv_3",
    type: "Digital Gold",
    name: "24K Digital Gold",
    currentValue: 22000,
    investedAmount: 20000,
    returns: 2000,
    returnsPercentage: 10.0
  },
  {
    id: "inv_4",
    type: "EPF",
    name: "Employees' Provident Fund",
    currentValue: 460000,
    investedAmount: 400000,
    returns: 60000,
    returnsPercentage: 15.0
  }
];
