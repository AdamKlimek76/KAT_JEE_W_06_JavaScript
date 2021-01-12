function Tree(type) {
    this.type = type;
}

Tree.prototype.bloom = function () {
    console.log("I am blooming");
};

const brzoza=new Tree("brzoza");
const buk=new Tree("buk");
const leszczyna=new Tree("leszczyna");
brzoza.bloom();
console.log(brzoza.type);
console.log(buk.type);
console.log(leszczyna.type);