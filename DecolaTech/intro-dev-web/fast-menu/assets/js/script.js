const renderTableElementsBasedOnDataQuantities = (table, dataObject) => {

  let data = Object.entries(dataObject);
  const tbody = document.createElement("tbody");

  for(let i = 0; i < data.length; i++) {
    const tableRow = document.createElement("tr");

    for(let j = 0; j < data[i].length; j++) {

      if(data[i][j+1] === "") {
        break;
      };

      const tableData = document.createElement("td");
      tableData.innerHTML = data[i][j];
      tableRow.appendChild(tableData);       
    };

    tbody.appendChild(tableRow);
  };
  table.appendChild(tbody);
};

const createTable = (res) => {
  const table = document.createElement("table");
  table.setAttribute("id", "table");
  table.setAttribute("class", "table");

  res.appendChild(table);
  
  return table;
};

const getCEP = (CEP, res) => {
  $.ajax({
    url: `https://viacep.com.br/ws/${CEP}/json/`,
    type: "GET",
    success(data) {
      const table = createTable(res);
      renderTableElementsBasedOnDataQuantities(table, data);
      $(".barra-progresso").hide();
    },
  });
};

const validateInput = () => {
  const CEP = document.querySelector("#inputCEP");
  const NUMBER_CEP = Number(CEP.value);
  const res = document.querySelector("#res");

  if( !CEP ) {
    return res.innerHTML = `Insira um CEP correto <br />${CEP.value} não é um CEP válido`;
  };

  $(".barra-progresso").show();
  getCEP(NUMBER_CEP, res);
};

const button = document.querySelector("#consultarCEP")
button.addEventListener("click", validateInput);

$(function() {
  $(".barra-progresso").hide();
});