export interface User {
  id: string;
  name: string;
  age: number;
  profession: string;
  location: string;
  avatarUrl?: string;
}

export const mockUser: User = {
  id: "u_1",
  name: "Aditya Rao",
  age: 28,
  profession: "Product Manager",
  location: "Bangalore"
};
