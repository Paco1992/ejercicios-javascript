console.log(document.querySelector("h1"));

const input=document.querySelector("input");
const addBtn=document.querySelector(".btn-add");
const ul=document.querySelector("ul");
const empty=document.querySelector(".empty"); 

addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const text=input.value;
    if(text !==" "){
        const li=document.createElement("li");
        const p=document.createElement("p");
        p.textContent=text;
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
        
        input.value=" ";
        empty.style.display="none";

    }

});

function addDeleteBtn(){
    const deleteBtn=document.createElement("button");
    deleteBtn.textContext="x";
    deleteBtn.className="btn-delete";

    deleteBtn.addEventListener("click",(e)=>{
        const item=e.target.parentElement
        ul.removeChild(item);

        const items=document.querySelectorAll("li");
        if(items.lenght===0){
            empty.style.display="block";
        }
    });
    return deleteBtn;
}


/*Para entenderlo de una forma muy simple, las principales diferencias entre librerías y frameworks son que un framework nos proporciona un marco de trabajo para desarrollar aplicaciones, mientras que las librerías únicamente solucionan un problema concreto, haciendo el código más fácil de leer.*/