const url="https://fakestoreapi.com/products/1";
const factPara=document.querySelector("#fact");

const getApi=async()=>{
let response = await fetch(url);
let data=await response.json();
console.log(data);
factPara.innerText=data.title;
}