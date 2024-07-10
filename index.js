/* The script is placed inside an immediately invoked function
    which helps protect the scope of variables */

(function() {

    // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

    // Create a hotel object using object literal syntax
    let hotel =  {
        name: 'Park',
        roomRate: 240,
        // Amount in dollars
        discount: 15,
        // Percentage discount
        offerPrice: function() {
            let offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };

    
})