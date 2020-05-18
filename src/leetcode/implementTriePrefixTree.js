//  前缀树

/**
 * Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
 * 
 */

 function TrieNode(val){
     this.val = val;
     this.children = [];
     this.isWorld = false; // 是否在尾部
 }

 function compluteIndex(c){
     return c.charCodeAt(0) - 'a'.charCodeAt(0);
 }

 function Trie (){
     this.root = new TrieNode(null);
 }

 Trie.prototype.insert = function(word){
     let current = this.root;
     for(let i in word){
         let c = word[i];
         let Index = compluteIndex(c);
         if(!current.children[Index]){
            current.children[Index] = new TrieNode(c);
            current = current.children[Index];

         }
     }
     current.isWorld = true;
 }

 Trie.prototype.search = function(word){
     let current = this.root;
     for(let i in word){
         let c = word[i];
         let Index = compluteIndex(c);
         if(!current.children[Index]) return false;
         current = current.children[Index];
     }
     return current.isWorld;
 }

 Trie.prototype.startsWith = function(word){
     let current = this.root;
     for(let i in word){
         let c = word[i];
         let Index = compluteIndex(c);
         if(!current.children[Index]) return false;
         current = current.children[Index];
     }
     return true;
 }

 export default {
    Trie
 }