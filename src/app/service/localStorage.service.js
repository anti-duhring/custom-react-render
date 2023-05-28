export default {
    retrieve(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    persist(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}