function Footer() {
    return (
        <footer>

            <div className="newsletter">
                <h2>SIGN UP FOR OUR DAILY INSIDER</h2>

                <div className="subscribe">
                    <input
                        type="email"
                        placeholder="Enter your email"
                    />

                    <button>Subscribe</button>
                </div>
            </div>

            <div className="footer-content">

                <div>
                    <h3>Explore</h3>
                    <p>Home</p>
                    <p>Questions</p>
                    <p>Articles</p>
                    <p>Tutorials</p>
                </div>

                <div>
                    <h3>Support</h3>
                    <p>FAQs</p>
                    <p>Help</p>
                    <p>Contact Us</p>
                </div>

                <div>
                    <h3>Stay connected</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>DEV@Deakin</p>
                <p>© 2026 DEV@Deakin</p>
                <p>Privacy Policy | Terms | Code of Conduct</p>
            </div>

        </footer>
    );
}

export default Footer;