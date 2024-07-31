// ini form

function formValidation() {
  console.log("Ini Form");
  let name = document.getElementById("input-name").value;
  console.log(name);

  //pengecekan nama
  if (name == "") {
    alert("Maaf inputan anda kosong!");
  } else {
    alert("Sukses menginput");
  }
}

let indexSlide = 1; //[0, 1, 2]
showSlide(1);

function nextSlide(n) {
  showSlide((indexSlide += n));
}

function showSlide() {
  let listImage = document.getElementsByClassName("main-content-banner");
  console.log(listImage);

  //algo mereset index
  // algoritma untuk mengilangkan gambar
  let index = 0;
  while (index < listImage.length) {
    listImage[index].style.display = "none";
    index++;
  }

  //memunculkan satu gambar
  listImage[indexSlide - 1].style.display = "block";
}

//aglo untuk auto slide
//setInterval(() => nextSlide(1), 3000);
