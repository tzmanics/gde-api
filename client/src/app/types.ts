export type GDE = {
  id: number;
  name: string;
  email: string;
  location: string;
  website: string;
  twitter: string;
}

export type Query ={
  allGDEs: GDE[];
}
