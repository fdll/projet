import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Salarie } from '../interfaces/salarie.interface';

@Injectable({
  providedIn: 'root',
})
export class SalariesService {
  constructor(private http: HttpClient) {}

  chercherSalaries(): Observable<Salarie[]> {
    return this.http.get('https://randomuser.me/api/?results=10').pipe(
      map((response: any) => {
        const salaries = response.results.map((salarie: any) => {
          return {
            title: salarie.name.title,
            firstName: salarie.name.first,
            lastName: salarie.name.last,
            email: salarie.email,
          };
        });
        return salaries;
      })
    );
  }
}
