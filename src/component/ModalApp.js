import React, { useState } from 'react'
import { Modal,ModalHeader, ModalBody,ModalFooter} from 'reactstrap'
const ModalApp = ({modalVisible,toggle,users,setUsers}) => {
    const saveUser = ()=>{
       let payload = {
        name,phone,address,lang
       }
       users.push({...payload})
       setUsers({...users})
       toggle()
    }
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const [lang,setLang] = useState("")
  return (
    <Modal isOpen={modalVisible} toggle={toggle}>
      <ModalHeader>
        <h1>Add User</h1>
      </ModalHeader>
      <ModalBody>
        <form>
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Name' className='form-control my-2'/>
            <input type="text" onChange={(e)=>setPhone(e.target.value)} placeholder='Phone' className='form-control my-2'/>
            <input type="text" onChange={(e)=>setAddress(e.target.value)} placeholder='Address' className='form-control my-2'/>
            <select className='form-control my-2' onChange={(e)=>setLang(e.target.value)} >
                <option value="" hidden> Select your language</option>
                <option value="english">English</option>
                <option value="turkish">Turkish</option>
                <option value="russian">Russian</option>
                <option value="uzbek">Uzbek</option>
            </select>
        </form>
      </ModalBody>
      <ModalFooter>
       <button onClick={saveUser} className='btn btn-primary'>Save</button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalApp
