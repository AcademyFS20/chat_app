function openNav() {
    document.getElementById("mySidebar").style.width = "15%";
    document.getElementById("main").style.marginLeft = "15%";
    document.getElementById("openb").style.display = "none";
    document.getElementById("closeb").style.display = "block";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("openb").style.display = "block";
    document.getElementById("closeb").style.display = "none";
  }