import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { SectionsComponent } from './sections.component';

@NgModule({
  declarations: [SectionsComponent, SectionComponent],
  imports: [CommonModule],
  exports: [SectionsComponent, SectionComponent],
})
export class SectionsModule {}
