import React from 'react'

const CardProfile = () => {
    return (
        <div className="row mt-4  justify-content-center">

        <div className="row people">
                    <div className="col-md-6 col-lg-4 item">
                        <div className="box"><img className="rounded-circle" src="https://lh3.googleusercontent.com/-JM2xsdjz2Bw/AAAAAAAAAAI/AAAAAAAAAAA/DVECr-jVlk4/photo.jpg"/>
                            <h3 className="name">username</h3>
                            <p className="title">name</p>
                            <p className="description">description</p>
                            <p className="description">location</p>
                            <div className="social">
                                <a href="#"><i className="fa fa-facebook-official">
                                    </i>
                                </a>
                            <a href="#">
                                <i className="fa fa-twitter">
                                    </i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
 
export default CardProfile;