

function calc_goal (init_amt, percentage) {
  if(percentage < 0 or percentage > 100)document.getElementById('goal').innerHTML = "Sorry, you can't save less than 0% or higher than 100%!";
  document.getElementById('goal').innerHTML = "In order to save " + percentage + " of your initial amount, you need to save $" + (init_amt * (percentage/100));
}
