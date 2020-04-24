import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'restaurant',
        loadChildren: () => import('./restaurant/restaurant.module').then(m => m.CoopcycleappRestaurantModule)
      },
      {
        path: 'cooperative',
        loadChildren: () => import('./cooperative/cooperative.module').then(m => m.CoopcycleappCooperativeModule)
      },
      {
        path: 'basket',
        loadChildren: () => import('./basket/basket.module').then(m => m.CoopcycleappBasketModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.CoopcycleappProductModule)
      },
      {
        path: 'payment',
        loadChildren: () => import('./payment/payment.module').then(m => m.CoopcycleappPaymentModule)
      },
      {
        path: 'course',
        loadChildren: () => import('./course/course.module').then(m => m.CoopcycleappCourseModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.CoopcycleappOrderModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class CoopcycleappEntityModule {}
