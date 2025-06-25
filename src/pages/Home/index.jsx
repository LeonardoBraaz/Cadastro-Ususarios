import './style.css'
import Trash from '../../assets/icon-trash.svg'


function Home() {
  const users = [
    {
      id: '01',
      nome: 'Renato Rodrigues',
      idade: 22,
      email: 'renato.rodrigues@gmail.com'

    },
    {
      id: '02',
      nome: 'Fernanda Silva',
      idade: 40,
      email: 'fernanda.silva@gmail.com'
    },
    {
      id: '03',
      nome: 'Ariano Velaz',
      idade: 25,
      email: 'ariano.velaz@gmail.com'

    },
  ]


  return (
    
    <div className='container'>
      <form>
        <h1>Cadastro de Usuário</h1>
        <input placeholder='Nome' name='nome' type='text' ></input>
        <input placeholder='Idade' name='idade' type='number' />
        <input placeholder='E-mail' name='email' type='text'></input>
        <button type='button'> Cadastrar</button>
      </form>
    
      {users.map(user => (

        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.nome} </span></p>
            <p>Idade: <span>{user.idade}</span> </p>
            <p>Email: <span>{user.email}</span> </p>
          </div>
          <button>
            <img src={Trash} alt='Deletar Usuário'/>
          </button>
        </div>
      ))}
     
    </div>
  )
}

export default Home
