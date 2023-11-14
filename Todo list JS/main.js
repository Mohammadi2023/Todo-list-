let data = 
[
    { 
        id:1,
        titale: 'get up at 6:00AM',
        completed: false
    },      
    { 
        id:2,
        titale: 'get up at 6:00AM',
        completed: false
    },    
    { 
        id:3,
        titale: 'get up at 6:00AM',
        completed: true
    },    
]
let box = document.querySelector('.box')
let inp1 = document.querySelector('.inp1')
let btnadd = document.querySelector('.btnadd')
let dia = document.querySelector('.dia')
let inpdia = document.querySelector('.inpdia')
let btnsavedia = document.querySelector('.btnsavedia')
let infoDialog = document.querySelector('.info-dialog')
let infoText = document.querySelector('.info-text')
let btnCloseInfo = document.querySelector('.btn-close-info')





function showInfo(id) {
  let todoItem = data.find((e) => e.id == id)
  infoText.textContent = todoItem.titale
  infoDialog.showModal()
}


btnCloseInfo.onclick = () => {
    infoDialog.close()
  }


function adduser(){

     let user = {
        id: Date.now(),
        titale: inp1.value
     }
     data.push(user)
     get()
     inp1.value = "" 
}

btnadd.onclick = ()=>{
    adduser()
}

function deleteuser(id) {
    data = data.filter((e)=>{
        return e.id != id
    })
    get()
}

let idx = null
function edituser(id){
    idx = id
    dia.showModal()
    let useredit = data.find((e)=> e.id==id)
    inpdia.value = useredit.titale
  }


function doneedit(){
    data = data.map((e)=>{
        if(e.id==idx){
    e.titale = inpdia.value
        }
      return e;
    })
    get() 
 dia.close()   
}
btnsavedia.onclick = doneedit;

function cheakboxcompleted(id){
    data= data.map((e)=>{
      if(e.id==id){
      e.completed =! e.completed
      }
      return e;
  })
   get()
  }


  let btnClearAll = document.querySelector('.btn-clear-all')

function clearAll() {
  data = []
  get()
}

btnClearAll.onclick = clearAll

function get() {
 box.innerHTML = ""
  
 data.forEach((elem)=>{
     let cardall = document.createElement("div")
     cardall.classList.add('add')
     let card = document.createElement('div')   
     let card2 = document.createElement('div')
     card2.classList.add('card2')
     let titale = document.createElement('h1')
     titale.innerHTML = elem.titale
     titale.classList.add('titale')
     if(elem.completed==true){
        titale.classList.toggle('togale')
     }
    
     let edit = document.createElement('button')
     edit.innerHTML ="Edit"
      edit.classList.add('edit')   
       edit.onclick=()=>{
          edituser(elem.id)
       } 
      let del = document.createElement('button')
     del.innerHTML ="Delete"
      del.classList.add('del')
     del.onclick = ()=>{
        deleteuser(elem.id)
     }  
     let info = document.createElement('button')
     info.innerHTML ="Info"
      info.classList.add('info')
     let cheakbox = document.createElement('input')
        cheakbox.type='checkbox'
        cheakbox.classList.add('checkbox')
         cheakbox.checked = elem.completed
         cheakbox.onclick=()=>{
           cheakboxcompleted(elem.id) 
         }
     info.onclick = () => {
        showInfo(elem.id)
      }

    card2.append(edit,del,info,cheakbox)
      card.appendChild(titale)
     cardall.append(card,card2)
    box.appendChild(cardall)
  })
}get()