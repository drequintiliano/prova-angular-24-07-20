import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { TitleComponent } from './title/title.component';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CepService } from './cep.service';

@NgModule({
	declarations: [
		AppComponent,
		TitleComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		MatTableModule,
		MatInputModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	exports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		MatTableModule,
		MatInputModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	providers: [CepService],
	bootstrap: [AppComponent]
})
export class AppModule { }
