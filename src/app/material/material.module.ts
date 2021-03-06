import { NgModule } from '@angular/core';
import { MatSliderModule} from '@angular/material/slider';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import{MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import{MatCheckboxModule}from '@angular/material/checkbox'
const materials=[
  MatSliderModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
];
@NgModule({
  imports: [materials],
  exports:[materials]
})
export class MaterialModule { }
