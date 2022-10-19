import { useEffect, useMemo, useState } from 'react';


//* este archivo es un custom hook que permite manejar formularios, cuando se usa se le debe enviar el esta inicial que correspone a los names de los campos del formulario
export const useForm = ( initialForm = {}, formValidations =[] ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation] = useState({});

    useEffect(()=>{
        createValidators();
    },[formState]);


    useEffect(()=>{
        setFormState( initialForm );
    },[initialForm])


    const isFormValid = useMemo(()=>{

        for (const formValue of Object.keys(formValidation)) {
            
            if ( formValidation[formValue] !== null ) return false;
        }

        return true
    },[formValidation])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () =>{

        const formCheckedValues= {};

        for (const formField of Object.keys( formValidations )) {
            
            const [fn, errorMessage] = formValidations[formField];

            formCheckedValues[ `${formField}Valid`] = fn( formState[ formField ] ) ? null : errorMessage;
        
        }

        setFormValidation(formCheckedValues);

    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        formValidation,
        isFormValid
        
    }
}