export default function (dateString, separater= '-') {
    const [date, month, year] = dateString.split(separater)
    return `${month}/${date}/${year}`
}
