export interface CreditScore {
  score: number;
  bureau: 'CIBIL' | 'Experian' | 'Equifax';
  lastUpdated: string;
  status: 'Excellent' | 'Good' | 'Fair' | 'Poor';
}

export const mockCreditScore: CreditScore = {
  score: 782,
  bureau: "CIBIL",
  lastUpdated: "2026-07-01",
  status: "Excellent"
};
