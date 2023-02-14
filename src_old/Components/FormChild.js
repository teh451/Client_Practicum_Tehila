import axios from 'axios';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { personContext } from './PersonContext';

export default function FormChild() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const personCtx = useContext(personContext)
    const OnSubmit = (data) => {
        alert("----------------")
        const parent = axios.get(`https://localhost:7094/api/Person/tz/${personCtx.person.tz}`)
        personCtx.setArrChild([...personCtx.arrChild, { Name: data.name, Tz: data.tz, BirthDate: data.birthDate, parentId: parent.Id }])
        console.log(parent)
    };
    // function AddChild() {
       
    // }

    return (
        <form onSubmit={handleSubmit(OnSubmit)}>
            <div className="col-md-4 mb-3">
                <label> Name </label>
                <input type="text" name="NameChild" className="form-control is-valid" placeholder="Enter First Name"{...register("NameChild", { required: true })} />
                {errors.firstName && errors.firstName.type === 'required' && (
                    <p className="errordMsg" style={{ color: 'red' }}>First Name is required.</p>
                )}
            </div>
            <div className="col-md-4 mb-3">
                <label>Tz</label>
                <input type="text" name="tzChild" className="form-control is-valid" placeholder="Enter TZ"{...register("tzChild", { required: true, minLength: 9, maxLength: 9 })} />
                {errors.tz && errors.tz.type === 'required' && (
                    <p className="errordMsg" style={{ color: 'red' }}>TZ is required.</p>
                )}
                {errors.tz && (errors.tz.type === 'minLength' || errors.tz.type === 'maxLength') && (
                    <p className="errordMsg" style={{ color: 'red' }}>TZ need to be 9 digits.</p>
                )}
            </div>
            <div className="col-md-4 mb-3">
                <label>Birth Date</label>
                <input type="date" name="birthDateChild" className="form-control is-valid" placeholder="Enter Birth Date"{...register("birthDateChild", { required: true })} />
                {errors.lastName && errors.lastName.type === 'required' && (
                    <p className="errordMsg" style={{ color: 'red' }}>Birth Date is required.</p>
                )}
            </div>
            <div className="form-control">
                <label></label>
                <button type="submit" className="btn btn-success">O.K From Child</button>
            </div>
        </form>
    )
}