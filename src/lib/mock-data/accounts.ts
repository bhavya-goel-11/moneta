export interface BankAccount {
  id: string;
  bankName: string;
  accountType: 'Savings' | 'Salary' | 'Current';
  accountNumberMasked: string;
  balance: number;
  currency: string;
}

export const mockAccounts: BankAccount[] = [
  {
    id: "acc_1",
    bankName: "HDFC",
    accountType: "Savings",
    accountNumberMasked: "•••• 4567",
    balance: 184320,
    currency: "INR"
  },
  {
    id: "acc_2",
    bankName: "ICICI",
    accountType: "Salary",
    accountNumberMasked: "•••• 8901",
    balance: 42150,
    currency: "INR"
  }
];
