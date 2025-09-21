
export const emptyCommentsJson: CommentsJSON = {
  comments: [],
  total: 0,
  limit: 0,
  skip: 0,
};

export interface CommentSearchParams {
  body?: string;
}

export interface CommentsJSON {
  comments: Comment[];
  total:    number;
  skip:     number;
  limit:    number;
}

export interface Comment {
  id:     number;
  body:   string;
  postID: number;
  likes:  number;
  user:   User;
}

export interface User {
  id:       number;
  username: string;
  fullName: string;
}
