import { User } from "./Authentication";

export interface  Opinion {
  id: number;
  rate: number;
  content: string;
  date: Date;
  author: User;
}

export interface Offer {
  id: number;
  title: string;
  city: string;
  maxPeople: number;
  description: string
  dailyPrice: number;
  mainImage: { url: string };
  images: {url: string}[]
  owner: {}; //TODO zmienić na usera;
  opinions: Opinion[]; //TODO zmienić na opinie
  ratings: {
    opinionsCount: number;
    rateCount: number;
  };
}
