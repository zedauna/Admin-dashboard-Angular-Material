import {Component, effect, input, model, output} from '@angular/core';
import {Comment} from '../../models/comments.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-comments-list',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './comments-list.html',
  styleUrl: './comments-list.scss'
})
export class CommentsList {
  comments=input<Comment[]>([]);
  commentsIsLoading=input<boolean>(true);
  likes=input<number[]>([]);

  //Envoi de la donnée de l'enfant à parent
  selectedCommentsId=model<number>(0);

  commentSelected=output<number>();
  onSelectionChange() {
    this.commentSelected.emit(this.selectedCommentsId());
  }

  constructor() {
    effect(() => {
      //console.log(this.selectedCommentsId());
    })
  }
}
