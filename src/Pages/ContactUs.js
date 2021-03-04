import React from 'react'
import './styles/contactUs.css'
import { Redirect } from 'react-router-dom'

const ContactUs = () => {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    if (!user) {
        return <Redirect to={`/signin`} />
      }  
    return (
        <>
        <div className="container-lg">
            <div className="text-center text-uppercase">
                <h2>Contact Details</h2>
            </div>
            
            <div className="row cardContainer">
                <div className="col-sm-6">
                    <div className="card customeCard ">
                    <div className="card-body">
                        <h5 className="card-title cardTitle text-center">Personal Details</h5>
                        <div className="card-text cardText text-left">
                            <dl className="row">
                                 <dt className="col-sm-5">
                                    <span className="icons"><i class="fa fa-male" aria-hidden="true"></i></span>
                                    <span className="title">Name</span>
                                 </dt> 
                                <dd className="col-sm-5"> Shashidhar V Surpur</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">
                                    <span className="icons">
                                        <i class="fa fa-home" aria-hidden="true"></i>
                                    </span>
                                    <span className="title">Address</span>
                                </dt>
                                <dd className="col-sm-5"> Shashidhar V Surpur C/O Vasant R Surpur,Madhihal main road,Dharwad</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">
                                    <span className="icons">
                                        <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                                    </span>
                                    <span className="title">Qualification</span>
                                </dt>
                                <dd className="col-sm-5">MCA</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">
                                    <span className="icons">
                                        <i class="fa fa-free-code-camp" aria-hidden="true"></i>
                                    </span>
                                    <span className="title">Skills</span>
                                </dt>
                                <dd className="col-sm-5">
                                    Java Script <br/>
                                    React Js <br/>
                                    Java <br/>
                                    Android <br/>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card customeCard">
                    <div className="card-body">
                        <h5 className="card-title cardTitle text-center">Contacts </h5>
                        <dl className="row">
						    <dt className="col-sm-6">
                                <span className="icons">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                                <span className="title">Email</span>
                            </dt>
						    <dd className="col-sm-6">shashisurpurv@gmail.com</dd>
					    </dl>
                        <dl className="row">
						    <dt className="col-sm-6">
                                <span className="icons">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                </span>
                                <span className="title">Mobile No</span>
                            </dt>
						    <dd className="col-sm-6">8792948307 </dd>
					    </dl>
                        <dl className="row">
						    <dt className="col-sm-6">
                                <span className="icons">
                                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                                </span>
                                <span className="title">WhatsApp No</span>
                            </dt>
						    <dd className="col-sm-6">7411790739 </dd>
					    </dl>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default ContactUs
