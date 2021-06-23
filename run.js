var https = require('https');
const baseURL = 'https://www.shopdisney.co.uk';
//cloth is the name of the product
const productname = 'dress'
const FindProductUrl= '/search?q='+productname;
//const for addtocarttest
const AddtoCartUrl = 'https://www.shopdisney.co.uk/disney-store-disney-princess-costume-collection-for-kids-2841047080168M.html';

//get products using http request
const getProducts = async() =>{
https.get(baseURL+FindProductUrl , (res)=>{
    
    const data = [];
  res.on('data', (d) => {
    data.push(d);
  });
  res.on('end', ()=>{
    const result = Array.from(data
        .join("")
        .matchAll(/<h4\s+class="product__tilename.*">(.*)<\/h4>/gm), m => m[1])

    console.log(result);
});
})
}
getProducts();

const AddtoCart = async() =>{
    https.get(AddtoCartUrl , (res)=>{

        const data = [];
        res.on('data', (d) => {
          data.push(d);
        });
        res.on('end', ()=>{
          const result = Array.from(data
              .join("")
              .matchAll(/data-added-href="(.*)"/gm), m => m[1])
          //this link will add this product 
          console.log(baseURL+result[0]);
      });
      })
}
AddtoCart();

//var addedtocart = baseURL +'/on/demandware.store/Sites-disneyuk-Site/en_GB/Product-AddedToCart?pid=2841047080168M">'
 //console.log(addedtocart)