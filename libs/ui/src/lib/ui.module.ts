import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentComponent } from './shared-component/shared-component.component';
@NgModule({
  imports: [CommonModule],
  declarations: [SharedComponentComponent],
  exports: [SharedComponentComponent],
})
export class UiModule {}
