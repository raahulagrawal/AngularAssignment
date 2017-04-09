import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

import { ProductComponent } from './components/product.component';
import { CategoriesComponent } from './components/categories.component';
import { BrandsComponent } from './components/brands.component';
import { DashboardComponent } from './components/dashboard.component';
import { RecentPurchasesComponent } from './components/recent-purchases.component';
import { PurchaseDetailsComponent } from './components/purchase-details.component';

const appRoutes :Routes = [
	{path: 'products', component : ProductComponent},
	{path: 'categories', component : CategoriesComponent},
	{path: 'brands', component : BrandsComponent},
	{path: 'recent-purchases', component : RecentPurchasesComponent},
	{path: 'purchase-details/:productId', component : PurchaseDetailsComponent},
	{path: '**', component : DashboardComponent}
];


@NgModule({
  declarations: [
    AppComponent,
	ProductComponent,
	CategoriesComponent,
	BrandsComponent,
	DashboardComponent,
	RecentPurchasesComponent,
	PurchaseDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(appRoutes)
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
