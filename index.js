/* The script is place inside an immediately invoked function expression 
which helps protect the scope of variables */

(function() {

    // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

    // Create a hotel object using object literal syntax
    let hotel = {
        name: 'Park',
        roomRate: 240, //Amount in dollars
        discount: 15, // Percentage discount
        offerPrice: function() {
            let offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }

    // Write out the hotel name, standard rate, and the special rate
    let hotelName, roomRate, specialRate;   //Declare variables
    
    hotelName = document.getElemenyById('hotelName');   // Get elements
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;     // Write hotel name
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);     // Write room rate
    specialRate.textContent = '$' + hotel.offerPrice();     // Write offer price

    // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
    let expiryMsg;  // Message displayed to users
    let today;      // Today's date
    let elEnds;     // The element that shows the message about the offer ending

    function offerExpires(today) {
        
    }
}
)