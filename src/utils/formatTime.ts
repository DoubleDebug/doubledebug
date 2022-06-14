export function formatTime(date: Date = new Date()) {
    return `${date.getHours()}:${date.getMinutes()}`;
}

export function formatDate(date: Date = new Date()) {
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
}