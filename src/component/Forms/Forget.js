import React from "react";
import validator from 'validator';
import { useHistory } from 'react';

function ForgetForm() {


    // const history = useHistory();
    // const handleClick = () => {
    //     history.push('./component/Form.js');
    // };
    return(
        <>
           <form className='signup-form-card' action ="" method='POST'>
                <h2 className='form-heading'>Forget Password</h2>
                <div className='input-el'>
                    <label htmlFor='email'>Email</label>
                    <input type="text" name="email" id="email" autoComplete='off'
                    ></input>
                </div>
                <button  className='btn' type="submit" >Proceed</button>

            </form>
        </>
    )
}
export default ForgetForm;