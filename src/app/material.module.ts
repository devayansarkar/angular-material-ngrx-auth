import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    exports: [
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        A11yModule,
        MatButtonModule,
        MatGridListModule,
        MatIconModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class MaterialModule { }