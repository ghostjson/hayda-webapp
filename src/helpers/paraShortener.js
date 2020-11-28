export default function (para, length) {
    return para.substr(0, length)
        + ((para.length > length) ? ' ...' : '')

}
