
// 链表节点,采取这种方式应该是更缜密
class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}
// 链表中的所有节点是从0-index, 这里指的是存储数据的节点,不包含head头节点
class MyLinkedList {
    constructor() {
        // 头指针
        this.head = new Node('head')
        // 尾节点 不用专门去循环到尾部了
        this.tail = this.head
        // 链表长度
        this.length = 0
    }
    // 复杂度O(n)
    get(i) {
        // 判断索引是否有效
        if (i < 0 || i >= this.length) {
            return -1
        }
        let p = this.head.next
        while (i-- > 0) {
            p = p.next
        }
        return p.data
    }
    /**
     * 头插法
     * 复杂度 O(1)
     */
    addAtHead(item) {
        let node = new Node(item, this.head.next)
        this.head.next = node
        if (this.length === 0) {
            this.tail = node
        }
        this.length++
    }
    /**
     * 尾插法
     * 将值为 val 的节点追加到链表的最后一个元素
     * 复杂度 O(1)
     */
    addAtTail(item) {
        this.tail.next = new Node(item)
        this.tail = this.tail.next
        this.length++
    }
    /**
     * 在链表中的第 index 个节点之前添加值为 val 的节点。
     * 如果 index 小于等于0，则在头部插入节点。
     * 如果 index 等于链表的长度，则该节点将附加到链表的末尾。
     * 如果 index 大于链表长度，则不会插入节点。
     * 复杂度 O(n)
     * 链表的优势在一次插入多个元素, 不管多少 都是相同的复杂度
     */
    addAtIndex(i, item) {
        if (i <= 0) {
            this.addAtHead(item)
        } else if (i === this.length) {
            this.addAtTail(item)
        } else if (i < this.length) {
            let p = this.head
            while (i-- > 0) {
                p = p.next
            }
            p.next = new Node(item, p.next)
            this.length++
        }

    }
    /**如果索引 index 有效，则删除链表中的第 index 个节点 
     * 复杂度 O(n)
    */
    deleteAtIndex(i) {
        // 各种不处理的情况优先处理掉
        if (i >= this.length || i < 0 || this.length === 0) {
            return
        }
        let p = this.head
        while (i-- > 0) {
            p = p.next
        }
        if (this.tail === p.next) {
            this.tail = p
        }
        p.next = p.next.next
        this.length--

    }
}
const LinkList = new MyLinkedList()
const arr = [1, 2, 3]
arr.forEach(item => {
    LinkList.addAtTail(item)
})
console.log(LinkList);
