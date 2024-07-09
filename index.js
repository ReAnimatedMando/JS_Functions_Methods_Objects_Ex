/* The script is placed inside an immediately invoked function expression 
which helps protect the scope of variables */

(function() {

    // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

    // Create a hotel object using object literal syntax
    let hotel = {
        name: 'Park',
        roomRate: 240,
        //Amount in dollars
        discount: 15, 
        // Percentage discount
        offerPrice: function() {
            let offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }

    // Write out the hotel name, standard rate, and the special rate
    let hotelName, roomRate, specialRate;   
    //Declare variables

    // Get elements
    hotelName = document.getElemenyById('hotelName');   
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');
    
    // Write hotel name
    hotelName.textContent = hotel.name;    
    // Write room rate
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
    // Write offer price     
    specialRate.textContent = '$' + hotel.offerPrice();     

    // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
    let expiryMsg;  
    // Message displayed to users
    let today;      
    // Today's date
    let elEnds;     
    // The element that shows the message about the offer ending

    function offerExpires(today) {
        // Declare variables within the function for local scope
        let weekFromToday, day, date, month, year, dayNames, monthNames;

        // Add 7 days time (added in milliseconds)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        // Create arrays to hold the names of days / months
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 
            'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
            'August', 'September', 'October', 'November', 'December'];

        // Collect the parts of the date to show on the page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        // Create the message
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }

    today = new Date();     
    // Put today's date in variable
    elEnds = document.getElementById('offerEnds');      
    // Get the offerEnds element
    elEnds.innerHTML = offerExpires(today);

    // Finish the immediately invoked expression
}())