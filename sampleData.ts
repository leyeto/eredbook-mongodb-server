type Person = {
  firstName: string;
  lastName: string;
  middleName?: string;
  dateOfBirth: Date;
  gender: "Male" | "Female";
  address: string;
  country: string;
  city: string;
  contactNumber: string;
  contactEmail: string;
};

type Child = Person & {
  hospitalOfBirth: string;
  primaryCarers: Parent[];
  gestation: number;
  birthWeightInKg: number;
  birthHeightInCm: number;
  GP: string;
  weights: Weight[];
};

type Weight = {
  dateWeighted: Date;
  age?: number;
  weightInKg?: number;
  heightInCm?: number;
  Clinician: string;
};

type Clinician = Person & {
  role: string;
  badgeNumber: string;
  isActive: boolean;
};
type Parent = Person & {
  children: Child[];
};
