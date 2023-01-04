const futbolista2 = {
  nombre: 'Cristiano Ronaldo',
  equipo: 'Juventus',
  goles: -5,
  clubes: ['Manchester United', 'Real Madrid', 'Juventus'],
  saludar: () => { return `hola, soy ${futbolista2.nombre}`}
}

futbolista2.clubes.push('Sporting de Lisboa')

const futbolista1 = {
  nombre: 'Lionel Messi',
  equipo: 'Barcelona',
  goles: 1534,
  clubes: ['Barcelona', 'PSG', 'Manchester City'],
  saludar: function () {
    return `Hola, soy ${this.nombre}`
  }
}
const futbolistas = [futbolista1, futbolista2]


futbolistas.forEach(futbolista => {
  console.log(futbolista.clubes.length);
  console.log(futbolista);
  let saludo = futbolista.saludar()
  saludo += ' Tengo ' + futbolista.goles + ' goles y jugue en '

  futbolista.clubes.forEach((club, idx) => {
    console.log(club);
    console.log(idx);

    if(idx === futbolista.clubes.length - 1) {
      saludo += (idx + 1) + '-' + club
    } else {
      saludo += (idx + 1) + '-' + club + ', '
    }

  })

  console.log(saludo);
})


futbolistas.forEach(futbolista => {
  console.log(futbolista.clubes.length);
  console.log(futbolista);
  let saludo = futbolista.saludar()
  saludo += ' Tengo ' + futbolista.goles + ' goles y jugue en '

  futbolista.clubes.splice(-2).forEach((club, idx) => {
    console.log(club);
    console.log(idx);
    

    if(idx === futbolista.clubes.length - 1) {
      saludo += (idx + 1) + '-' + club
    } else {
      saludo += (idx + 1) + '-' + club + ', '
    }

  })

  console.log(saludo);
})
