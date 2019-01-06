import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { NewsPage } from '../news/news.page';
import { NewsSinglePage } from '../news-single/news-single.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'news',
        children: [
          {
            path: '',
            component: NewsPage
           
          }
        ]
      },
      {
        path: 'news-single',
        children: [
          {
            path: '',
            component: NewsSinglePage
           
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            component: AboutPage
          }
        ]
      },
      {
        path: 'contact',
        children: [
          {
            path: '',
            component: ContactPage
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
