import { CONTACT_INFO } from '../utils/constants';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import './WhatsAppButton.css';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppButton({
  phoneNumber = CONTACT_INFO.WHATSAPP_NUMBER,
  message = CONTACT_INFO.WHATSAPP_MESSAGE,
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={href}
      className='whatsapp-float'
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Falar no WhatsApp'
      title='Falar no WhatsApp'
    >
      <WhatsAppIcon size={32} />
    </a>
  );
}
