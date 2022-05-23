
public class Solution {

    public int countSubstrings(String input) {
        int size = input.length();
        boolean[][] memo = new boolean[size][size];
        int countPalindroms = size;
        int range = 1;

        while (range < 3) {
            for (int i = 0; i + range < size; ++i) {
                if (input.charAt(i) == input.charAt(i + range)) {
                    memo[i][i + range] = true;
                    ++countPalindroms;
                }
            }
            ++range;
        }

        while (range < size) {
            for (int i = 0; i + range < size; ++i) {
                if (memo[i + 1][i + range - 1] == true && input.charAt(i) == input.charAt(i + range)) {
                    memo[i][i + range] = true;
                    ++countPalindroms;
                }
            }
            ++range;
        }
        return countPalindroms;
    }
}
