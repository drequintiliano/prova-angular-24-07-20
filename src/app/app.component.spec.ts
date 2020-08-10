import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TitleComponent } from './title/title.component';
import {
	MatFormFieldModule,
	MatInputModule
  } from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({      
      imports: [      
        MatTableModule,
        MatInputModule,
        MatFormFieldModule, 
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule      
      ],       
      declarations: [
        AppComponent,
        TitleComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'teste-helpper'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('teste-helpper');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('teste-helpper app is running!');
  });
});
