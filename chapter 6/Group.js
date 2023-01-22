class Group {
    constructor() {
        this.store = []
    }
    add(obj) {
        if (!this.has(obj))
            this.store.push(obj)
    }
    delete(obj) {
        if (this.has(obj))
            this.store.splice(this.store.indexOf(obj), 1)
    }
    has(obj) {
        return this.store.indexOf(obj) !== -1
    }

    static from(iterObj) {
        let group = new Group()
        iterObj.forEach((el) => group.add(el))
        return group
    }

    [Symbol.iterator]() {
        return new GroupIterator(this)
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group
        this.index = -1
    }
    next() {
        this.index++
        return this.index >= this.group.store.length ? {done: true} : {value: this.group.store[this.index], done: false}
    }
}


let group = Group.from([10, 20]);
console.log(group);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

let arr = [1, 2]
console.log(arr.indexOf(3))

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c
