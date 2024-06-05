import {defineStore} from "pinia";


export const useProductStore  = defineStore({
    id:'product',
    state: () => ({
        products:[
        {
            img:'../../../assets/shirt.png',
            name:'T-SHIRT WITH TAPE DETAILS',
            rating:4.5,
            price:120
        },
        {
            img:'../../../assets/shirt.png',
            name:'T-SHIRT WITH TAPE DETAILS',
            rating:3.5,
            price:120
        },
        {
            img:'../../../assets/shirt.png',
            name:'T-SHIRT WITH TAPE DETAILS',
            rating:4.5,
            price:120
        },
        {
            img:'../../../assets/shirt.png',
            name:'T-SHIRT WITH TAPE DETAILS',
            rating:4.5,
            price:120
        },
        {
            img:'../../../assets/shirt.png',
            name:'T-SHIRT WITH TAPE DETAILS',
            rating:4.5,
            price:120
        },{
            img:'../../../assets/shirt.png',
            name:'T-SHIRT WITH TAPE DETAILS',
            rating:4.5,
            price:120
        },
        {
            img:'../../../assets/shirt.png',
            name:'T-SHIRT WITH TAPE DETAILS',
            rating:4.5,
            price:120
        },

    ],

        comments:[
            {
                rating:5,
                name:'Sarah M.',
                title:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"
            },
            {
                rating:5,
                name:'Alex K.',
                title: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”'
            },
            {
                rating: 5,
                name:'James L.',
                title: '"As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”'
            }
        ],
    }),
    actions: {
        async getProducts() {
            try{
                const response = await fetch('http://localhost:3000/products')
                const data = await response.json();
                console.log('vao day ne', data);
                this.products = data;
            }catch (e){
                console.error('Failed to fetch products:', e);
            }
        }
    },
    getters:{
        getAllProducts(){
            return this.products;
        },
        getAllComments(){
            return this.comments;
        }
    }
})
