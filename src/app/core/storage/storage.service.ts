import { Injectable } from '@angular/core';
import { GetResult, KeysResult, Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public async keys(): Promise<KeysResult> {
    return Storage.keys();
  }

  public async getItem(key: string): Promise<GetResult> {
    return Storage.get({ key });
  }

  public async setItem(key: string, value: any): Promise<void> {
    return Storage.set({ key, value });
  }

  public async removeItem(key: string): Promise<void> {
    return Storage.remove({ key });
  }

  public async clear(): Promise<void> {
    return Storage.clear();
  }
}
