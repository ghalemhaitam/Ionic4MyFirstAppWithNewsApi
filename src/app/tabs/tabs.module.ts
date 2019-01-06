import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TabsPageRoutingModule } from './tabs.router.module';
import { NewsPageModule } from '../news/news.module';
import { NewsSinglePageModule } from '../news-single/news-single.module';
import { TabsPage } from './tabs.page';
import { AboutPage } from '../about/about.page';
import { AboutPageModule } from '../about/about.module';
import { ContactPageModule } from '../contact/contact.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    NewsPageModule,
    NewsSinglePageModule,
    AboutPageModule,
    ContactPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
