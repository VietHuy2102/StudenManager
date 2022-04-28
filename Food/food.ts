export class Food{
    title : string;
    servings: number;
    ingredients: [];

    constructor(title:string,
                serving: number,
                ingredients: []) {
        this.title = title;
        this.servings = serving;
        this.ingredients = ingredients;
    }

}