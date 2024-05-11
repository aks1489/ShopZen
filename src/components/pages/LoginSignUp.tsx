import './loginsignup.css'

export default function LoginSignUp () {

    return (
        <div className="container">
            <ul className="nav nav-underline justify-content-center" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">SignIn</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">SignUp</button>
            </li>
            </ul>
            <div className="tab-content main_tab d-flex justify-content-center h-100" id="myTabContent">
                <form className="tab-pane fade show active mt-3 needs-validation" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0} >
                    <div className="card card_shadow border-0" style={{width : "22rem"}}>
                        <div className="card-body d-flex flex-column">
                            <form action="">
                                <div className="mb-3 row">
                                    <label htmlFor="loginEmail" className="col-form-label fw-normal form_text">Email</label>
                                    <div className="">
                                        <input type="text"  className="form-control form_text" id="loginEmail" placeholder='example@email.com' required/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="loginPassword" className="col-form-label form_text" >Password</label>
                                    <div className="">
                                        <input type="password" className="form-control form_text" id="loginPassword" required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success">Log In</button>
                            </form>
                        </div>
                    </div>
                </form>
                <div className="tab-pane fade mt-3" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                    <div className="card p-0 card_shadow signup_card border-0" style={{width : "22rem"}}>
                        <div className="card-body d-flex flex-column">
                        <form className="row g-1 needs-validation" >
                            <div className="col-md-12 ">
                                <label htmlFor="validationTooltip01" className="form-label form_text fw-medium">First name</label>
                                <input type="text" className="form-control form_text" id="validationTooltip01" required />
                                <div className="valid-tooltip">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-12 ">
                                <label htmlFor="validationTooltip02" className="form-label form_text fw-medium">Last name</label>
                                <input type="text" className="form-control form_text" id="validationTooltip02" required />
                                <div className="valid-tooltip">
                                    Looks good!
                                </div>
                            </div>
                            {/* <div className="col-md-12 ">
                                <label htmlFor="validationTooltip03" className="form-label form_text fw-medium">City</label>
                                <input type="text" className="form-control form_text" id="validationTooltip03" required />
                                <div className="invalid-tooltip">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <label htmlFor="validationTooltip04" className="form-label form_text fw-medium">State</label>
                                <select className="form-select form_text" id="validationTooltip04" required>
                                    <option selected disabled className='form_text'>Choose...</option>
                                    <option className='form_text'>...</option>
                                </select>
                                <div className="invalid-tooltip form_text">
                                    Please select a valid state.
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <label htmlFor="validationTooltip05" className="form-label form_text fw-medium">Zip</label>
                                <input type="text" className="form-control form_text" id="validationTooltip05" required />
                                <div className="invalid-tooltip">
                                    Please provide a valid zip.
                                </div>
                            </div> */}
                            <div className="col-md-12 ">
                                <label htmlFor="validationTooltip05" className="form-label form_text fw-medium">Email</label>
                                <input type="email" className="form-control form_text" id="validationTooltip05" required />
                                <div className="invalid-tooltip">
                                    Please provide a valid email.
                                </div>
                            </div>
                            <div className="col-md-12 ">
                                <label htmlFor="validationTooltipUsername" className="form-label form_text fw-medium">Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text form_text fw-medium" id="validationTooltipUsernamePrepend">@</span>
                                    <input type="text" className="form-control form_text" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required />
                                    <div className="invalid-tooltip">
                                        Please choose a unique and valid username.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 ">
                                <label htmlFor="validationTooltip05" className="form-label form_text fw-medium">Password</label>
                                <input type="text" className="form-control form_text" id="validationTooltip05" required />
                                <div className="invalid-tooltip">
                                    Please provide a valid Password.
                                </div>
                            </div>
                            <div className="form-check col-md-12">
                                <input className="form-check-input form_text" type="checkbox" value="" id="flexCheckChecked"  required/>
                                <label className="form-check-label form_text fw-medium" htmlFor="flexCheckChecked">
                                    I Agree to Terms and Conditions
                                </label>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-success w-100" type="submit">Submit form</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}