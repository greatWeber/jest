//  前缀树

/**
 * 给定一个二维网格 board 和一个字典中的单词列表 words，找出所有同时在二维网格和字典中出现的单词。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

示例:

输入:
words = ["oath","pea","eat","rain"] and board =
[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]

输出: ["eat","oath"]
说明:
你可以假设所有输入都由小写字母 a-z 组成。
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

Trie.prototype.startsWith = function(word) {
  let current = this.root;
  for (let i in word) {
    let c = word[i];
    if (!current.children[c]) return false;
    current = current.children[c];
  }
  return true;
};

export const findWords = (boards, words)=>{
  if (boards.length == 0) return [];
  const trie = new Trie();
  const map = new Map();
  const rs = [];
  const m = boards.length;
  const n = boards[0].length; // 二维数组的长度
  for (let word of words) {
    trie.addWord(word);
  }

  const dfs = (str, row, col)=>{
    if (row < 0 || row >= m || col < 0 || col >= n || !trie.startsWith(str)) return;

    str += boards[row][col];
    if (words.includes(str)) {
      rs.push(str);
    }
    dfs(str, row + 1, col);
    dfs(str, row - 1, col);
    dfs(str, row, col + 1);
    dfs(str, row, col - 1);
  };

  for (let i = 0;i < m;i++) {
    for (let k = 0;k < n;k++) {
      dfs('', i, k);
    }
  }

  return rs;
};

export default {
  Trie,
  findWords
};
