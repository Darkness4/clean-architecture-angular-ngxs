import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [CommonModule, CoreModule, HttpClientModule],
  declarations: [],
  exports: []
})
export class DataModule {}
