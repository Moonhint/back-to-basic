
'use strict';

/**
 *  function - description
 *
 * @return {type}  description
 */
let Link = (function () {

  class List {
    constructor (name){
      this.type = "list";
      this.name = name;
      this.head = null;
      this.length = 0;
    }

    /**
     * display - display information about the list
     *
     * @return {Boolean}  return true
     */
    display() {
      console.log("Length " + this.length + ", list: " + this.name + " (" + this.type + ")");

      let current_node = this.head;
      for (let i = 0; i < this.length; i++) {
        console.log("- node " + (i + 1) + " | value: " + current_node.data);
        current_node = current_node.next;
      }
      return true;
    }

    /**
     * get - get a node at given position
     *
     * @param  {Number} position position of the node to be got
     * @return {Node}          get node, if no node found in that position, return null
     */
    get(position){
      let current_node = this.head;
      if (position > this.length && position <= 0){
        throw new Error("No node found on that position!");
      }else {
        for (let i = 1; i < position; i++) {
          current_node = current_node.next;
        }
      }

      return current_node;
    }
  }

  class Node {
    constructor (data){
      this.data = data;
    }
  }

  class SNode extends Node {
    constructor (data, next=null){
      super(data);
      this.next = next;
    }
  }

  class DNode extends Node {
    constructor (data, next=null, prev=null){
      super(data);
      this.next = next;
      this.prev = prev;
    }
  }


  class Singly extends List {
    constructor (name){
      super(name);
      this.type = "singly";
    }


    /**
     * add - add node to the last position of the list
     *
     * @param  {Any} data value of the node added
     * @return {Node}     node added
     */
    add(data) {
      if (data){
        let node = new SNode(data),
            current_node = this.head;
        if (this.length === 0){
          // first time add
          this.head = node;
        }else{
          // non empty add
          while(current_node.next){
            current_node = current_node.next;
          }
          current_node.next = node;
        }
        this.length++;

        return node;
      }else{
        throw new Error("data for new node must be truthy");
      }
    }

    /**
     * remove - remove a node at given position
     *
     * @param  {Number} position position of the node to be removed
     * @return {Node}            removed node
     */
    remove(position){
      if (position > this.length){
        throw new Error("Cannot delete at that position");
      }else{
        let prev_node = null,
            current_node = this.head,
            current_position = 1;

        if (current_position === position) {
            this.head = current_node.next;
        }else{

          for (let i = 1; i < position; i++) {
            prev_node = current_node;
            current_node = current_node.next;
          }

          prev_node.next = current_node.next;
        }

        this.length--;
        return current_node;
      }
    }

  }

  class Doubly extends List {
    constructor (name){
      super(name);
      this.type = "doubly";
    }

    /**
     * add - add node to the last position of the list
     *
     * @param  {Any} data value of the node added
     * @return {Node}     node added
     */
    add(data) {
      if (data){
        let node = new DNode(data),
            current_node = this.head,
            prev_node = null;
        if (this.length === 0){
          // first time add
          this.head = node;
        }else{
          // non empty add
          while(current_node.next){
            prev_node = current_node;
            current_node = current_node.next;
          }
          node.prev = current_node;
          current_node.next = node;
        }
        this.length++;

        return node;
      }else{
        throw new Error("data for new node must be truthy");
      }
    }

    /**
     * remove - remove a node at given position
     *
     * @param  {Number} position position of the node to be removed
     * @return {Node}            removed node
     */
    remove(position){
      if (position > this.length){
        throw new Error("Cannot delete at that position");
      }else{
        let current_node = this.head,
            current_position = 1;

        if (current_position === position) {
            this.head = current_node.next;
        }else{

          for (let i = 1; i < position; i++) {
            current_node = current_node.next;
          }

          let prev_node = current_node.prev;
          let next_node = current_node.next;

          prev_node.next = next_node;
        }

        this.length--;
        return current_node;
      }
    }

  }


  var create_singly_list = (name = 'no name') => {
    let list = new Singly(name);
    return list;
  }

  var create_doubly_list = (name = 'no name') => {
    let list = new Doubly(name);
    return list;
  }

  // Public
  var public_obj = {
    create: (type, name) => {
      let obj;
      if (type === 'singly'){
        obj = create_singly_list(name);
      }else{
        obj = create_doubly_list(name);
      }
      return obj;
    }
  };

  return public_obj;

}());


let singly = Link.create("singly", "MyList");
singly.add(1);
singly.add(2);
singly.add(3);
singly.remove(2);
singly.add(4);
singly.display();
console.log(singly.get(2));


console.log("\n");
let doubly = Link.create("doubly");
doubly.add(1);
doubly.add(2);
doubly.add(3);
doubly.remove(2);
doubly.add(4);
doubly.display();
console.log(doubly.get(3));
