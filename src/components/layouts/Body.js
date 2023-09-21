import perfil from '../../assets/perfil.jpg'
import styles from './Body.module.css'


function Body() {

  function getLegenda(nivel) {
    if (nivel <= 40) {
      return 'Básico';
    } else if (nivel <= 70) {
      return 'Intermediário'
    } else {
      return 'Avançado'
    }
  }

  const habilidades = [
    { nome: 'HTML', nivel: 80 },
    { nome: 'CSS', nivel: 60 },
    { nome: 'JavaScript', nivel: 35 },
    { nome: 'PHP (Laravel)', nivel: 50 },
    { nome: 'Python', nivel: 35 },
    { nome: 'React JS', nivel: 35 },
  ]

  return (
    <div className={styles.container}>
      <img src={perfil} alt="Perfil" className={styles.perfil} />
      <div className={styles.card}>
        <h1>Habilidades</h1>
        <hr />
        {habilidades.map((habilidade) => (
          <div key={habilidade.nome}>
            <h2>{habilidade.nome}</h2>
            <div className={styles.barra}>
              <span style={{ width: `${habilidade.nivel}%` }}></span>
            </div>
            <span className={styles.nivel}>{getLegenda(habilidade.nivel)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Body