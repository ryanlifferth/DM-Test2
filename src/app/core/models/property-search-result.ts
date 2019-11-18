import { Address } from './address';

export class PropertySearchResult {
    address: Address;
    apn?: string;
    mlsNumber?: string;
    lotSize?: number;
    squareFeet: string;
    yearBuilt: number;
    bedroomCount: number;
    bathroomCount: number;
    style: string;
    type: string;

    propertyFields?: Map<string, string>;
}
