import React, { useState } from 'react'
import ModalApp from './ModalApp'
const Users = () => {
    const [users,setUsers] = useState([])
    const [modalVisible,setVisible] = useState(false)
  return (
    <>
        <ModalApp modalVisible={modalVisible} toggle={()=>setVisible(false)} users={users} setUsers={setUsers}></ModalApp>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 offset-1 my-4">
                <button className='btn btn-info' onClick={()=>setVisible(true)}>Add</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 offset-1">
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>T/r</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Language</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((item,index)=>{
                                    return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address}</td>
                                    <td>{item.lang}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Users
