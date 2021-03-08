import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ProductsListComponent } from './components/products-list/products-list.component'
import { ProductsRoutingModule } from './products-routing.module'
import { ProductsEffects } from './state/products.effects'
import { productsFeatureKey, productsReducer } from './state/products.reducer'

@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature(productsFeatureKey, productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
})
export class ProductsModule {}
