import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    FavoriteComponent,
    NewCourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
