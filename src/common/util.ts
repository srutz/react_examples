
export function randomId() {
    const ts = new Date()
    let id = "" + Math.random() + ts.getTime()
    id = id.replace(/\./, "").substring(1)
    return id
} 