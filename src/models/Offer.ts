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
  opinions: {}; //TODO zmienić na opinie
  ratings: {
    opinionsCount: number;
    rateCount: number;
  };
}
