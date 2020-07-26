import React, { Component } from "react";
import '../../style/footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="Foot">
                <div className="row w-100">
                    <div className="col-12 col-md-4">
                        <div id="footer-left">
                            <h5 id="freelance" className="m-0">
                                FREELANCE
                            </h5>
                            <p className="m-0">&copy;2020</p>
                            <p className="m-0">Privacy - Terms</p>
                        </div>
                    </div>

                    <div className="col-4 col-md-2">
                        <h5>Category</h5>
                        <p>Programming</p>
                        <p>Economy</p>
                        <p>Music</p>
                    </div>
                    <div className="col-4 col-md-2">
                        <h5>About</h5>
                        <p>About us</p>
                        <p>Our Plans</p>
                        <p>What we offer</p>
                    </div>
                    <div className="col-4 col-md-2">
                        <h5>Support</h5>
                        <p>Need help?</p>
                        <p>Settings</p>
                        <p>Contact us</p>
                    </div>
                    <div className="col-4 col-md-2">
                        <h5>Community</h5>
                        <p>Meet up</p>
                        <p>Social media</p>
                        <p>Company</p>
                    </div>
                </div>
            </div>
        );
    }
}
