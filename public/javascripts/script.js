

function calc_goal () {
  var amt = parseInt(document.getElementById('InitAmount').value);
  var percent = parseInt(document.getElementById('Percent').value);
  console.log("Hello World");
  console.log(amt);
  console.log(percent);
  console.log(typeof(amt));
  console.log(typeof(percent));
  if(percent < 0 || percent > 100){
    document.getElementById('goal').innerHTML = "Sorry, you can't save less than 0% or higher than 100%! You also can't start out with a negative amount!";
  }
  if(amt < 0){
    document.getElementById('goal').innerHTML = "You also can't start out with a negative amount!";
  }
  document.getElementById('goal').innerHTML = "In order to save " + percent + "% of your initial amount, you need to save $" + (amt * (percent/100));
}



document.getElementById("Submit").addEventListener("click", function() {calc_goal(); }, true);
