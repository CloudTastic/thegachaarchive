function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

var copyTextElements = document.getElementsByClassName('copyText');

function copyText(text) {
  var tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  var toast = document.createElement('div');
  toast.classList.add('toast');
  toast.textContent = 'Text copied!';
  document.body.appendChild(toast);

  setTimeout(function () {
      toast.style.opacity = '0';
      setTimeout(function () {
          document.body.removeChild(toast);
      }, 1000);
  }, 2000);
}


document.getElementById("defaultOpen").click();

function toggleInfo() {
    var info = document.getElementById("additional-info");
    var button = document.querySelector(".toggle-button");

    if (info.style.display === "block") {
        info.style.display = "none";
        button.textContent = "Read More...";
        button.classList.remove("active");
    } else {
        info.style.display = "block";
        button.textContent = "Code";
        button.classList.add("active");
    }
}
