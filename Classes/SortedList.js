class List{
    constructor(){
        this.result=[]
    }
    add(el){
         this.result.push(el);
    };
    remove(index){
        Array.from(this.result).slice(index,1)
    };
    get(index){
        return this.result[index]
    };
    size(){
        this.result.sort((a,b)=>a-b);
    }
}




let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
