const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('product');
const productversion = urlParams.get('pv') 
const generalitem = urlParams.get('mp'); 
const tytext = urlParams.get('ty_t'); 

var productpath = `https://github.com/Plum-Studios/plum-studios.github.io/releases/download/${generalitem}/${product}`

var productwithcors = "http://cors.io/?" + productpath 

var validty_t = ["Military Hangout"]
var validproducts = ["Military.Hangout.Setup.exe", "Military.Hangout.Part.2.Setup.exe"]
var validmps = ["MH"]

function invalidlink() {
  history.back();
  window.close();
  throw new Error("Product not found");
}


if (!validmps.includes(generalitem)) {
  invalidlink()
}

if (!validproducts.includes(product)) {
  invalidlink()
}

if (!validty_t.includes(tytext)) {
  invalidlink()
}


document.write("<span class=\"ty-mainthankstext\">Thank you for downloading " + tytext + " " + productversion + "</span>");

document.write("<a href=\"javascript:history.back()\" class=\"ty-returntostore\">Return To Store</a>");

window.location.href = productpath;
