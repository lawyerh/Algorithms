class SLL{
    constructor(){
        this.head = null;
    }

    addNode(node){
        if(!this.head){
            this.head = node;
        }

        else{
            let runner = this.head;
            while(runner.next){
                runner = runner.next;
            }
            runner.next = node;
        }
    }

     removeNodeByVal(val){
        if (this.head.val == val){
            this.head = this.head.next;
        }
        else{
            let runner = this.head;
            while(runner.next){
                if(runner.next.val == val)
                {
                    let node = runner.next;
                    runner.next = runner.next.next;
                    return node;
                }
            }
        }
    }

     removeNodeByNode(node){
        if (this.head == node){
            this.head = this.head.next;
        }
        else{
           let runner = this.head;
            while(runner.next){
                if(runner.next == node){
                    let nodeToRemove = runner.next;
                    runner.next = runner.next.next;
                    return nodeToRemove;
                }
            }
        }
    }

     containsVal(val){
        let runner = this.head;
        while(runner){
            if(runner.val == val){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

     containsNode(node){
        let runner = this.head;
        while(runner){
            if(runner == node){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    ReverseLL(){
        let runner = this.head, temp = this.head.next;

        if(!temp) {
            return this;
        }

        while(temp){
            let hold = temp.next;
            temp.next = runner;
            if(runner == this.head){
                runner.next = null;
            }
            runner = temp;
            temp = hold;
        }

        this.head = runner;
        return this;
    }

    //  moveMaxToBack(){
    //     if(!this.head){

    //     }
    // }

     partition(value){
        if(!this.head){ // check to see if there is a head
            return null;
        }

        if(this.head.next === null){ // check to see if there's only a head
            return this.head;
        }

        let runner = this.head; // traverse through list to find value
        const pt = null;

        while(runner.next){
            if(runner.next === value){
                pt = runner.next;
            }
            if(runner.val <= value){
                var firstLessThan = runner;
            }
            runner = runner.next;
        }

        if(!pt){ // if no value, return
            console.log("The value was not present")
            return this.head;
        }

        let isPartition = false; //Bool to check if we're checking a node pre or post the partition node.

        while(this.head.val > value){ //The head node is a special case, so move all head nodes greater than partition in front of partition
            let temp = this.head;
            this.head = this.head.next;
            temp.next = pt.next;
            pt.next = temp;
        }

        runner = this.head; // traverse through list, moving nodes to correct side of partition.
        while(runner){
            if(runner == pt){
                isPartition = true;
            }
            if(runner.next.val > value && !isPartition){ //node greater than partition, and we havent reach the partition
                let temp = runner.next;
                runner.next = temp.next;
                temp.next = pt.next;
                pt.next = temp;
            }
            else if(runner.next.val < value && isPartition){ // node less than partition, and we've past the partition
                let temp = runner.next;
                runner.next = temp.next;
                if(this.head != pt){
                    temp.next = this.head.next;
                    this.head.next = temp;
                }
                else{
                    this.head = temp;
                    temp.next = pt;
                }
            }
            runner = runner.next; //advance runner regardless of list change
        }
        return this;
    }

    
}

function viewList(SLL){
    let runner = SLL.head;
    while (runner){
        console.log(`Node:   `+ runner.val);
        runner = runner.next;
    }
}

class SLNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

var list = new SLL();

for(let x = 0; x < 10; x++){
    let node = new SLNode(Math.floor(Math.random() * 15) + 1);
    list.addNode(node);
}

viewList(list);


// Place function to test here

list.ReverseLL();
console.log("***************");

viewList(list);




