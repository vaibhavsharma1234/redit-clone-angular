import { Component } from "@angular/core";
import { Article } from "../article/article.model";
@Component({
    selector:'app-container',
    templateUrl:'./container.component.html',
    styleUrls: ["./container.component.scss"]

})
export class ContainerComponent {
    articles:Article[]=[]
    constructor(){
        this.articles=[
            new Article (
                "Vaibhav",
                "https://angular.io",
                2
              ),
              new Article (
                "samarth",
                "https://angular.io"
              )
        ]
    }
    addArticle(myForm:any){
        // let newArticle = 
        this.articles.push(new Article(myForm.form.value.title,myForm.form.value.urlLink,0))
        console.log(myForm.form.value)
        // myForm.form.value.title=""
        myForm.reset()
    }
    sortedArticles(){
        return this.articles.sort((a:Article,b:Article)=>b.votes-a.votes)
    }
}