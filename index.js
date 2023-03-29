const checkDistance = (allDistance, upDistance, downDistance) => {
    const dayDistance = upDistance - downDistance
    let count = 0
    for (let currentDistance = 0; currentDistance < allDistance; currentDistance += dayDistance) {
        count++
    }
    return count
}

const getCountHandshakes = () => {
    let countHandshakes = 0

    for (let i = 1; i <= 10; i++) {
        countHandshakes += i - 1
    }

    return countHandshakes
}

const removeDuplicates = (textWithDuplicates) => {
    const splittedText = textWithDuplicates.split(',')
    const arrWithoutDuplicates = new Set(splittedText)
    return [...arrWithoutDuplicates].join(',')
}

console.log(checkDistance(100, 50, 30))
console.log(getCountHandshakes())
console.log(removeDuplicates('кошка,собака,лошадь,корова,кошка'))
