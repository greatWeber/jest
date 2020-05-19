import implementTriePrefixTree from '@/leetcode/implementTriePrefixTree';
import implementTriePrefixTree1 from '@/leetcode/implementTriePrefixTree-1';
import implementTriePrefixTree2 from '@/leetcode/implementTriePrefixTree-2';

const Trie = implementTriePrefixTree.Trie;
const Trie1 = implementTriePrefixTree1.Trie;
const findWords = implementTriePrefixTree2.findWords;

describe('前缀树',()=>{
    test('前缀树-1',()=>{
        let trie = new Trie();
        trie.insert('hello world');
        expect(trie.search('hello')).toEqual(false);
        expect(trie.startsWith('hello')).toEqual(true);
        ;
    });

    test('前缀树-2',()=>{
        let trie = new Trie1();
        trie.addWord('app');
        trie.addWord('bar');
        trie.addWord('bad');
        trie.search('b.d')
        expect(trie.search('app')).toEqual(true);
        expect(trie.search('b.r')).toEqual(true);
        expect(trie.search('b..')).toEqual(true);
        expect(trie.search('b.d')).toEqual(true);
        expect(trie.search('b..')).toEqual(true);
    });

    test.only('前缀树-3',()=>{
        const words = ["oath","pea","eat","rain"];
        const boards = [
            ['o','a','a','n'],
            ['e','t','a','e'],
            ['i','h','k','r'],
            ['i','f','l','v']
          ];

          const rs = findWords(boards,words);
          console.log(rs);
    })
})