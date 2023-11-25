class ListNode
{
    val;
    next=null;
    constructor(value){
        this.val=value;
        this.next=null;
    }
}
var removeElements = function(head, val) {
    const ret = new ListNode(0, head);
    let cur = ret;
    while(cur.next) {
        if(cur.next.val === val) {
            cur.next =  cur.next.next;
            continue;
        }
        cur = cur.next;
    }
    return ret.next;
}