function myFunc() {
    let asd = document.getElementById("test");
    asd.classList.toggle("class");
}

function myFunction() {
    let w = document.getElementById("test-two");

    if (w.classList.contains("class-two")) {
        w.classList.remove("class-two");
    }
    else {
        w.classList.add("class-two");
    }
}