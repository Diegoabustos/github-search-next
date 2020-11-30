import React from 'react'

const CardProfile = () => {
    return (
        <div className="row mt-4  justify-content-center">

        <div class="row people">
                    <div class="col-md-6 col-lg-4 item">
                        <div class="box"><img class="rounded-circle" src="https://lh3.googleusercontent.com/-JM2xsdjz2Bw/AAAAAAAAAAI/AAAAAAAAAAA/DVECr-jVlk4/photo.jpg"/>
                            <h3 class="name">username</h3>
                            <p class="title">name</p>
                            <p class="description">description</p>
                            <p class="description">location</p>
                            <div class="social">
                                <a href="#"><i class="fa fa-facebook-official">
                                    </i>
                                </a>
                            <a href="#">
                                <i class="fa fa-twitter">
                                    </i>
                                    </a>
                                    <a href="#">
                                        <i class="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
 
export default CardProfile;