/*Search country*/
function btnCountry() {
  let listCountry = document.getElementById("countryMenu");
  if (listCountry.style.display === "block") {
    listCountry.style.display = "none";
  } else {
    listCountry.style.display = "block";
  }
}  

/*Stars*/
let ListStars = document.querySelectorAll('.menuCheckListStars');

ListStars.forEach(function (menuCheckListStars) {
  menuCheckListStars.addEventListener('click', function (event) {
    event.target.closest('.menuCheckListStars').classList.toggle('active');
  });
});

/*Type*/
function btnType() {
  let listType = document.getElementById("typeMenu");
  if (listType.style.display === "block") {
    listType.style.display = "none";
  } else {
    listType.style.display = "block";
  }
}

/*Price*/
function btnPrice() {
  let listPrice = document.getElementById("priceMenu");
  if (listPrice.style.display === "block") {
    listPrice.style.display = "none";
  } else {
    listPrice.style.display = "block";
  }
}



/*Price range*/
$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 8000,
    values: [500, 5000],
    slide: function slide(event, ui) {
      $("#amount1").val(ui.values[0]);
      $("#amount2").val(ui.values[1]);
    }
  });
  $("#amount1").val($("#slider-range").slider("values", 0));
  $("#amount2").val($("#slider-range").slider("values", 1));
});

/*Filter*/
function myFunction() {
  let input, filter, ul, li, p, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName("p")[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}



function uncheck() {
 let uncheck = document.getElementsByClassName('check');

 for(let i = 0; i < uncheck.length; i++) {
  if(uncheck[i].type == 'checkbox') {
   uncheck[i].checked = false;
  }
 }
}
