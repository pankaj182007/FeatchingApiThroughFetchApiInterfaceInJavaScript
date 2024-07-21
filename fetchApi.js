const url="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const factbtn=document.querySelector("#btn");

//Calling Api whose Address is in URL Veriable
const getApiData = async ()=>{
    console.log("Getting Data....");
    let response = await fetch(url);
    console.log(response);//it return json format data
    let data = await response.json();//it convert json to java script object
    factPara.innerText=data[1].text;
   };
   
   factbtn.addEventListener("click",getApiData);
