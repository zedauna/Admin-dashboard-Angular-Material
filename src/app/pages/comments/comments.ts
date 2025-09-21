import {Component, computed, effect, inject, output, signal,} from '@angular/core';
import {CommentsService} from '../../services/comments/comments-service';
import {InfoCard} from '../../components/info-card/info-card';
import {MatCard} from '@angular/material/card';
import {CommentsList} from '../../components/comments-list/comments-list';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-comments',
  standalone:true,
  imports: [
    InfoCard,
    MatCard,
    CommentsList,
    FormsModule,
  ],
  templateUrl: './comments.html',
  styleUrl: './comments.scss'
})
export class Comments {
  private CommentsService=inject(CommentsService);

  selectedCommentsId=signal<number>(0);

  onCommentSelected(id: number) {
    this.selectedCommentsId.set(id);
    this.CommentsService._updateSelectedCommentsId(id);
  }

  commentsJson=computed(()=>{
    return this.CommentsService.commentsJson();
  })

  total=computed(()=>{
    return this.commentsJson().total
  });
  limit=computed(()=>{
    return this.commentsJson().limit
  });
  skip=computed(()=>{
    return this.commentsJson().skip
  });

  comments=computed(()=>{
    return this.commentsJson().comments
  });

  likes=computed(()=>{
    const arrayLikes=[...new Set(this.comments().map((c)=> c.likes))];
    return arrayLikes.sort((a,b)=> b - a)
  })

  commentsIsLoading=computed(()=>{
    return this.CommentsService.commentsIsLoading();
  })

  selectedComments=computed(()=>{
    return this.CommentsService.selectedCommentsJson()
  })

  constructor(){
    effect(() => {
      //console.table(this.commentsJson().comments);
      console.log(this.selectedCommentsId());
      console.table(this.selectedComments());
    });
  }

}
