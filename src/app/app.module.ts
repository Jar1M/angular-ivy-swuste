import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListItemsModule } from '../sortable-list-items/list-items/list-items.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ListItemsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
