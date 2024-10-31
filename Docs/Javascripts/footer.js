const footerSection = document.getElementById('footer');
const currentYear = new Date().getFullYear();

footerSection.innerHTML = `
    <div class="main-footer">
        <div class="logoinfo" data-aos="fade-up">
            <h2>ITServicesGroup</h2>
            <p>ITSG</p>
            <div class="contact-details">
                <h1>Contact Us</h1>
                <ul>
                    <li>
                        <div class="fa fa-phone"></div>
                        <a href="tel:+7967969">+92 31526662632</a>
                    </li>
                    <li>
                        <div class="fa fa-envelope"></div>
                        <a href="mailto:talha@gmail.com">talha@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="com" data-aos="fade-up">
            <h1>Pages</h1>
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./Malware-removal.html">Services</a></li>
                <li><a href="./Covered-areas.html">Covered Area</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </div>
        <div class="info" data-aos="fade-up">
            <h1>Social Media</h1>
            <div class="sociallogos">
                <div class="logobox">
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                </div>
            </div>
        </div>
    </div>
    <footer>© Copyright @ITSG ${currentYear}</footer>
`;
