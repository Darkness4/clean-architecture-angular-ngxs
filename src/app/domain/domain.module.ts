import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { DataModule } from '../data/data.module';

@NgModule({
  imports: [CommonModule, CoreModule, DataModule],
  declarations: [],
  exports: []
})
export class DomainModule {}
