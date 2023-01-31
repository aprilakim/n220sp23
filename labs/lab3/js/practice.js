
var tabby, siamese, lucky;
var friendly, mean, apathetic;

function setup() {
    tabby = new Cat("Tiger the Tabby", "bites");
    siamese = new Cat("Sammy the Siamese", "wants cuddles");
    lucky = new Cat("Lucky the lucky cat", "doesn't care");
}
    //The following is an example of an object with variables that update the values 
    //accordingly using the "this" keyword

    function Cat(catType, catPersonality) {
        this.name = catType;
        this.name = catPersonality;
    }
