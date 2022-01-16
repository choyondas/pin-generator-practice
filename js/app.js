function getPin() {
  const pin = Math.round(Math.random() * 10000);

  const pinStr = pin + "";
  if (pinStr.length == 4) {
    return pin;
  }else{
      console.log("3 digit ", pin)
return getPin();
  }

  
}

function generatePin() {
  const pin = getPin();
  document.getElementById("pinNum").value =pin;
}
