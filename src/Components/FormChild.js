// import axios from 'axios';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { personContext } from './PersonContext';

export default function FormChild(props) {
    const {
        register,
        // handleSubmit,
        formState: { errors },
    } = useForm();

    const setIsWantAddChild=props.setIsWantAddChild
    
    const perCtx = useContext(personContext);

    const [nameChild, setNameChild] = useState('');
    const [tzChild, setTzChild] = useState('');
    const [birthDateChild, setBirthDateChild] = useState(null);
    const addChildOK = () => {
        alert("----------------")
        perCtx.setArrChild([...perCtx.arrChild, { Name: nameChild, Tz: tzChild, BirthDate: birthDateChild }])
        setIsWantAddChild(false)
    };
    return (
        <form >
            <div className="col-md-4 mb-3">
                <label> Name </label>
                <input type="text" name="Name" required onInput={(e) => { setNameChild(e.target.value) }} className="form-control is-valid" placeholder="Enter First Name"{...register("NameChild", { required: true })} />
                {errors.firstName && errors.firstName.type === 'required' && (
                    <p className="errordMsg" style={{ color: 'red' }}>First Name is required.</p>
                )}
            </div>
            <div className="col-md-4 mb-3">
                <label>Tz</label>
                <input type="text" name="tz" required minLength={9} onInput={(e) => { setTzChild(e.target.value) }} className="form-control is-valid" placeholder="Enter TZ"{...register("tzChild", { required: true, minLength: 9, maxLength: 9 })} />
                {errors.tz && errors.tz.type === 'required' && (
                    <p className="errordMsg" style={{ color: 'red' }}>TZ is required.</p>
                )}
                {errors.tz && (errors.tz.type === 'minLength' || errors.tz.type === 'maxLength') && (
                    <p className="errordMsg" style={{ color: 'red' }}>TZ need to be 9 digits.</p>
                )}
            </div>
            <div className="col-md-4 mb-3">
                <label>Birth Date</label>
                <input type="date" name="birthDate" required onInput={(e) => { setBirthDateChild(e.target.value) }} className="form-control is-valid" placeholder="Enter Birth Date"{...register("birthDateChild", { required: true })} />
                {errors.lastName && errors.lastName.type === 'required' && (
                    <p className="errordMsg" style={{ color: 'red' }}>Birth Date is required.</p>
                )}
            </div>
            <div className="form-control">
                <label></label>
                <button onClick={addChildOK} className="btn btn-success">O.K From Child</button>
            </div>
            
        </form>
        
    )
}