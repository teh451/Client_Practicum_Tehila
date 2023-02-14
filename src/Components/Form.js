import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import FormChild from './FormChild';
import  { personContext } from './PersonContext';
import { useNavigate } from 'react-router-dom'
import ExportToExcel from './ExportToExel'


export default function Form() {

    const personCtx = useContext(personContext);
    const navigatePerson = useNavigate();
     
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isChild, setIsChild] = useState(false);
    const [isWantAddChild, setIsWantAddChild] = useState(false); 

    const onSubmit = (data) => {
        console.log(personCtx.person.FirstName)
        console.log(personCtx.person.Status)
        if (!isWantAddChild) {
            alert("--------form-----------")

            axios.post(`https://localhost:7094/api/Person`, { FirstName: data.firstName, LastName: data.lastName, Tz: data.tz, BirthDate: data.birthDate, Status: personCtx.person.Status, HMO: personCtx.person.Hmo })
                .then(() => {
                    axios.get(`https://localhost:7094/api/Person/tz/${personCtx.person.tz}`)
                        .then((res) => {
                            console.log(res)
                            personCtx.arrChild.map((c) => {
                                axios.post(`https://localhost:7094/api/Child`, { Name: c.Name, Tz: c.Tz, BirthDate: c.BirthDate, ParentId: res.data.id })
                                    .then((res) => { console.log(res) })
                                    .catch((req) => { console.log(req) })

                            })
                        })
                        .catch((req) => { alert(req) })

                })
                .catch(() => console.log("error post"))
        }
    };

    function WantAddChild() {
        setIsWantAddChild(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-4 mb-3">
                    <label>First Name </label>
                    <input type="text" name="firstName" className="form-control is-valid" placeholder="Enter First Name"   {...register("firstName", { required: true })}
                        onInput={(e) => { var p = personCtx.person; p.FirstName = e.target.value; personCtx.setPerson(p) }} defaultValue={personCtx.person.FirstName} />
                    {errors.firstName && errors.firstName.type === 'required' && (
                        <p className="errordMsg" style={{ color: 'red' }}>First Name is required.</p>
                    )}
                </div>
                <div className="col-md-4 mb-3">
                    <label>Last Name </label>
                    <input type="text" name="lastName" className="form-control is-valid" placeholder="Enter Last Name"{...register("lastName", { required: true })}
                        onChange={(e) => { var p = personCtx.person; p.LastName = e.target.value; personCtx.setPerson(p) }} defaultValue={personCtx.person.LastName} />
                    {errors.lastName && errors.lastName.type === 'required' && (
                        <p className="errordMsg" style={{ color: 'red' }}>Last Name is required.</p>
                    )}
                </div>
                <div className="col-md-4 mb-3">
                    <label>Tz </label>
                    <input type="text" name="tz" className="form-control is-valid" placeholder="Enter TZ"{...register("tz", { required: true, minLength: 9, maxLength: 9 })}
                        onChange={(e) => {
                            var p = personCtx.person;
                            p.Tz = e.target.value;
                            personCtx.setPerson(p)
                        }}
                        defaultValue={personCtx.person.Tz} />
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
                        onChange={(e) => { var p = personCtx.person; p.BirthDate = e.target.value; personCtx.setPerson(p) }} defaultValue={personCtx.person.BirthDate} />
                    {errors.lastName && errors.lastName.type === 'required' && (
                        <p className="errordMsg" style={{ color: 'red' }}>Birth Date is required.</p>
                    )}
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01" name="gender">choose gender</label>
                    <select className="form-select" id="inputGroupSelect01" {...register("gender", { required: true })}
                        onChange={(e) => {
                            if (e.target.value === "male") {
                                var p = personCtx.person
                                p.Status = 0
                            }
                            else if (e.target.value === "female") {
                                var p = personCtx.person
                                p.Status = 1
                            }
                            personCtx.setPerson(p)
                        }}
                        defaultValue={personCtx.person.gender}>
                        <option id="optionGender1 " name="maleGender">male</option>
                        <option id="optionGender2 " name="femaleGender">female</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01" name="hmo">choose HMO</label>
                    <select className="form-select" id="inputGroupSelect01" {...register("HMO", { required: true })}
                        onChange={(e) => {
                            if (e.target.value === "meuchedet") {
                                var p = personCtx.person
                                 p.Hmo = 0
                            }
                            else if (e.target.value === "makabi") {
                                var p = personCtx.person
                                p.Hmo = 1
                            }
                            else if (e.target.value === "leumit") {
                                var p = personCtx.person
                                p.Hmo = 2
                            }
                            else if (e.target.value === "klalit") {
                                var p = personCtx.person
                                p.Hmo = 3
                            }
                            personCtx.setPerson(p)
                        }}
                        defaultValue={personCtx.person.HMO}>
                        <option id="optionHMO1 " name="meuchedet">meuchedet</option>
                        <option id="optionHMO2 " name="klalit">Klalit</option>
                        <option id="optionHMO3 " name="makabi">makabi</option>
                        <option id="optionHMO4 " name="leumit">leumit</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">you have  children?</label>
                    <select className="form-select" id="inputGroupSelect01" onChange={(e) => {
                        e.target.value === "yes" ? setIsChild(true) : setIsChild(false)
                    }}>
                        <option id="isChild " name="no">no</option>
                        <option id="isChild " name="yes">yes</option>
                    </select>
                </div>
                {
                    isChild ?
                        <>
                            <button onClick={WantAddChild} >To Add Child</button>
                            {
                                isWantAddChild ?
                                    <FormChild setIsWantAddChild={setIsWantAddChild} personCtx={personCtx} />
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
            <button onClick={() => navigatePerson('/')}>Home</button>
            <ExportToExcel apiData={personCtx} fileName={personCtx.person.name} />
        </>
    )
}