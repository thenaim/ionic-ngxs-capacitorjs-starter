import { environment } from 'src/environments/environment';

export const apiCountryDetail = (code: string) => `${environment.api}/${environment.apiVersion}/alpha?codes=${code}`;
