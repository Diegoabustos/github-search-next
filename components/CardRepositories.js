import React from 'react'


const CardRepositories = ({repositorie}) => {
    return ( 
        
        <div className="col-md-4 mb-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{repositorie.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{repositorie.description}</h6>
                    <a href={repositorie.html_url}>Repositorie Link</a>
                </div>
            </div>
        </div>
        
    );
}
 
export default CardRepositories;