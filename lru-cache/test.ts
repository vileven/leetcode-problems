import LRUCache from './index';

describe('lru-cache', () => {
	it('should work', () => {
		//["LRUCache","put","put","put","put","get","get","get","get","put","get","get","get","get","get"]
		// [[3],[1,1],[2,2],[3,3],[4,4],[4],[3],[2],[1],[5,5],[1],[2],[3],[4],[5]]

		const lruCache = new LRUCache(3);

		// [null,null,null,null,null,4,3,2,-1,null,-1,2,3,-1,5]

		lruCache.put(1, 1);
		lruCache.put(2, 2);
		lruCache.put(3, 3);

		expect(Object.keys(lruCache.cache)).toStrictEqual(['1', '2', '3']);

		lruCache.put(4, 4);

		expect(lruCache.first.val).toBe(4);
		expect(lruCache.last.val).toBe(2);
		expect(Object.keys(lruCache.cache)).toStrictEqual(['2', '3', '4']);

		expect(lruCache.get(4)).toBe(4);
		expect(lruCache.first.val).toBe(4);
		expect(lruCache.last.val).toBe(2);

		expect(lruCache.get(3)).toBe(3);
		expect(lruCache.first.val).toBe(3);
		expect(lruCache.last.val).toBe(2);

		expect(lruCache.get(2)).toBe(2);

		expect(lruCache.first.val).toBe(2);
		expect(lruCache.last.val).toBe(4);

		expect(lruCache.get(1)).toBe(-1);

		lruCache.put(5, 5);

		expect(lruCache.first.val).toBe(5);

		expect(Object.keys(lruCache.cache)).toStrictEqual(['2', '3', '5']);

		expect(lruCache.get(1)).toBe(-1);
		expect(lruCache.get(2)).toBe(2);
		expect(lruCache.get(3)).toBe(3);
		expect(lruCache.get(4)).toBe(-1);
		expect(lruCache.get(5)).toBe(5);
	});
});
