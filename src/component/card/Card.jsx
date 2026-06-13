

const Card = ({user}) => {
  return (
    <div className='card'>
        <h3>{user.name}</h3>
        <p><strong>Email:</strong>{user.emaiil}</p>
        <p><strong>Phone:</strong>{user.phone}</p>
        <p><strong>City:</strong>{user.address.city}</p>
        <p><strong>Company:</strong>{user.company.namne}</p>
    </div>
  )
}

export default Card
