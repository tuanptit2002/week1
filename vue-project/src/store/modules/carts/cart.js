import {defineStore} from "pinia";

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({

        carts: [
            {
                img: '../../../assets/shirt-1.png',
                name: 'Gradient Graphic T-shirt',
                size: 'Large',
                color: 'red',
                price: 156
            },
            {
                img: '../../../assets/shirt-1.png',
                name: 'Gradient Graphic T-shirt',
                size: 'Large',
                color: 'red',
                price: 157
            },
            {
                img: '../../../assets/shirt-1.png',
                name: 'Gradient Graphic T-shirt',
                size: 'Large',
                color: 'red',
                price: 156
            },
            {
                img: '../../../assets/shirt-1.png',
                name: 'Gradient Graphic T-shirt',
                size: 'Large',
                color: 'red',
                price: 156
            }
        ]
    }),
    actions: {
        async addProduct(product){
            try{
                this.carts.push(product);
            }catch (e){
                console.log(e);
            }
        }
    },
    getters: {
        getAllProductInCart() {
            return this.carts;
        },
        getCountProduct(){
            return this.carts.length;
        }
    }
})
