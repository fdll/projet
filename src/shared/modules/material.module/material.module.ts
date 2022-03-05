import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

const MATERIALS = [
  MatButtonModule,
  MatTabsModule,
  MatStepperModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatChipsModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
];
@NgModule({
  imports: MATERIALS,
  exports: MATERIALS,
})
export class MaterialModule {}
