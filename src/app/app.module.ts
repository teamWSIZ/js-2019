import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { NiceFooterComponent } from './nice-footer/nice-footer.component';
import { GamesComponent } from './games/games.component';
import { FormsComponent } from './forms/forms.component';
import { KalkulatorComponent } from './kalkulator/kalkulator.component';
import {FormsModule} from "@angular/forms";
import { WonderViewComponent } from './wonder-view/wonder-view.component';
import { AuctionComponent } from './zadania/auction/auction.component';
import { KantorComponent } from './zadania/kantor/kantor.component';
import { GuessComponent } from './zadania/guess/guess.component';
import { BucketGameComponent } from './zadania/bucket-game/bucket-game.component';
import { GuessNumberComponent } from './wonder-view/gry/guess-number/guess-number.component';
import { PizzaComponent } from './wonder-view/gry/pizza/pizza.component';
import { MtbShopComponent } from './mtb-shop/mtb-shop.component';
import {TournamentComponent} from "./wonder-view/gry/tournament/tournament.component";
import { CommentsComponent } from './comments/comments.component';
import {HttpClientModule} from "@angular/common/http";
import { ModalsComponent } from './modals/modals.component';
import { ResultsComponent } from './modals/results/results.component';
import { TtableviewComponent } from './modals/ttableview/ttableview.component';
import { ProblemsComponent } from './problems/problems.component';
import { Ncov2019Component } from './ncov2019/ncov2019.component';
import { NcovComponent } from './ncov/ncov.component';
import {ChartsModule} from "ng2-charts";
import { ImageViewComponent } from './games/image-view/image-view.component';
import { EgzaminComponent } from './egzamin/egzamin.component';
import { AlgoComponent } from './algo/algo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    NiceFooterComponent,
    GamesComponent,
    FormsComponent,
    KalkulatorComponent,
    WonderViewComponent,
    AuctionComponent,
    KantorComponent,
    GuessComponent,
    BucketGameComponent,
    GuessNumberComponent,
    PizzaComponent,
    MtbShopComponent,
    TournamentComponent,
    CommentsComponent,
    ModalsComponent,
    ResultsComponent,
    TtableviewComponent,
    ProblemsComponent,
    Ncov2019Component,
    NcovComponent,
    ImageViewComponent,
    EgzaminComponent,
    AlgoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
