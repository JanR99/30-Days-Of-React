function test() {
    let arr = Array()
    let arr2 = Array(6).fill(0)
    console.log(arr2.length)
    console.log(arr2[0])
    let mixedDataTypes = [1, 2.0, '3', 4, '5', 6.0]
    console.log(mixedDataTypes.length)
    const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
    console.log(itCompanies)
    console.log(itCompanies.length)
    let n = itCompanies.length
    console.log(n)
    console.log(itCompanies[0])
    console.log(itCompanies[Math.floor(itCompanies.length / 2)])
    console.log(itCompanies[n - 1])
    for(let i = 0; i < n; i++) {
        console.log(itCompanies[i])
    }
    for(let i = 0; i < n; i++) {
        itCompanies[i] = itCompanies[i].toUpperCase()
        console.log(itCompanies[i])
    }
    let itCompaniesString = itCompanies.join(', ')
    console.log(itCompaniesString)
    let contains = itCompanies.includes('FACEBOOK')
    console.log(contains)
    if(contains) {
        console.log('Facebook')
    } else {
        console.log('not found')
    }
    let os = Array()
    for(let i = 0; i < itCompanies.length; i++) {
        let current = itCompanies[i].toLowerCase()
        if(current.indexOf("o") !== current.lastIndexOf("o")) {
            os.push(itCompanies[i])
        }
    }
    console.log(os)
    os.sort()
    os.reverse()
    itCompaniesString.slice(3)
}