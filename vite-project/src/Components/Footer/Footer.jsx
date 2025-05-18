import { Facebook, Instagram, Youtube } from "lucide-react";
import './footer.css'
export default function Footer(){
    return (
        <>
            <div className="footer_outer_container">
                <div className="footer_inner_container">
                    <div className="footer_icons">
                        <li><Facebook/></li>
                        <li><Instagram/></li>
                        <li><Youtube/></li>
                    </div>
                    <div className="footer_data">
                        <div>
                            <ul>
                                <li>Audio Description</li>
                                <li>Investor Relations</li>
                                <li>Legal Notice</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Help Center</li>
                                <li>Jobs</li>
                                <li>Cookie Preferences</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Gift Cards</li>
                                <li>Terms of Use</li>
                                <li>Corporate Information</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Media Center</li>
                                <li>Privacy</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="service_code">
                        <p>Service Code</p>
                    </div>
                    <div className="copy_write">
                        &copy; 1997-2024 Netflix, Inc.
                    </div>
                </div>
            </div>
        </>
    )
}