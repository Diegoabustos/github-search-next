import React from 'react'


const Form = () => {
    return ( 
        <>
        <div className="row mt-4  justify-content-center">
            <div className="col-md-4">
                <input 
                    // onChange={(e) => onChange(e)} 
                    class="form-control" 
                    type="text" 
                    placeholder="GitHub Username"
                />
            </div>
        </div>
        <div className="row mt-4  justify-content-center">
            <div className="col-md-4">
                <input type="submit" className="btn btn-block btn-primary" value="Search"/>
            </div>
        </div>
        </>
     );
}
 
export default Form;