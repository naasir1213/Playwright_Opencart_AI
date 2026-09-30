export class Helper {
    static convertPriceToNumber(price:string){
      const cleaned = price.replace(/[^0-9.]/g, '');
      return parseFloat(cleaned);
    }
  static getProductDetails(){

    return{
        productName:"MacBook",
        productQuantity:"1",
        totalprice:"$602.00"
    };
  }

  static getLoginDetails(){
   return{

    email:"pavanol@xyz.com",
    password:"test@123"
   };

  }
}