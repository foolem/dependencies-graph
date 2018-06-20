let json = {
  "groups": [
    { code: "CM118", name: "Funções", dependencies: null },
    { code: "CM119", name: "Geometria Analítica", dependencies: null },
    { code: "CM041", name: "Cálculo I", dependencies: [
      "CM118"
    ] },
    { code: "CM042", name: "Cálculo II", dependencies: [
      "CM041"
    ] },
    { code: "CM043", name: "Cálculo III", dependencies: [
      "CM041",
      "CM120"
    ] },
    { code: "CM053", name: "Álgebra Linear II", dependencies: [
      "CM120"
    ] }
  ]
};

console.log(json);

let array = [];

for (var i = 0; i < json.groups.length; i++) {
  array.push(json.groups[i]);
}

for (var i = 0; i < array.length; i++) {
  if (array[i].dependencies == null) {
    document.getElementById("app").innerHTML += "<div style='margin: 20px;text-align: center;border: 1px solid black;width:150px;height:100px'>"
    + array[i].code + "<br />" + array[i].name + "</div>";
  } else {
    document.getElementById("app").innerHTML += "<div style='margin: 20px;text-align: center;border: 1px solid black;width:150px;height:100px'>"
    + "<span style='font-size: 10px'>Depende de: " + array[i].dependencies + "</span> <br />" + array[i].code + "<br />" + array[i].name + "</div>";
  }
}
