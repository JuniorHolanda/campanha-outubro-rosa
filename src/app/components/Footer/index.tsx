import { PiPhoneCall, PiPhoneCallFill } from "react-icons/pi";
import { Scontainer, Scontent, Sfooter, Sform, Ssignature } from "./Footer.styles";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { VscGlobe } from "react-icons/vsc";
import { TbLetterR } from "react-icons/tb";
import { MdOutlineEmail, MdOutlineMarkEmailUnread } from "react-icons/md";

export default function Footer() {
  const textWhatsApp =
    "Olá venho da campanha Outubro Rosa e gostaria de saber mais sobre os produtos.";
  const numbWhatsApp = "38070539";

  return (
    <Sfooter>
      <Scontent>
        <Scontainer>
          <h3>Social</h3>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/momessooficial"
                aria-label="Ligar para (11) 92631-3152"
              >
                <span>
                  <FaInstagram />
                </span>
                @momessooficial
              </a>
            </li>
            <li>
              <a
                href={"https://catalogo.miriammomesso.com.br/"}
                target="_blank"
                aria-label="Acessar o catálogo Miriam Momesso"
              >
                <span>
                  <VscGlobe />
                </span>
                Catálogo
              </a>
            </li>
          </ul>
        </Scontainer>

        <Scontainer>
          <h3>Contato</h3>
          <ul>
            <li>
              <a
                href="tel:+5511926313152"
                aria-label="Ligar para (11) 92631-3152"
              >
                <span>
                  <PiPhoneCallFill />
                </span>
                11 926313152
              </a>
            </li>

            <li>
              <a
                href={`https://wa.me/5511${numbWhatsApp}?text=${textWhatsApp}`}
                target="_blank"
                aria-label="Conversar no WhatsApp sobre a campanha de Outubro Rosa"
              >
                <span>
                  <FaWhatsapp />
                </span>
                11 {numbWhatsApp}
              </a>
            </li>
            <li>
              <a
                href={"caroline@miriammomesso.com.br"}
                aria-label="Enviar Email para caroline@miriammomesso.com.br"
              >
                <span>
                  <MdOutlineEmail />
                </span>
                caroline@miriammomesso.com.br
              </a>
            </li>
          </ul>
        </Scontainer>

        <Scontainer>
          <h3>Newsletter</h3>
          <Sform>
            <label>
              Insira seu e-mail:
              <input
                type="email"
                name="email"
                placeholder="email@email.com"
                required
              />
            </label>
            <button type="submit">Assinar</button>
          </Sform>
        </Scontainer>
      </Scontent>
      <Ssignature>
        <address>
          Desenvolvido por <a href="https://github.com/JuniorHolanda" target="_blank" rel="noopener noreferrer">Pedro Holanda</a>
        </address>
      </Ssignature>
    </Sfooter>
  );
}
