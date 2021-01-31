import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostComponent } from '../blogs/post/post.component';

@NgModule({
  declarations: [FooterComponent, NavComponent, PostComponent],
  imports: [CommonModule],
})
export class SharedModule {}
