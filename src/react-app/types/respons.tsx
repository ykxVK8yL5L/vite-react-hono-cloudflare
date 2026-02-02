export interface LoginResponse {
    token: string
    user: {
        id: string
        name: string
        email: string
        // 如果还有其他字段，可以补充
    }
}


export interface User {
    id: string
    name: string
    email: string
    // 其他字段根据实际情况补充
}