let todo=document.getElementById('input')
let btn=document.getElementById('add')
let list=document.getElementById('todolist')

btn.addEventListener('click',display)
let todos=[]

function display(){
    todos.push(todo.value)
    adder(todo.value)
    todo.value=''
    
}
function adder(val){
    let para =document.createElement('span')
    let space=document.createElement('br')
    para.innerText=val
    list.appendChild(para)
   
    
    list.appendChild(space)
    para.addEventListener('click',()=>{
        para.style.textDecoration="line-through"
        para.addEventListener('click',()=>{
            para.style.textDecoration="none"
            para.addEventListener('click',()=>{
                para.style.textDecoration="line-through"
        
            })
    
        })

    })
    para.addEventListener('dblclick',()=>{
        list.removeChild(para)
        list.removeChild(space)
        remove(val)
    })
    
    

}
function remove(val){
    let index = todos.indexOf(val)
    if (index > -1) {
        todos.splice(index, 1);
      }
    }