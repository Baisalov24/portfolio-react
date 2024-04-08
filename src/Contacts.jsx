import React, { useState} from 'react' 

function Contacts() {
const [listContacts] = useState([
  {
    title: 'Phone Number',
    value: '+84123XXX'
  },{
    title: 'Email',
    value: 'aisojf.dev@gmail.com'
  },{
    title: 'Instagram',
    value: '@kasfk.web'
  }
])

  return (
    <section className='contacts' >
       <div className="title" >
        This is my Contacts
       </div>
       <div className="des" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur consequatur quisquam harum.
       </div>
       <div className="list"  >
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Contacts
