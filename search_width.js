const obj = {
    A: ["G", "B"],
    B: ["A", "C"],
    C: ["B", "D", "F"],
    D: ["C", "E", "F"],
    E: ["D", "F"],
    F: ["C", "D", "E", "G"],
    G: ["A", "F"]
  }


function searchWidth(start, end, obj) {
    let queue = []
    const history = []
    const visited = []
  
    queue.push(start)
  
    while(queue.length) {
      const current = queue.shift()
      if (!visited.includes(current)) {
        history.push(current)
        visited.push(current)
        if (obj[current].includes(end)) {
          history.push(end)
          return `Между узлами ${start} и ${end} есть связь. \nПроверенные узлы - ${history.join(", ")}`
        }
        queue = [...queue, ...obj[current]]
      }
  
    }
    history.push(end)
    return `Между узлами ${start} и ${end} связи нет.`
  }
  
console.log(searchWidth("A", "F", obj));