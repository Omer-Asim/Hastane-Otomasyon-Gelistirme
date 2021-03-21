var inputİsim = document.querySelector("#name");
var inputCourse = document.querySelector("#course");
var inputAuthor = document.querySelector("#author");
var butonElementi = document.querySelector("#gondermeButonu");
var resimElementi = document.querySelector(".loading");

function Kontrol() {

  if (inputİsim.value) {
    inputİsim.classList.add("is-valid");
  } else {
    inputİsim.classList.remove("is-valid");
  }

  if (inputCourse.value) {
    inputCourse.classList.add("is-valid");
  } else {
    inputCourse.classList.remove("is-valid");
  }

  if (inputAuthor.value) {
    inputAuthor.classList.add("is-valid");
  } else {
    inputAuthor.classList.remove("is-valid");
  }

  if (inputİsim.value && inputCourse.value && inputAuthor.value) {
    butonElementi.removeAttribute("disabled");
  } else {
    butonElementi.setAttribute("disabled", "");
  }
}

inputİsim.onfocusout = Kontrol;
inputCourse.onfocusout = Kontrol;
inputAuthor.onfocusout = Kontrol;


function ResimYüklemeEkranı() {
  resimElementi.style.display = "block";
  window.setTimeout(kartEkleme, 1000);
}



function kartEkleme() {
  var ebeveynElementi = document.querySelector(".customer-list");
  var rastgeleElementi = Math.floor(Math.random()*6);
  var yeniDegisken = '<div class="col-11 mx-auto col-md-6 col-lg-4 my-3">' +
    '<div class="card text-left">' +
    '  <img src="./img/cust-'+rastgeleElementi+'.jpg" class="card-img-top" alt="">' +
    '  <div class="card-body"> ' +
    '    <!-- customer name -->'+
    '    <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name">'+inputName.value+' </span></h6>'+
    '    <!-- end of customer name -->'+
    '    <!-- customer name -->'+
    '    <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">'+inputCourse.value+'</span></h6>'+
    '    <!-- customer name -->'+
    '    <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author">'+inputAuthor.value+'</span></h6>'+
    '    <!-- end of customer name -->'+
    '    <!-- end of customer name -->'+
    '  </div>'+
    ' </div>'+
    ' </div>';
  ebeveynElementi.insertAdjacentHTML("beforeend", yeniDegisken);
  inputİsim.value = "";
  inputCourse.value = "";
  inputAuthor.value = "";
  resimElementi.style.display="none";
  Kontrol();
}



// var inputName = document.querySelector("#name");
// var inputCourse = document.querySelector("#course");
// var inputAuthor = document.querySelector("#author");
// var butonElementi = document.querySelector("#gondermeButonu");
// var yuklemeElementi = document.querySelector(".loading");
//
//
// function formKontrol() {
//
//   if (inputName.value) {
//     inputName.classList.add("is-valid");
//
//   } else {
//     inputName.classList.remove("is-valid");
//   }
//
//   if (inputCourse.value) {
//     inputCourse.classList.add("is-valid");
//
//   } else {
//     inputCourse.classList.remove("is-valid");
//   }
//
//   if (inputAuthor.value) {
//     inputAuthor.classList.add("is-valid");
//
//   } else {
//     inputAuthor.classList.remove("is-valid");
//   }
//   if (inputName.value && inputAuthor.value && inputCourse.value) {
//     butonElementi.removeAttribute("disabled");
//   } else {
//     butonElementi.setAttribute("disabled", "");
//   }
// }
//
// /*document.querySelector("#name").onfocusout = formKontrol;*/
// inputName.onfocusout = formKontrol;
// inputCourse.onfocusout = formKontrol;
// inputAuthor.onfocusout = formKontrol;
//
// function yuklemeEkrani() {
//   yuklemeElementi.style.display="block";
//   window.setTimeout(kartEkleme, 2000);
//
//
//
// }
//
// function kartEkleme() {
//   var ebeveynElementi = document.querySelector(".customer-list");
//   var rastgeleElementi = Math.floor(Math.random()*6);
  // var yeniDegisken = '<div class="col-11 mx-auto col-md-6 col-lg-4 my-3">' +
  //   '<div class="card text-left">' +
  //   '  <img src="./img/cust-'+rastgeleElementi+'.jpg" class="card-img-top" alt="">' +
  //   '  <div class="card-body"> ' +
  //   '    <!-- customer name -->'+
  //   '    <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name">'+inputName.value+' </span></h6>'+
  //   '    <!-- end of customer name -->'+
  //   '    <!-- customer name -->'+
  //   '    <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">'+inputCourse.value+'</span></h6>'+
  //   '    <!-- customer name -->'+
  //   '    <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author">'+inputAuthor.value+'</span></h6>'+
  //   '    <!-- end of customer name -->'+
  //   '    <!-- end of customer name -->'+
  //   '  </div>'+
  //   ' </div>'+
  //   ' </div>';
  // ebeveynElementi.insertAdjacentHTML("beforeend", yeniDegisken);
  // inputName.value = "";
  // inputCourse.value = "";
  // inputAuthor.value = "";
  // yuklemeElementi.style.display="none";
  // formKontrol();
//
// }
