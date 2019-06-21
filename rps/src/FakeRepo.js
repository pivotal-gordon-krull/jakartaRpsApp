function FakeRepo() {
    let matches = []

    this.isEmpty = () => {
        return matches.length === 0
    }

    this.save = (match) => {
        matches.push(match)
    }

    this.getAll = () => {
        return matches
    }
}

module.exports = {FakeRepo}