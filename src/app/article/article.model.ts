export class Article {
    title: string
    link: string
    votes: number

    constructor(title: string, link: string, votes?: number) {
        this.title = title
        this.link = link
        if(votes){
            this.votes = votes 
        }else{
            this.votes=0
        }
        
    }
    upvote() {
        this.votes += 1;
    }
    downvote() {
        this.votes -= 1;
    }
    domain():string{
        try{
            const domainPath=this.link.split('//')[1]
            return domainPath.split('/')[0]
        }catch(err){
            return ""

        }
    }

}