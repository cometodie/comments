import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.init();
  }

}
