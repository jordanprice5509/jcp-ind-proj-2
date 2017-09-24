function calcTotal() {
         var itemTotal = 0;
         //store the checkbox elements each to a corresponding variable that has access to all properties
         var item1 = document.getElementById("item1");
         var item2 = document.getElementById("item2");
         var item3 = document.getElementById("item3");
         var item4 = document.getElementById("item4");
         var item5 = document.getElementById("item5");
         //now that you have the variables, check the ".checked" property to see if selected
         (item1.checked) ? (itemTotal += 1200) : (itemTotal += 0);
         (item2.checked) ? (itemTotal += 2500) : (itemTotal += 0);
         (item3.checked) ? (itemTotal += 8) : (itemTotal += 0);
         (item4.checked) ? (itemTotal += 13) : (itemTotal += 0);
         (item5.checked) ? (itemTotal += 6) : (itemTotal += 0);
         
         var salesTaxRate = 0.06
         var orderTotal = itemTotal + (itemTotal * salesTaxRate);
         var salesTax = (itemTotal * salesTaxRate);
         var subTotal = (itemTotal);
         var amount1Name = "Subtotal: $";
         var amount2Name = "Tax: $";
         var amount3Name = "Your order total is: $";
         var amount1Dollars = subTotal.toFixed(2);
         var amount2Dollars = salesTax.toFixed(2);
         var amount3Dollars = orderTotal.toFixed(2);
         alert("Subtotal: " + subTotal.toFixed(2)
              )
         alert("Tax: " + salesTax.toFixed(2)
              )
         alert("Your order total is $" + orderTotal.toFixed(2)
              )
      }
  document.getElementById("submit").addEventListener("click", calcTotal, false); 


/*

"Subtotal: " + subTotal.toFixed(2),
               "Tax: " + salesTax.toFixed(2),
               "Your order total is $" + orderTotal.toFixed(2)
*/