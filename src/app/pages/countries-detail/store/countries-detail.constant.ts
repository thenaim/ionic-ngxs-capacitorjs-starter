import { environment } from '../../../../environments/environment';

export const apiCountryDetail = (code: string) => `${environment.api}/${environment.apiVersion}/alpha?codes=${code}`;
