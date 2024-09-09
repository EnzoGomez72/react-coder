const Footer = () => {

    return(
        <footer className="footer">
        <div className="footer-contenedor">
        <div className="footer-p">
            <p>AVANTI es no conformarse con lo que existe, es crecer juntos siguiendo nuestras propias expectativas. Elevando nuestro estilo con prendas pensadas y diseñadas para ser atemporales y duraderas.</p>
        </div>
        <div className="footer-ayuda">
            <h4>Ayuda</h4>
            <ul>
                <li><a href="#" target="_blank">Preguntas Frecuentes</a></li>
                <li><a href="https://web.whatsapp.com/" target="_blank">Whatsapp</a></li>
                <li><a href="#" target="_blank">Devoluciones</a></li>
            </ul>
        </div>
        <div className="footer-redes">
            <h4>Redes</h4>
            <ul>
                <li><a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F&hl=es-es&aa_click=8891933284028179" target="_blank">Instagram</a></li>
                <li><a href="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des" target="_blank">TikTok</a></li>
            </ul>
        </div>
    </div>
    <div className="copyright">
        <p>AVANTI Copyright © 2024</p>
    </div>
        </footer>
    )
}

export default Footer;