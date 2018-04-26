class DynamicQueue{
    constructor(){
        this.front = null;
        this.back = null;
        this.length = 0;
    }
    enqueue(element) {
        let node = new Node(element);
        if (this.front==null) { // se a fila estiver vazia
            this.front = node;
            this.back = node;
        } else { // se a fila não estiver vazia
            this.back.next = node;
            this.back = node;
        }
        this.length++;
    }
    dequeue(){
        let firstNode = this.front.element;
        if (!this.front) return false; // se a fila estiver vazia
        this.front = this.front.next; // se a fila não estiver vazia
        this.length--;
        return firstNode;
        firstNode = null;
    }
    front() {
        return this.front.element;
    }
    back(){
        return this.back.element;
    }
    isEmpty() {
        return this.length===0;
    }
    size() {
        return this.length;
    }
    clear() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }
    print(separator=" - ") {
        if (!this.front) return "";
        let current = this.front.next,
            s=this.front.element;
        while(current){
            s+=separator+current.element;
            current=current.next;
        }
        return s;
    }
}