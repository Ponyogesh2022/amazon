import { renderOrderSummary } from "./checkout/ordersummary.js ";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { loadProducts, loadProductsFetch} from "../data/products.js";
import { loadCart } from "../data/cart.js";

//import "../data/cart-class.js"

async function loadPage(){
  try{
    await loadProductsFetch()
    await new Promise((resolve,reject) => {
      loadCart(()=>{
      resolve();
      });
    }) 
  }catch(error){
    console.log("unexpected error please try again..");
  }
  renderOrderSummary()
  renderPaymentSummary();
}


loadPage();

 
/*
Promise.all([
 loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(()=>{
    resolve();
    });
  }),
]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});


*/ 
/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
})
  .then(() => {
    return new Promise((resolve) => {
      loadCart(()=>{

          resolve();
      });
    });
  })
  .then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
*/
/*
loadProducts(() => {
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    })
});
*/
