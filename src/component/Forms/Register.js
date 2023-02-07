import React from "react";

export default function Register () {
    return(
        <>
            <form className='form-card' action ="">
                <h2 className='form-heading'>Register</h2>
                <div className='input-el'>
                    <label htmlFor='email'>Email</label>
                    <input type="text" name="email" id="email" autoComplete='off'
                    ></input>
                </div>

                <div className='input-el'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="password" autoComplete='off'
                    ></input>
                </div>

                <div className='input-el'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="password" autoComplete='off'
                    ></input>
                </div>
                <button  className='register-btn' type="submit">Register</button>

            </form>
        </>
    )
}