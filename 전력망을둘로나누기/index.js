const wires = [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
];

const n = 9;

function solution(n, wires) {
  var answer = [];

  wires.forEach((wire) => {
    const [from, to] = wire;

    const tower = bfs(from, to);

    answer.push(Math.abs(n / 2 - tower));
  });

  console.log(answer.sort((a, b) => a - b));

  return answer;
}

const bfs = (node, cut) => {
  const queue = [];
  let count = 0;

  const graphe = getGraphe(n, wires);
  const visited = Array.from(Array(graphe.length), () => false);

  queue.push(node);

  visited[node] = true;

  while (queue.length) {
    const node = queue.shift();

    graphe[node].forEach((line) => {
      if (line !== cut && !visited[line]) {
        visited[line] = true;
        queue.push(line);
      }
    });
    count++;
  }

  return count;
};

function getGraphe(n, wires) {
  const graphe = Array.from(Array(n + 1), () => []);
  for (const wire of wires) {
    let [from, to] = wire;

    graphe[from].push(to);
    graphe[to].push(from);
  }

  return graphe;
}

solution(n, wires);
