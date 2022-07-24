import React from 'react'
import { ListGroup } from 'react-bootstrap'

const Sidebar = () => {

    const rooms = ['first room', 'second room', 'third room']

    return (
        <>
            <h2 className="mb-3">Available rooms</h2>
            <ListGroup>
                {rooms.map((room, idx) => (
                    <ListGroup.Item key={idx}>{room}</ListGroup.Item>
                ))}
            </ListGroup>
            <h2 className="mt-3">Members</h2>
        </>
    )
}

export default Sidebar
