function BST(){
    this.root = null;
}

function leaf(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

BST.prototype.add = function (val)
{
    var node = new leaf(val);
    if(!this.root){
        this.root = node;
    }
    else{
        var runner = this.root;
        while (runner.left != node && runner.right != node){
            if(val < runner.val){
                if(runner.left){
                    runner = runner.left;
                }
                else
                {
                    runner.left = node
                }
            }
            else
            {
                if(runner.right){
                    runner = runner.right;
                }
                else
                {
                    runner.right = node;
                }
            }
        }
    }
}

BST.prototype.contains = function(val)
{
    if(!this.root)
    {
        return false;
    }
    else
    {
        var runner = this.root
        while(runner)
        {
            if(val == runner.val)
            {
                return true;
            }
            else if ( val < runner.val )
            {
                runner = runner.left;
            }
            else
            {
                runner = runner.right;
            }
        }
        return false
    }
}