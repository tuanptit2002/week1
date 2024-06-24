import {defineStore} from "pinia";

const url = 'http://localhost:3000';
export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        token: '',

    }),
    actions: {
        async loginGoogle() {
            try {
                window.location.href = `${url}/auth/google`;
            } catch (e) {
                console.error('Failed to fetch products:', e);
            }
        },
        async login(dataUser) {
            try {
                const response = await fetch(`${url}/user/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataUser)
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const responseData = await response.json();
                const {token} = responseData;
                localStorage.setItem('token', token);

            } catch (e) {
                alert("Đăng nhập không thành công")
            }
        }
    }
})
