import { NgModule } from '@angular/core';
import { MatSliderModule} from '@angular/material/slider';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import{MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import{MatCheckboxModule}from '@angular/material/checkbox'
import {MatCardModule} from'@angular/material/card';
import {MatFormFieldModule} from'@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'; 
import {MatDialogModule} from '@angular/material/dialog';
const materials=[
  MatSliderModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDialogModule,
];
@NgModule({
  imports: [materials],
  exports:[materials]
})
export class MaterialModule { }
