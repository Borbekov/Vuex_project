import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      {name: "Banana", price: 20},
      {name: "Milk", price: 40},
      {name: "Meet", price: 1400},
      {name: "Apple", price: 30}
    ]
  },
  getters: {
    saleProducts(state){
      let saleProducts = state.products.map((product) => ({
          name: '**' + product.name + '**',
          price: product.price / 2
        }
      ))
      return saleProducts;
    }
  },
  mutations: {
    reducePrice(state, payload){
      state.products.forEach((product) => {
        product.price -= payload;
      })
    }
  },
  actions: {
     reducePrice(context, payload){
       setTimeout(function(){
         context.commit("reducePrice", payload)
       }, 2000)
     }
  }
})
