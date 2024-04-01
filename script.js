let btn = document.querySelector(".btn-mobile-nav");
let header = document.querySelector(".header");

btn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

let links = document.querySelectorAll("a:link");

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    let href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      let sectionEl = document.querySelector(href);
      sectionEl?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

let navLinks = document.querySelectorAll(".main-nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    header.classList.toggle("nav-open");
  });
});

let heroSection = document.querySelector(".section-hero");

let obs = new IntersectionObserver(
  function (entries) {
    let ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("stiky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("stiky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSection);

function chechflexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
chechflexGap();

function getToday()
{
  var today = new Date();

  //var day = today.getDate(); 
  //var month = today.getMonth();
  //var year = today.getFullYear();

  //return `${day}.${month}.${year}`

  return today.toLocaleDateString()
}

function getMAddress()
{
  var y = atob("bWFpbHRvOg==")
  var x = atob("cGFzY2Fs");
  var b = atob("QGthbWJlcnMuY2g=");

  return y + x + b;
}

function openUrl(url)
{
  let a= document.createElement('a');
  a.target= '_blank';
  a.href= url;
  a.click();
}

const endOfMail = "%0D%0ABitte melden Sie sich sobald wie möglich.%0D%0A%0D%0ABeste Grüsse";

function openBuyRequestMessage(product)
{
  try {
    document.body.style.cursor='wait';
    var madr = getMAddress();
    var tt = getToday();
    location.href = `${madr}?subject=Produktanfrage - ${tt}&body=Guten Tag. %0D%0AIch bin an einem Produkt interessiert: exact360 ${product}. ${endOfMail}`;
  }
  catch{}
  finally {
    document.body.style.cursor='default'
  }
}

function openDemoRequestMessage()
{
  try {
    document.body.style.cursor='wait';
    var madr = getMAddress();
    var tt = getToday();
    location.href = madr + `?subject=Anfrage für Demo - ${tt}&body=Guten Tag. %0D%0AIch bin an einer Demo interessiert. %0D%0A ${endOfMail}`;
  }
  catch{}
  finally {
    document.body.style.cursor='default'
  }
}

function openRequestMessage()
{
  try {
    //document.body.style.cursor='wait';
    var madr = getMAddress();
    var tt = getToday();
    var url = madr + "?subject=Anfrage - " + tt + "&body=Guten Tag";
    location.href ="#cta"
    openUrl(url);
  }
  catch{}
  finally {
    //document.body.style.cursor='default'
  }
}

function openSupportMessage()
{
  try {
    document.body.style.cursor='wait';
    var madr = getMAddress();
    var tt = getToday();
    var url = madr + "?subject=Support - " + tt + "&body=Guten Tag"
    location.href ="#cta"
    openUrl(url);
  }
  catch{}
  finally {
    document.body.style.cursor='default'
  }
}