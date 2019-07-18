import { Address } from './address';

export class PropertySearchResult {
  address: Address;
  apn?: string;
  mlsNumber?: string;
  lotSize: string;
  squareFeet: string;
  yearBuilt: number;
  bedroomCount: number;
}
