import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';  
import { AppComponent } from './app/app.component';
import { FormComponent } from './app/form/form.component';
import { HomeComponent } from './app/home/home.component';
import { ApiDataComponent } from './app/api-data/api-data.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'api-data', component: ApiDataComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),  
  ],
});
