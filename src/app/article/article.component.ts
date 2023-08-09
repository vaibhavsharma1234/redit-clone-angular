import { Component,Input } from '@angular/core';
import { Article } from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  // article:Article;
  @Input()article!:Article
  constructor(){
  // this.article = new Article (
  //   "Vaibhav",
  //   "https://angular.io"
  // )
  }
  // title:string="vaibhav"
  // link:string="https://angular.io"
  // votes:number=10

 upvote(){
//  this.votes+=1;
this.article.upvote()
 }
 downvote(){
// this.votes-=1;
this.article.downvote()
 }
}
