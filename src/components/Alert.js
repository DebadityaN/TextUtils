import React from 'react'

function Alert(props) {

    const capitalize = v => {
        return v.charAt(0).toUpperCase() + v.toLowerCase().slice(1)
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" data-bs-theme={props.mode}>
            <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
        </div>
    )
}

export default Alert