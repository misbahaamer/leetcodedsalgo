/*
1615. Maximal Network Rank
Medium

608

116

Add to List

Share
There is an infrastructure of n cities with some number of roads connecting these cities. Each roads[i] = [ai, bi] indicates that there is a bidirectional road between cities ai and bi.

The network rank of two different cities is defined as the total number of directly connected roads to either city. If a road is directly connected to both cities, it is only counted once.

The maximal network rank of the infrastructure is the maximum network rank of all pairs of different cities.

Given the integer n and the array roads, return the maximal network rank of the entire infrastructure.

 

Example 1:



Input: n = 4, roads = [[0,1],[0,3],[1,2],[1,3]]
Output: 4
Explanation: The network rank of cities 0 and 1 is 4 as there are 4 roads that are connected to either 0 or 1. The road between 0 and 1 is only counted once.
*/

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  let res = 0;
  let map = new Map();
  roads.forEach(([u, v]) => {
    map.set(u, map.get(u) || new Set());
    let set = map.get(u);
    set.add(v);

    map.set(v, map.get(v) || new Set());
    set = map.get(v);
    set.add(u);
  });

  for (let i = 0; i < n; i++) {
    if (!map.has(i)) continue;
    let uAdj = map.get(i);
    let uCount = uAdj.size;
    for (let j = i + 1; j < n; j++) {
      if (!map.has(j)) continue;
      let vAdj = map.get(j);
      let vCount = vAdj.size;
      if (vAdj.has(i)) vCount--;
      res = Math.max(uCount + vCount, res);
    }
  }
  return res;
};

maximalNetworkRank(4, [
  [0, 1],
  [0, 3],
  [1, 2],
  [1, 3],
]);

/*
const degs = new Array(n).fill(0), adjs = {};
	for (const [c1, c2] of roads) {
		degs[c1]++;
		degs[c2]++;
		if (!adjs[c1]) adjs[c1] = {};
		if (!adjs[c2]) adjs[c2] = {};
		adjs[c1][c2] = true;
		adjs[c2][c1] = true;
	}

	const firstMax = degs.reduce((max, deg, i) => degs[max] < deg ? i : max, 0),
		firstMaxCnt = degs.reduce((cnt, deg) => cnt += deg === degs[firstMax] ? 1 : 0, 0);

	if (firstMaxCnt > 1) {
		const allEdges = firstMaxCnt * (firstMaxCnt - 1) / 2;
		let actualEdges = 0;
		for (const [c1, c2] of roads)
			if (degs[c1] === degs[firstMax] && degs[c2] === degs[firstMax]) actualEdges++;
		var res = 2 * degs[firstMax] - (allEdges === actualEdges ? 1 : 0);
	} else {
		var res = 0;
		for (let c = 0; c < degs.length; c++) {
			if (c === firstMax) continue;
			const areAdj = adjs[firstMax][c];
			res = Math.max(res, degs[firstMax] + degs[c] - (areAdj ? 1 : 0));
		}
	}

	return res;
*/