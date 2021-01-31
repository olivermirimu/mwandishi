import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { EditorComponent } from './editor/editor.component';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [PostComponent, EditorComponent, CommentsComponent],
  imports: [
    CommonModule
  ]
})
export class BlogsModule { }
