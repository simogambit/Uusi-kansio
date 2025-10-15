function getData() {
  var destination = document.getElementById("destination").value;
  var arrival = document.getElementById("arrival").value;
  var services = "";

  if (document.getElementById("CheckboxGroup1_0").checked) {
    services += "Internet ";
  }
  if (document.getElementById("CheckboxGroup1_1").checked) {
    services += "Air Conditioning ";
  }
  if (document.getElementById("CheckboxGroup1_2").checked) {
    services += "Minibar ";
  }
  if (document.getElementById("CheckboxGroup1_3").checked) {
    services += "Car rent ";
  }
  if (document.getElementById("CheckboxGroup1_4").checked) {
    services += "Sauna ";
  }
  localStorage.setItem("destination", destination);
  localStorage.setItem("arrival", arrival);
  localStorage.setItem("services", services);

  alert("Tallennettu");
}

function loadData() {
    var destination = localStorage.getItem("destination");
    var arrival = localStorage.getItem("arrival");
    var services = localStorage.getItem("services");

    if (destination !== null) {
        document.getElementById("sessiondata").innerHTML = 
        "Destination: " + destination + "<br>" +
        "Arrival date" + arrival +"<br>" +
        "Services: " + services; 
        
    }
}