const data = [{
    "name": "DROPSET TRAINER SHOES Blue",
    "size": [38, 39],
    "color": ["blue", "grey"],
    "price": 125,
    "icon": "Frame 14.png",
    "page": "product_page.html",
    "id": 0,
    "type": ["outdoor", "runners"]
},
{
    "name": "ULTRABOOST 1.0 MIAMI Green",
    "size": [39, 40, 41],
    "color": ["red", "green"],
    "price": 125,
    "icon": "tr1.png",
    "id": 1,
    "type": ["outdoor", "runners"]
},
{
    "name": "ADIDAS OZELIA SHOES Green",
    "size": [ 38, 40, 43, 44],
    "color": ["green"],
    "price": 125,
    "icon": "tr2.png",
    "id": 2,
    "type": ["outdoor", "runners"]
},
{
    "name": "ADIDAS 4DFWD 2 RUNNING SHOES",
    "size": [ 41,42],
    "color": ["red", "dark grey"],
    "price": 125,
    "icon": "tr3.png",
    "id": 3,
    "type": ["outdoor", "runners"]
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [ 42, 45, 47],
    "color": ["grey"],
    "price": 125,
    "icon": "tr4.png",
    "id": 4,
    "type": ["outdoor", "runners"]
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [43, 45, 46],
    "color": ["black", "yellow"],
    "price": 125,
    "icon": "tr5.png",
    "id": 5,
    "type": ["outdoor", "runners"]
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [39, 40, 44],
    "color": ["dark grey", "white"],
    "price": 125,
    "icon": "tr6.png",
    "id": 6,
    "type": ["outdoor", "runners"]
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [45, 46],
    "color": ["blue", "black"],
    "price": 125,
    "icon": "tr7.png",
    "id": 7,
    "type": ["outdoor", "runners"]
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [ 40, 46],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr8.png",
    "id": 8,
    "type": ["outdoor", "runners"]
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [38, 44, 47],
    "color": ["grey", "white"],
    "price": 125,
    "icon": "tr9.png",
    "id": 9,
    "type": ["outdoor", "runners", "basketball"]
}]

/*let active_filtr = 0

function render(){
    data.map((element)=>{
        if(element.id > 0){
        let card0 = document.createElement('div')  
        let list = document.querySelector('.catalog')
        card0.classList.add('card')
        console.log(card0)
        card0.innerHTML = `
                            <img src="/img/${element.icon}" alt="">
                            <p>${element.name}</p>
                            <button><img src="/img/Button125.png" alt=""></button>`
                            
            if(pr(element, active_filtr)){
                list.append(card0)
            }
   
        }
    })
}
function But38(index, size){
    active_filtr = size
    let arr_but = document.querySelectorAll('#but')

    for(let i = 0; i < arr_but.length; i++){
        if(arr_but[i].classList.contains('white')){
            if(i === index){
                arr_but[i].classList.toggle('black')
                arr_but[i].classList.toggle('white')
                render()
            }
        }  
        else if(arr_but[i].classList.contains('black')){
            if(i === index){
                arr_but[i].classList.toggle('black')
                arr_but[i].classList.toggle('white')
                let list = document.querySelector('.catalog')
                list.innerHTML = ''
            }
        }
    }
}

function pr(index, act_filt){
    let ind = index.size
    for(let i = 0; i < ind.length; i++){
        if(ind[i] === act_filt){
            return 1
        }
        console.log(2)
        return 0
    }
}

render()*/

const RED = 'red'
const BLUE ='blue'
const GREY = 'grey'
const YELLOW = 'yellow'
const DARK_GREY = 'dark grey'
const BLACK = 'black'
const BROWN = 'brown'
const GREEN = 'green'
const BEIGE = 'beige'
const DARK_BROWN ='dark brown'

const RUNNERS = 'runners'
const CASUAL_SHOES = 'casual shoes'
const HIKING = 'hiking'
const SNEAKER = 'sneaker'
const BASKETBALL = 'basketball'
const GOLF = "golf"
const OUTDOOR = "outdoor"

let active_filtr = 0
let act_filt_col 
let act_filt_type
let arr_but = document.querySelectorAll('#but')
let arr_color = document.querySelectorAll('#butc')
let arr_type = document.querySelectorAll('#butt')

function But(){
    for(let i = 0; i < arr_but.length; i++){
        if(arr_but[i].classList.contains('black')){
            arr_but[i].classList.toggle('white')
            arr_but[i].classList.toggle('black')
        }
    }
    for(let a = 0; a < arr_color.length; a++){
        if(arr_color[a].classList.contains('border')){
            arr_color[a].classList.toggle('border')
            arr_color[a].classList.toggle('colors')
        }
    }
    //убирать галочку у чекбокса!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    for(let d = 0; d < arr_type.length; d++){
       
    }
    rend(0)
}

function Check(index, type){
    act_filt_type = type
    for(let i = 0; i < arr_type.length; i++){
        if(i === index){
            if(arr_type[i].classList.contains('emp')){
                arr_type[i].classList.toggle('emp')
                rend(3)
            }else{
                arr_type[i].classList.add('emp')
                rend(0)
            }  
        }
    }
}

function ButCol(index, color){
    act_filt_col = color

    for(let i = 0; i < arr_color.length; i++){
        if(arr_color[i].classList.contains('colors')){
            if(i === index){
                arr_color[i].classList.toggle('colors')
                arr_color[i].classList.toggle('border')
                rend(2)
            }
        }  
    }
}

function But38(index, size){
    active_filtr = size

    for(let i = 0; i < arr_but.length; i++){
        if(arr_but[i].classList.contains('white')){
            if(i === index){
                arr_but[i].classList.toggle('black')
                arr_but[i].classList.toggle('white')
                rend(1)
            }
        }  
    }
}

function rend(x){
    let cards =[]
    if(x === 1){
    data.map((element)=>{
        let remainder = element.size
        for(let i = 0; i < remainder.length; i++){
            if(remainder[i] === active_filtr){
                cards.push(element)      
            }
        }
    })
   
    }else if(x===0){
        let list = document.querySelector('.catalog')
        list.innerHTML = ' '
    }else if(x===2){
        data.map((element)=>{
            let remainder = element.color
            
            for(let i = 0; i < remainder.length; i++){
                if(remainder[i] === act_filt_col){
                    cards.push(element)     
                }
            }
        })
        
    }else if(x===3){
        data.map((element)=>{
            let remainder = element.type
            
            for(let i = 0; i < remainder.length; i++){
                
                if(remainder[i] === act_filt_type){
                    cards.push(element)     
                }
            }
        })
        
    }
    if(cards.length >= 1){
        cards.map((el)=>{
            let card0 = document.createElement('div')  
            let list = document.querySelector('.catalog')
            card0.classList.add('card')
            card0.innerHTML = `
                                <img src="/img/${el.icon}" alt="">
                                <p>${el.name}</p>
                                <button><img src="/img/Button125.png" alt=""></button>`
            list.append(card0)
        })
    }
}

