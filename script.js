// let movies = [
//     {id:1, name: 'Forsaj', rating: 8, year: 2010, mavzu: 'cars'},
//     {id:2, name: 'Qasoskorlar', rating: 7, year: 2013, mavzu: 'jangari'},
//     {id:3, name: 'Transtformers', rating: 9, year: 2000, mavzu: 'robots'},
//     {id:4, name: 'Doktor', rating: 8, year: 2002, mavzu: 'urush'}
// ]

// let kino = movies.filter((mov)=>{
//     if(mov.rating > 7){
//         console.log(mov.name);
//     }
// })

let text = document.querySelector('div')

let numbers = [ 1,2,3,4,5,6,7,8,9,10]

numbers.map((num)=>{
    let yangi = document.createElement('p')
    yangi.textContent = num


if(num > 5){
    yangi.style.color = 'red'
    yangi.style.background = 'blue'
} else{
    yangi.style.color = 'blue'
    yangi.style.background = 'red'
}
text.appendChild(yangi)
})




