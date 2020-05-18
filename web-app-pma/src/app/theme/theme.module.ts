import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { NotificationComponent } from './notification/notification.component';
import { MiddleAreaComponent } from './middle-area/middle-area.component';
import { RightAreaComponent } from './right-area/right-area.component';
import { LoadingComponent } from './stand-alone/loading/loading.component';
import { PromotionComponent } from './stand-alone/promotion/promotion.component';
import { BodyComponent } from './body/body.component';
import { ContactLinksComponent } from './contact-links/contact-links.component';
import { PieChartComponent } from './statistic/pie-chart/pie-chart.component';
import { BarChartComponent } from './statistic/bar-chart/bar-chart.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LeftMenuComponent,
    NotificationComponent,
    MiddleAreaComponent,
    RightAreaComponent,
    LoadingComponent,
    PromotionComponent,
    BodyComponent,
    ContactLinksComponent,
    PieChartComponent,
    BarChartComponent,
    SearchBarComponent,
    SearchResultComponent,
    DarkModeComponent,
    BannerComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    NavbarComponent,
    LeftMenuComponent,
    NotificationComponent,
    MiddleAreaComponent,
    RightAreaComponent,
    LoadingComponent,
    PromotionComponent,
    BodyComponent,
    PieChartComponent,
    BarChartComponent,
    NotificationComponent,
    SearchBarComponent
  ]
})
export class ThemeModule { }
