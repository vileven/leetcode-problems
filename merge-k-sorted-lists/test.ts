import heapMergeKLists from './heap';
import compare1by1MergeKLists from './compare1by1';
import divedAndConquerMergeKLists from './divideAndConquer';
import {ListNode} from './index';

describe('mergeKLists with heap', function () {
	const returnTestData = () => {
		// [[1,4,5],[1,3,4],[2,6]]
		const list1_3: ListNode = {val: 5, next: null};
		const list1_2: ListNode = {val: 4, next: list1_3};
		const list1_1: ListNode = {val: 1, next: list1_2};

		const list_2_3: ListNode = {val: 4, next: null};
		const list_2_2: ListNode = {val: 3, next: list_2_3};
		const list_2_1: ListNode = {val: 1, next: list_2_2};

		const list_3_2: ListNode = {val: 6, next: null};
		const list_3_1: ListNode = {val: 2, next: list_3_2};

		const testData: ListNode[] = [list1_1, list_2_1, list_3_1];

		const exp_list_8 = {val: 6, next: null};
		const exp_list_7 = {val: 5, next: exp_list_8};
		const exp_list_6 = {val: 4, next: exp_list_7};
		const exp_list_5 = {val: 4, next: exp_list_6};
		const exp_list_4 = {val: 3, next: exp_list_5};
		const exp_list_3 = {val: 2, next: exp_list_4};
		const exp_list_2 = {val: 1, next: exp_list_3};
		const exp_list_1 = {val: 1, next: exp_list_2};

		const expectedResult: ListNode = exp_list_1;

		return [testData, expectedResult] as const;
	};

	it('should work with compare one by one', () => {
		const [testData, expectedResult] = returnTestData();

		expect(compare1by1MergeKLists(testData)).toStrictEqual(expectedResult);
	});

	it('should work with heap', () => {
		const [testData, expectedResult] = returnTestData();

		expect(heapMergeKLists(testData)).toStrictEqual(expectedResult);
	});

	it('should work with divide and conquer method', () => {
		const [testData, expectedResult] = returnTestData();

		expect(divedAndConquerMergeKLists(testData)).toStrictEqual(
			expectedResult,
		);
	});
});
