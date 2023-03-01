function solution(nums) {
    const answer = [...new Set(nums)].length;
    const c = Math.floor(nums.length / 2);
    return c > answer ? answer : c;
}