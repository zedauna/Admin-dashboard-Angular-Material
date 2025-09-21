import {computed, inject, Injectable, model, signal, Signal} from '@angular/core';
import {HttpClient, HttpErrorResponse, httpResource} from '@angular/common/http';
import {apiUrlComments} from '../../utils/linksApi';
import {CommentsJSON, emptyCommentsJson,Comment} from '../../models/comments.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private readonly apiUrl = apiUrlComments;

  private _selectedCommentsId = signal<number>(0);

  _updateSelectedCommentsId(commentId: number) {
    this._selectedCommentsId.set(commentId);
  }

  private _commentsJson = httpResource<CommentsJSON>(()=>this.apiUrl, {
    defaultValue: emptyCommentsJson
  });

  commentsJson=computed(()=>this._commentsJson.value());
  commentsJsonError = computed(()=>{
    const error=this._commentsJson.error as Signal<HttpErrorResponse | undefined>;
    return error()? error() : undefined;
  });
  commentsStatus = computed(()=>this._commentsJson.status());
  commentsIsLoading = computed(()=>this._commentsJson.isLoading());

  //request by id
  selectedCommentsId = computed(()=>this._selectedCommentsId());
  private _selectedCommentsRessource=httpResource<Comment|undefined>(()=>{
    if (!this.selectedCommentsId()) {
      return undefined;
    }
    return `${this.apiUrl}/${this.selectedCommentsId()}`
  });

  selectedCommentsJson=computed(()=>this._selectedCommentsRessource.value());
  selectedCommentsJsonError = computed(()=>{
    const error = this._selectedCommentsRessource.error as Signal<HttpErrorResponse | undefined>;
    return error()? error() : undefined;
  })
  selectedCommentsStatus = computed(()=>this._selectedCommentsRessource.status());
  selectedCommentsIsLoading = computed(()=>this._selectedCommentsRessource.isLoading());

  //request by id
  getSelectedCommentsId($id: Signal<number>) {
    return httpResource(() => (
      $id() ? `${this.apiUrl}/${$id()}` : undefined
    ));
  }

}
