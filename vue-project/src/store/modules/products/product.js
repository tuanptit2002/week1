import {defineStore} from "pinia";


export const useProductStore  = defineStore({
    id:'product',
    state: () => ({
        products:[
    ],

        comments:[
        ],
    }),
    actions: {
        async getProducts() {
            try{
                const response = await fetch('http://localhost:3000/products')
                const data = await response.json();
                this.products = data;
                return data
            }catch (e){
                console.error('Failed to fetch products:', e);
            }
        },

    },
    getters:{
        getAllProducts(state){
            return state.products;
        },
        getAllComments(){
            return this.comments;
        }
    }
})
