import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {GamesComponent} from "./games/games.component";
import {FormsComponent} from "./forms/forms.component";
import {KalkulatorComponent} from "./kalkulator/kalkulator.component";
import {WonderViewComponent} from "./wonder-view/wonder-view.component";
import {BucketGameComponent} from "./zadania/bucket-game/bucket-game.component";
import {MtbShopComponent} from "./mtb-shop/mtb-shop.component";
import {CommentsComponent} from "./comments/comments.component";
import {ModalsComponent} from "./modals/modals.component";
import {ProblemsComponent} from "./problems/problems.component";
import {Ncov2019Component} from "./ncov2019/ncov2019.component";
import {NcovComponent} from "./ncov/ncov.component";
import {EgzaminComponent} from "./egzamin/egzamin.component";
import {AlgoComponent} from "./algo/algo.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'kalkulator', component: KalkulatorComponent },
  { path: 'games', component: GamesComponent },
  { path: 'mtb', component: MtbShopComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'bucket', component: BucketGameComponent },
  { path: 'wonder', component: WonderViewComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'modals', component: ModalsComponent },
  { path: 'problems', component: ProblemsComponent },
  { path: 'ncov', component: Ncov2019Component },
  { path: 'n2019', component: NcovComponent },
  { path: 'egzamin', component: EgzaminComponent },
  { path: 'algo', component: AlgoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
