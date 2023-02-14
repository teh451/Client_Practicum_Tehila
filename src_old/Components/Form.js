import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import FormChild from './FormChild';
import PersonContext, { personContext } from './PersonContext';
// import { useNavigate } from 'react-router-dom';


export default function Form() {

    // const axios = require('http://localhost:3000/FormChild');
    const personCtx = useContext(personContext);
    // const navigatePerson = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        alert(personCtx.person.firstName)
        alert("-------form-----------")
        axios.post("https://localhost:7094/api/Person",personCtx.person)
        .then(res=> console.log(res))
        .catch(reg=>console.log(reg))
        // {FirstName:data.FirstName,LastName:data.lastName,BirthDate:data.birthDate,Tz:data.tz,Status:data.gender,HMO:data.hmo}
    };

    const [isChild, setIsChild] = useState(false);
    const [isWantAddChild, setIsWantAddChild] = useState(false);
    const [parentTz, setParentTz] = useState();
    function WantAddChild() {
        setIsWantAddChild(true);
    }
   


    // defaultValue={personCtx.person.firstName}
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-4 mb-3">
                <label>First Name </label>
                <input type="text" name="firstName" className="form-control is-valid" placeholder="Enter First Name"   {...register("firstName", { required: true })} 
                onChange={(e)=>{ var p=personCtx.person; p.firstName=e.target.value; personCtx.setPerson(p)}} defaultValue={personCtx.person.firstName}/>
                {errors.firstName && errors.firstName.type === 'required' && (
                    <p className="errordMsg" style={{ color: 'red' }}>First Name is required.</p>
                )}
            </div>
            <div className="col-md-4 mb-3">
                <label>Last Name </label>
                <input type="text" name="lastName" className="form-control is-valid" placeholder="Enter Last Name"{...register("lastName", { required: true })}
                onChange={(e)=>{ var p=personCtx.person; p.lastName=e.target.value; personCtx.setPerson(p)}} defaultValue={personCtx.person.lastName} />
                {errors.lastName && errors.lastName.type === 'required' && (
                    <p className="errordMsg" style={{ color: 'red' }}>Last Name is required.</p>
                )}
            </div>
            <div className="col-md-4 mb-3">
                <label>Tz </label>
                <input type="text" name="tz" className="form-control is-valid" placeholder="Enter TZ"{...register("tz", { required: true, minLength: 9, maxLength: 9 })} 
                onChange={(e) => {setParentTz(e.target.value);
                                   var p=personCtx.person; 
                                   p.tz=e.target.value; 
                                   personCtx.setPerson(p)}} 
                defaultValue={personCtx.person.tz}/>
                {errors.tz && errors.tz.type === 'required' && (
                    <p className="errordMsg" style={{ color: 'red' }}>TZ is required.</p>
                )}
                {errors.tz && (errors.tz.type === 'minLength' || errors.tz.type === 'maxLength') && (
                    <p className="errordMsg" style={{ color: 'red' }}>TZ need to be 9 digits.</p>
                )}
            </div>
            <div className="col-md-4 mb-3">
                <label>Birth Date</label>
                <input type="date" name="birthDate" className="form-control is-valid" placeholder="Enter Birth Date"{...register("birthDate", { required: true })} 
                onChange={(e)=>{ var p=personCtx.person; p.birthDate=e.target.value; personCtx.setPerson(p)}} defaultValue={personCtx.person.birthDate}/>
                {errors.lastName && errors.lastName.type === 'required' && (
                    <p className="errordMsg" style={{ color: 'red' }}>Birth Date is required.</p>
                )}
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01" name="gender">choose gender</label>
                <select className="form-select" id="inputGroupSelect01" {...register("gender", { required: true })}
                onChange={(e)=>{ var p=personCtx.person; p.gender=e.target.value; personCtx.setPerson(p)}} defaultValue={personCtx.person.gender}>
                    <option id="optionGender1 " name="maleGender">male</option>
                    <option id="optionGender2 " name="femaleGender">female</option>
                </select>
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01" name="hmo">choose HMO</label>
                <select className="form-select" id="inputGroupSelect01" {...register("HMO", { required: true })}
                onChange={(e)=>{ var p=personCtx.person; p.HMO=e.target.value; personCtx.setPerson(p)}} defaultValue={personCtx.person.HMO}>
                    <option id="optionHMO1 " name="meuchedet">meuchedet</option>
                    <option id="optionHMO2 " name="klalit">Klalit</option>
                    <option id="optionHMO3 " name="makabi">makabi</option>
                    <option id="optionHMO4 " name="leumit">leumit</option>
                </select>
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">you have  children?</label>
                <select className="form-select" id="inputGroupSelect01" onChange={(e) => {
                    e.target.value == "yes" ? setIsChild(true) : setIsChild(false)
                }}>
                    <option id="isChild " name="no">no</option>
                    <option id="isChild " name="yes">yes</option>
                </select>
            </div>
            {
                isChild ?
                    <>
                        <button onClick={WantAddChild}>To Add Child</button>
                        {
                            isWantAddChild ?
                                <PersonContext><FormChild/></PersonContext>
                                :
                                <></>
                        }
                    </>
                    :
                    <div></div>

            }

            <div className="form-control">
                <label></label>
                <button type="submit" className="btn btn-success">O.K</button>
            </div>
        </form>
     {/* <button onClick={() => {navigatePerson('/Instraction')}}>To Instraction</button> */}
        </>
    )
}