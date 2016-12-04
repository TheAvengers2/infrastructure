import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { routes } from './routes/app.routes';

import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';

@NgModule({
  id: module.id,
  imports: [
    LoginModule,
    SignupModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule{

}
