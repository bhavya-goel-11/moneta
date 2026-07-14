export interface Offer {
  id: string;
  title: string;
  description: string;
  type: 'Loan' | 'Credit Card' | 'Insurance';
  amount?: number;
  actionText: string;
}

export const mockOffers: Offer[] = [
  {
    id: "off_1",
    title: "Pre-approved Personal Loan",
    description: "Get funds instantly in your account with zero documentation.",
    type: "Loan",
    amount: 500000,
    actionText: "Check Offer"
  }
];
