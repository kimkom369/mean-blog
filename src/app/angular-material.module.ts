import { NgModule } from '@angular/core';
import { MatInputModule, MatCardModule, MatToolbarModule,
  MatExpansionModule, MatProgressSpinnerModule, MatDialogModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule
  ]

})
export class AngularMaterialModule {}
