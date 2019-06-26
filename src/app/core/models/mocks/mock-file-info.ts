import { FileInfo } from '../file-info';
import { Address } from '../address';


export const FILEINFOS: FileInfo[] = [
  { id: 1, fileName: '123-45-6789', address: { addressLine1: '929 S Arbor Way', addressLine2: '', city: 'Layton', state: 'UT', zip: '84041' }, fileType: '1004', lastModified: new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 3)), exportCount: 0, exportTargets: ['ACI'] },
  { id: 2, fileName: '456-78-9123', address: { addressLine1: '325 E Gordon Ave.', addressLine2: '', city: 'Layton', state: 'UT', zip: '84041' }, fileType: '1073', lastModified: new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 49)), exportCount: 4, exportTargets: ['a la mode'] },
  { id: 3, fileName: '789-12-3456', address: { addressLine1: '498 W 2457 N', addressLine2: '', city: 'Layton', state: 'UT', zip: '84041' }, fileType: '1004', lastModified: new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 95)), exportCount: 2, exportTargets: ['a la mode'] },
  { id: 4, fileName: '789-12-3456', address: { addressLine1: '765 E Gordon Ave.', addressLine2: '', city: 'Layton', state: 'UT', zip: '84041' }, fileType: '1099', lastModified: new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 116)), exportCount: 3, exportTargets: ['ACI'] },
  { id: 5, fileName: '654-78-3219', address: { addressLine1: '2939 N 725 W', addressLine2: '', city: 'Layton', state: 'UT', zip: '84041' }, fileType: '1004', lastModified: new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 260)), exportCount: 1, exportTargets: ['ACI'] },
  { id: 6, fileName: '987-32-1654', address: { addressLine1: '1435 N Hill Field Rd', addressLine2: '', city: 'Layton', state: 'UT', zip: '84041' }, fileType: '1004', lastModified: new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 750)), exportCount: 2, exportTargets: ['ACI'] },
  { id: 7, fileName: '122-44-9877', address: { addressLine1: '2900 N 1100 W', addressLine2: '', city: 'Layton', state: 'UT', zip: '84041' }, fileType: '1099', lastModified: new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 3222)), exportCount: 2, exportTargets: ['a la mode'] },
  { id: 8, fileName: '546-88-5555_urar', address: { addressLine1: '2421 N 490 W', addressLine2: '', city: 'Layton', state: 'UT', zip: '84041' }, fileType: '1004', lastModified: new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 9222)), exportCount: 3, exportTargets: ['ACI'] }
];
