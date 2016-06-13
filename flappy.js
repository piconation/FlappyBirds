/**
 * Created by mattpowell on 6/13/16.
 */

function Dictionary() {
    this.add = add;
    this.datastore = {};
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for(var key in this.datastore) {
        console.log(key + "--> " + this.datastore[key]);
    }
}

var phonebook = new Dictionary();

phonebook.add("Mike", "123-5555");
phonebook.add("Julie", "123-4444");
phonebook.add("Fred", "123-6666");
console.log("Mike's number is:" + phonebook.find("Mike"));
phonebook.remove("Mike");
phonebook.showAll()
