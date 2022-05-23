
#include <vector>
using namespace std;

class Solution {
    
public:
    int countSubstrings(string input) {
        int size = input.size();
        vector <vector<bool>> memo(size, vector<bool>(size));
        int countPalindroms = size;
        int range = 1;

        while (range < 3) {
            for (int i = 0; i + range < size; ++i) {
                if (input[i] == input[i + range]) {
                    memo[i][i + range] = true;
                    ++countPalindroms;
                }
            }
            ++range;
        }

        while (range < size) {
            for (int i = 0; i + range < size; ++i) {
                if (memo[i + 1][i + range - 1] == true && input[i] == input[i + range]) {
                    memo[i][i + range] = true;
                    ++countPalindroms;
                }
            }
            ++range;
        }
        return countPalindroms;
    }
};
