export interface Product {
  name: string;
  price: number;
  amount: number;
  specification: Specification;
}

interface Specification {
  stars: number;
    votes: number
}
