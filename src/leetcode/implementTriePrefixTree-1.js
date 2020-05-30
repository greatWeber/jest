//  前缀树

/**
 * 设计一个支持以下两种操作的数据结构：

void addWord(word)
bool search(word)
search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。 . 可以表示任何一个字母。

示例:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
说明:

你可以假设所有单词都是由小写字母 a-z 组成的。
 *
 */

function TrieNode(val) {
  this.val = val;
  this.children = {};
  this.isWorld = false; // 是否在尾部
}

function Trie() {
  this.root = new TrieNode(null);
}

Trie.prototype.addWord = function(word) {
  let current = this.root;
  for (let i in word) {
    let c = word[i];
    if (!current.children[c]) {
      current.children[c] = new TrieNode(c);
    }
    current = current.children[c];
  }
  current.isWorld = true;
};

Trie.prototype.search = function(word) {
  let current = this.root;

  for (let i in word) {
    let c = word[i];
    if (c === '.') {
      // 遇到适配符合，对所有的可能性进行重复调用
      for (let key in current.children) {
        let wordArray = word.split('');
        wordArray.splice(i, 1, key);
        let newWord = wordArray.join('');
        if (this.search(newWord)) return true;
      }

    }
    if (!current.children[c]) return false;
    current = current.children[c];
  }
  return current.isWorld;
};

export default {
  Trie
};
