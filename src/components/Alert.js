import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        return word.charAt(0).toUpperCase() + word.substring(1,word.length).toLowerCase()
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}: {props.alert.mssg}</strong>
        </div>
    )
}
