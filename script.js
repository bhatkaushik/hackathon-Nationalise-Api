//  variable for storing the name
let NAME="" ;

// setting up background color for the page
document.body.style.background="linear-gradient(to right,#FF5677 0%,#577BC1 100%) ";

// create a top heading
let jumbo = document.createElement("div");
jumbo.setAttribute=("class","container-fluid");
let heading = document.createElement("h2");
document.body.appendChild(jumbo);

heading.setAttribute("class","h2 p-5 bg-dark text-white text-center ");
heading.innerHTML="Welcome to Nationalise.com";

// create a paragraph 
let para = document.createElement("p");
para.setAttribute("class", "font-weight-bold text-black text-center");
para.style.fontFamily="sans-serif";
para.style.fontSize="20px";
para.style.width="100%";


para.innerHTML="Find the Nationality of the person by just entering the name ";



jumbo.appendChild(heading);
jumbo.appendChild(para);

//  create a main container for searching
let head_container = document.createElement("div");
head_container.setAttribute("class","container-fluid container-sm container-md container-lg bg-info font-weight-bold p-5");
document.body.appendChild(head_container);
head_container.style.borderRadius="40px";
head_container.style.width="85%";

// create input for searching name 
let inp = document.createElement("input");
inp.setAttribute("value","");
inp.setAttribute("class" , "form-control form-control-lg ml-3");
inp.setAttribute("placeholder" , "Type the Name here ");
inp.addEventListener("change",(e)=>{
NAME =String(e.target.value)
;
console.log(NAME);
})
head_container.appendChild(inp);


// create a button for searching
let btn =document.createElement("button");
btn.setAttribute("class","btn btn-md btn-primary font-weight-bold mr-3 text-white");
btn.style.float="right";
btn.innerHTML="Search";

head_container.appendChild(btn);

head_container.style.display="flex";

// functionality for finding name by using fetch api and async await and try catch

btn.addEventListener("click",async()=>{
    console.log("search button is pressed")
    try{
        var url = `https://api.nationalize.io?name=${NAME}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        process(data);
    } catch (err) {
        console.log(err);
        alert("this name is not present in the Api")
    }  
});

// creaTE A TABLE TO DISPLAY THE result
let display_result = document.createElement("div");
display_result.setAttribute("class","container  text-white font-weight-bold text-center");
display_result.style.fontSize="20px";


let table_result = document.createElement("table");
table_result.setAttribute("class", "table table-dark table-lg table-sm table-hover table-borderless p-2")
table_result.style.borderRadius="30px";
table_result.style.margin ="10px";
table_result.style.boxShadow="5px 10px 10px red inset";


document.body.appendChild(display_result);
display_result.appendChild(table_result);



let process =(details) =>{
table_result.innerHTML=`<tr>
<td> Country : ${details.country[0].country_id} </td>
     
<td> Probabilty : ${details.country[0].probability.toFixed(3)}</td> 
</tr>
<tr>
<td>  Country : ${details.country[1].country_id}</td>
     
<td>  Probabilty : ${details.country[1].probability.toFixed(3)} </td> 
</tr>`; 
};

