import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Salarie } from 'src/shared/interfaces/salarie.interface';
import { SalariesService } from 'src/shared/services/salaries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  @ViewChild('input') public el!: ElementRef<HTMLInputElement>;
  public salaries: Salarie[] = [];
  public dataSource: MatTableDataSource<Salarie> = new MatTableDataSource();
  public displayedColumns = ['titre', 'prenom', 'nom', 'email'];
  public criteres = this.displayedColumns;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public originalData: Salarie[] = [];
  public newData: Salarie[] = [];
  private subscription!: Subscription;

  constructor(private salariesService: SalariesService) {}

  ngOnInit(): void {
    this.subscription = this.salariesService
      .chercherSalaries()
      .subscribe((salaries: Salarie[]) => {
        this.dataSource.data = salaries;
        this.originalData = JSON.parse(JSON.stringify(this.dataSource.data));
        this.newData = JSON.parse(JSON.stringify(this.originalData));
        this.dataSource.paginator = this.paginator;
      });
  }

  filtrer(event: Event): void {
    let filtre = (event.target as HTMLInputElement).value;
    filtre = filtre.trim();
    filtre = filtre.toLowerCase();
    this.dataSource.filter = filtre;
  }

  dedoublonner(x: string) {
    if (x === null || x === undefined) return;
    let critere: 'title' | 'firstName' | 'lastName' | 'email' = 'title';
    if (x === 'prenom') critere = 'firstName';
    else if (x === 'nom') critere = 'lastName';
    else if (x === 'email') critere = 'email';
    for (let i = 0; i < this.newData.length; i++) {
      const str: string = this.newData[i][critere];
      for (let j = i + 1; j < this.newData.length; j++) {
        if (this.newData[j][critere] === str) {
          this.newData.splice(j, 1);
        }
      }
    }
    this.dataSource.data = JSON.parse(JSON.stringify(this.newData));
    this.newData = JSON.parse(JSON.stringify(this.originalData));
  }

  afficherTous(): void {
    this.dataSource.data = JSON.parse(JSON.stringify(this.originalData));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
