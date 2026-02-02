
import localforage from 'localforage';


export const appStorage = localforage.createInstance({
    name: 'myapp',
    storeName: 'auth_store', // 👈 IndexedDB 的表名
})


// export const authStorage = localforage.createInstance({
//     name: 'myapp',
//     storeName: 'auth_store', // 👈 IndexedDB 的表名
// })


// export const userStorage = localforage.createInstance({
//     name: 'myapp',
//     storeName: 'user_store', // 👈 IndexedDB 的表名
// })