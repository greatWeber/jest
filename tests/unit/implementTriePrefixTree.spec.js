import implementTriePrefixTree from '@/leetcode/implementTriePrefixTree';
import implementTriePrefixTree1 from '@/leetcode/implementTriePrefixTree-1';

const Trie = implementTriePrefixTree.Trie;
const Trie1 = implementTriePrefixTree1.Trie;

describe('前缀树',()=>{
    test('前缀树-1',()=>{
        let trie = new Trie();
        trie.insert('hello world');
        expect(trie.search('hello')).toEqual(false);
        expect(trie.startsWith('hello')).toEqual(true);
        ;
    });

    test.only('前缀树-2',()=>{
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
    })
})