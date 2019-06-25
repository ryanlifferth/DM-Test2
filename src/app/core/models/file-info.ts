import { Address } from './address';

export class FileInfo {
  id: number;
  fileName: string;
  address: Address;
  fileType: string;
  lastModified: Date;
  exportCount: number;
  exportTargets: string[]
}
