export interface Insurance {
  id: string;
  provider: string;
  type: 'Health' | 'Term' | 'Vehicle';
  coverAmount: number;
  premium: number;
  renewalDate: string;
}

export const mockInsurance: Insurance[] = [
  {
    id: "ins_1",
    provider: "HDFC Ergo",
    type: "Health",
    coverAmount: 1000000, // 10L
    premium: 12500,
    renewalDate: "2027-01-15"
  },
  {
    id: "ins_2",
    provider: "LIC",
    type: "Term",
    coverAmount: 10000000, // 1Cr
    premium: 15000,
    renewalDate: "2027-03-10"
  }
];
