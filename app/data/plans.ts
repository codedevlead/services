export const plans: PlansType[] = [
  {
    id: "1",
    name: "Required",
    value: 1250
  },
  {
    id: "2",
    name: "Basic",
    value: 1800,
    monthlyPayment: 435,
  },
  {
    id: "3",
    name: "Plus",
    value: 2500,
    monthlyPayment: 300,
    best: true
  }
];

export type PlansType = {
  id: string;
  name: string;
  value: number;
  monthlyPayment?: number;
  best?: boolean;
}