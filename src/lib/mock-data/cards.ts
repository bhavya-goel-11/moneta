export interface CreditCard {
  id: string;
  cardName: string;
  issuer: string;
  cardNumberMasked: string;
  outstandingBalance: number;
  availableLimit: number;
  totalLimit: number;
  dueDate: string;
}

export const mockCards: CreditCard[] = [
  {
    id: "card_1",
    cardName: "Regalia",
    issuer: "HDFC",
    cardNumberMasked: "•••• 1234",
    outstandingBalance: 15400,
    availableLimit: 384600,
    totalLimit: 400000,
    dueDate: "2026-07-25"
  },
  {
    id: "card_2",
    cardName: "Ace",
    issuer: "Axis",
    cardNumberMasked: "•••• 5678",
    outstandingBalance: 2100,
    availableLimit: 147900,
    totalLimit: 150000,
    dueDate: "2026-07-22"
  },
  {
    id: "card_3",
    cardName: "Amazon Pay",
    issuer: "ICICI",
    cardNumberMasked: "•••• 9012",
    outstandingBalance: 8750,
    availableLimit: 91250,
    totalLimit: 100000,
    dueDate: "2026-08-05"
  }
];
