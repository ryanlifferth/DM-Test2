import { PropertySearchResult } from '../property-search-result';

export const PROPERTYSEARCHRESULTS: PropertySearchResult[] = [
  {
    address: { addressLine1: '123 Somewhere Ave', city: 'Layton', county: 'Davis', state: 'UT', zip: '84041' },
    apn: '11-222-3333',
    lotSize: 16900,
    squareFeet: '3,300',
    yearBuilt: 2002,
    bedroomCount: 6,
    bathroomCount: 3.5,
    type: 'single family',
    style: '2-story'
  }
  ,{
    address: { addressLine1: '456 Another St', city: 'Layton', county: 'Davis', state: 'UT', zip: '84041' },
    apn: '22-333-4444',
    lotSize: 16000,
    squareFeet: '3,100',
    yearBuilt: 2004,
    bedroomCount: 5,
    bathroomCount: 3,
    type: 'single family',
    style: '2-story'
  }
];
