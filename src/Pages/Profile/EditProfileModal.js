import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import { useSelector } from 'react-redux';
import { useFormik } from 'formik'; 

const initialValues = {
    name:""
}

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),
});

const EditProfileModal = ({ isOpen, isClose }) => {
    const { userData } = useSelector((state) => state.profile);

    const { handleChange,handleBlur,handleSubmit,errors, touched,values,resetForm } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => {
            console.log(values);
        },
    })

    useEffect(()=>{
        if(userData){
            resetForm({
                name: userData?.userName
            })
        }
    }, [userData])

    console.log(values);

    return (
        <div>
            <Modal isOpen={isOpen} >
                <ModalHeader >Edit Profile</ModalHeader>
                <fo-rm onSubmit={handleSubmit}>
                    <ModalBody>
                        <label >User name</label>
                        <input name="name" type="text" value={values.name} className={`form-control ${errors.name && touched.name ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur}/>
                        {errors.name && touched.name ? (
                            <div className='text-danger'>{errors.name}</div>
                        ) : null}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={isClose}>
                            Close
                        </Button>
                        <Button color="primary" type="submit">
                            Change
                        </Button>
                    </ModalFooter>
                </fo-rm>
            </Modal>
        </div>
    );
}

export default EditProfileModal;