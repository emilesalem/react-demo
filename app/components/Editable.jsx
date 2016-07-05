import React from 'react';

export default({
    editing,
    value,
    onEdit,
    ...props
}) => {
    var component;
    if (editing) {
        // component =  <div onClick={onEdit} {...props}>
        //     <span>edit: {value}</span>
        //   </div>;
        component = <Edit value={value} onEdit={onEdit} {...props}/>;
    } else {
        component = <span {...props}>{value}</span>;
    }
    return component;
}

class Edit extends React.Component {
    render() {
        const {
            value,
            ...props
        } = this.props;

        return <input type="text" autoFocus={true} defaultValue={value} onBlur={this.finishEdit} onKeyPress={this.checkEnter} {...props}/>;
    }
    checkEnter = (e) => {
        if (e.key === 'Enter') {
            this.finishEdit(e);
        }
    }
    finishEdit = (e) => {
        const value = e.target.value;
        if (this.props.onEdit) {
            this.props.onEdit(value);
        }
    }
}
