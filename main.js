const text = [
  { name: "noila", surname: "ibodullayeva", middlename: "dilshod qizi", age: 17, phonenumber: 994118432 },
  { name: "dilnoza", surname: "ibodullayeva", middlename: "dilshod qizi", age: 16, phonenumber: 994118432 },
  { name: "laylo", surname: "ibodullayeva", middlename: "dilshod qizi", age: 18, phonenumber: 994118432 },
  { name: "diana", surname: "ibodullayeva", middlename: "dilshod qizi", age: 18, phonenumber: 994118432 },
  { name: "men", surname: "ibodullayeva", middlename: "dilshod qizi", age: 19, phonenumber: 994118432 },
  { name: "sen", surname: "ibodullayeva", middlename: "dilshod qizi", age: 20, phonenumber: 994118432 }
]
var index = -1

function add() {

  console.log(text);
  const code = document.getElementById("input2").value
  const code2 = document.getElementById("input1").value
  const code3 = document.getElementById("input3").value
  const code4 = document.getElementById("input4").value
  const code5 = document.getElementById("input5").value

  if (index > -1) {
    text[index] = { surname: code, name: code2, middlename: code3, age: code4, phonenumber: code5 };

  } else {
    text.push({ surname: code, name: code2, middlename: code3, age: code4, phonenumber: code5 })

  }

  document.getElementById("btn").innerHTML = "Add"


  document.getElementById("input2").value = " "
  document.getElementById("input3").value = " "
  document.getElementById("input1").value = " "
  document.getElementById("input4").value = " "
  document.getElementById("input5").value = " "
  init()
}

function init(malumot = text) {
  var javob = " "
  malumot.forEach((val, raqame) => {
    javob +=
      `

  <tr>
  <td>${raqame + 1}</td>
  <td>${val.surname}</td>
  <td>${val.name}</td>
  <td>${val.middlename}</td>
  <td>${val.age}</td>
  <td>${val.phonenumber}</td>
  <td><button  style="margin-left: 10px"  class="button1" onclick = "edit(${raqame})" style="margin-left: 10px" ><img src="./editt.png" style="height: 15px; width: 15px;" alt=""></button>
  <button class="button1" onclick="del(${raqame})"><img src="./delete.jpg" style="height: 15px; width: 15px;" alt=""></button>
  </td>
  </tr>

  `
  })

  document.getElementById("todo").innerHTML = javob
}
init()
function edit(a) {
  console.log(a);



  document.getElementById("input2").value = text[a].surname
  document.getElementById("input3").value = text[a].middlename
  document.getElementById("input1").value = text[a].name
  document.getElementById("input4").value = text[a].age
  document.getElementById("input5").value = text[a].phonenumber

  index = a
  document.getElementById("btn").innerHTML = "Update"
}


function del(delIndex) {
  console.log("deletee", delIndex);
  var isDelete = confirm("rostnan ham o'chirmoqchimisz?")
  console.log(isDelete);
  if (isDelete) {


    text.splice(delIndex, 1)
    init()
  }
}

function searchingg() {
  var searchingclass = document.getElementById("inpitsearch").value
  var result = text.filter(value => {
    return value.name == searchingclass
  })

  if (result.length > 0) {
    init(result)

  } else {
    init(text)
  }
  console.log(result);
}

function filteringg() {
  // var filteringclass = document.getElementById("todo")
  var result = text.filter(value => {
    return value.age >= 18
   
  })
  init(result);

  console.log(result);
}
