import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MenuDetailFormComponent } from './menu-detail/menu-detail-form/menu-detail-form.component';

@NgModule({
  declarations: [AppComponent, MenuDetailComponent, MenuDetailFormComponent],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
