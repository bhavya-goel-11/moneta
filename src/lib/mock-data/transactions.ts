export interface Transaction {
  id: string;
  date: string;
  amount: number;
  currency: string;
  merchant: string;
  category: 'Food' | 'Transport' | 'Utilities' | 'Rent' | 'Shopping' | 'Transfer';
  type: 'Debit' | 'Credit';
  method: 'UPI' | 'Card' | 'Transfer';
  accountId: string; // References BankAccount or CreditCard ID
}

export const mockTransactions: Transaction[] = [
  {
    id: "txn_1",
    date: "2026-07-14T08:30:00Z",
    amount: 350,
    currency: "INR",
    merchant: "Swiggy",
    category: "Food",
    type: "Debit",
    method: "UPI",
    accountId: "acc_1"
  },
  {
    id: "txn_2",
    date: "2026-07-13T10:15:00Z",
    amount: 25000,
    currency: "INR",
    merchant: "Landlord",
    category: "Rent",
    type: "Debit",
    method: "UPI",
    accountId: "acc_2"
  },
  {
    id: "txn_3",
    date: "2026-07-12T14:45:00Z",
    amount: 1450,
    currency: "INR",
    merchant: "Amazon",
    category: "Shopping",
    type: "Debit",
    method: "Card",
    accountId: "card_3"
  }
];
