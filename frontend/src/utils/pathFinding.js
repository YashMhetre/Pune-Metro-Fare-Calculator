export function findShortestPath(metroMap, startStation, endStation) {
  const queue = [[startStation]];
  const visited = new Set([startStation]);
  
  while (queue.length > 0) {
    const path = queue.shift();
    const station = path[path.length - 1];

    if (station === endStation) {
      return path;
    }

    for (const neighbor of metroMap[station] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }
  
  return null;
}

export function findAllPaths(metroMap, start, end, visited = new Set(), path = [], allPaths = []) {
  visited.add(start);
  path.push(start);

  if (start === end) {
    allPaths.push([...path]);
  } else {
    for (const neighbor of metroMap[start] || []) {
      if (!visited.has(neighbor)) {
        findAllPaths(metroMap, neighbor, end, visited, path, allPaths);
      }
    }
  }

  path.pop();
  visited.delete(start);
  return allPaths;
}

export function getTopRoutes(allPaths, limit = 3) {
  return allPaths.sort((a, b) => a.length - b.length).slice(0, limit);
}