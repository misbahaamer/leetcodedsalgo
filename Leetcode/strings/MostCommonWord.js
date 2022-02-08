/*
819. Most Common Word
Easy

1202

2458

Add to List

Share
Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.

 

Example 1:

Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
Example 2:

Input: paragraph = "a.", banned = []
Output: "a"
*/
/*
1. Turn paragraph to lower case.
2. Replace all punctuations with white space.
3. Extract words separated by one or more white spaces.
4. Using HashMap, ount the number of occurrences for each word that is not in banned set.
5. Iterate through HashMap and return the most common word.
*/
var mostCommonWord = function (paragraph, banned) {
  paragraph = paragraph.toLowerCase().replace(/\W/g, " ");
  paragraph = paragraph.trim().split(/\s+/);
  let freqMap = new Map(),
    bannedSet = new Set(banned);
  for (let i = 0; i < paragraph.length; i++) {
    let word = paragraph[i];
    if (!bannedSet.has(word)) {
      freqMap.set(word, freqMap.get(word) + 1 || 1);
    }
  }
  let maxFreq = 0,
    maxFreqWord = "";
  for (let [word, freq] of freqMap) {
    if (freq > maxFreq) {
      maxFreq = freq;
      maxFreqWord = word;
    }
  }
  return maxFreqWord;
  // T.C: O(M + N), M = length of paragraph, N = number of words in banned
  // S.C: O(M + N)
};
