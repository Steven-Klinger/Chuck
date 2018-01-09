import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { HeaderComponent } from './header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatMenuItem } from '@angular/material/menu/typings/menu-item';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuTrigger } from '@angular/material/menu/typings/menu-trigger';

@NgModule({
  declarations: [
    MatMenuTrigger
  ],
  imports: [  
      MatMenuModule,
      MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class HeaderModule { }
