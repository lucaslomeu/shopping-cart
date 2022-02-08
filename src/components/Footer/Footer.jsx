import React from 'react';
import PaymentImg from '../../assets/images/formas-de-pagamento.png';
import SeloSSL from '../../assets/images/selo-ssl.png';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="institutional">
          <div className="footer-title">Institucional</div>
          <div className="institutional-item">Quem somos</div>
          <div className="institutional-item">FAQ</div>
          <div className="institutional-item">Blog</div>
          <div className="institutional-item">Parceiros</div>
        </div>
        <div className="info-links">
          <div className="footer-title">Atendimento</div>
          <div className="info-item">Termos de Privacidade</div>
          <div className="info-item">Prazo e Formas de Entrega</div>
          <div className="info-item">Trocas e Devoluções</div>
          <div className="info-item">Central de Atendimento</div>
        </div>
        <div className="social-links">
          <div className="footer-title">Redes Sociais</div>
          <div className="social-items">
            <div className="social-item">Instagram</div>
            <div className="social-item">Facebook</div>
            <div className="social-item">WhatsApp</div>
          </div>
        </div>
        <div className="side-right-footer ">
          <div className="payment">
            <img src={PaymentImg} alt="Meios de pagamento" />
          </div>
          <div className="security">
            <img src={SeloSSL} alt="Selo de segurança" />
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; LomeuShop - Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
