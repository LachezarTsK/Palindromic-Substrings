
/**
 * @param {string} input
 * @return {number}
 */
var countSubstrings = function (input) {
    const size = input.length;
    const memo = Array.from(new Array(size), () => new Array(size));
    let countPalindroms = size;
    let range = 1;

    while (range < 3) {
        for (let i = 0; i + range < size; ++i) {
            if (input.charAt(i) === input.charAt(i + range)) {
                memo[i][i + range] = true;
                ++countPalindroms;
            }
        }
        ++range;
    }

    while (range < size) {
        for (let i = 0; i + range < size; ++i) {
            if (memo[i + 1][i + range - 1] === true && input.charAt(i) === input.charAt(i + range)) {
                memo[i][i + range] = true;
                ++countPalindroms;
            }
        }
        ++range;
    }
    return countPalindroms;
};
