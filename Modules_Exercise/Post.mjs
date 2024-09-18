export default class Post {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }
    publish() {
        console.log(`${this.title}: ${this.body}`);
    }
}