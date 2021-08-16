const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form')

// create element and render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    cross.textContent = 'X'

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);

    cafeList.appendChild(li);

    // deleting data
    

}

function helloWorld(){
    console.log('Hellow World')
}

    
// getting data
// db.collection('cafes').orderBy('city').get().then((snapshot) =>{
//     snapshot.docs.forEach(doc => {
//         renderCafe(doc);
//     })
// })

// saving data


// real-time listener
db.collection('cafes').onSnapshot((snapshot)=>{
    let changes = snapshot.docChanges();
    changes.forEach(change=>{
        if(change.type == 'added'){
            renderCafe(change.doc)
        }else if (change.type == 'removed'){
            let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
            cafeList.removeChild(li)
        }
    })
})

function fiturBaruKeren(){
    console.log('fitur baru keren')
}