import React from 'react'
import CreateForm from './createForm'
import EditForm from './editForm'
import useFormsState from '../../hook/useFormsState';

function Forms() {
    const { forms } = useFormsState();console.log(forms);
    return (
        <>
            { forms.create.show && <CreateForm /> }
            { forms.edit.show && < EditForm />}
        </>
  )
}

export default Forms