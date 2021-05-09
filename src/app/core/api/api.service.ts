import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private store: Store, private http: HttpClient) {}

  public httpHeaderOptions(): HttpHeaders {
    // const accessToken = this.store.selectSnapshot<string>(AuthGuardSelectors.authToken(AuthGuardState));

    return new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      // Authorization: `Bearer ${accessToken}`,
    });
  }

  public get(url: string): Observable<any> {
    return this.http.get(url, {
      headers: this.httpHeaderOptions(),
    });
  }

  public post(url: string, body: any): Observable<any> {
    return this.http.post(url, body, {
      headers: this.httpHeaderOptions(),
    });
  }

  public put(url: string, body: any): Observable<any> {
    return this.http.put(url, body, {
      headers: this.httpHeaderOptions(),
    });
  }
}
