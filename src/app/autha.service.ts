import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthaService {
  private apiUrl = 'https://projeto-integrador-1v4i.onrender.com/auth/admin';

  constructor(private http: HttpClient) {}

  login(adminEmail: string, adminPassword: string): Observable<any> {
    const payload = {
      adminEmail,
      adminPassword
    };
    return this.http.post<any>(this.apiUrl, payload);
  }
}
