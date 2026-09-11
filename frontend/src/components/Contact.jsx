import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

// ✅ Web3Forms Access Key — https://web3forms.com par email daalo aur key lo
// Step 1: web3forms.com par jaiye
// Step 2: chhotu6826@gmail.com daalo -> "Get Access Key" click karo
// Step 3: Email mein aayi key yahan paste karo:
const WEB3FORMS_ACCESS_KEY = '4deec19f-8237-47fa-b694-f972783d67b1';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact: ${formData.subject}`,
          message: formData.message,
          from_name: 'Portfolio Contact Form'
        })
      });
      const data = await response.json();
      console.log('Web3Forms Response:', data);
      if (data.success) {
        setStatus({ type: 'success', message: '✅ Message sent! I will get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Web3Forms Error:', error);
      setStatus({ type: 'error', message: `❌ Error: ${error.message}` });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '2rem',
      width: '100%'
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', fontFamily: 'var(--font-heading)' }}>
        Get in <span className="text-gradient">Touch</span>
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '3rem',
        width: '100%',
        maxWidth: '1000px',
        justifyContent: 'center',
        alignItems: 'stretch'
      }}>
        
        {/* Left Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center' }}
        >
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05} transitionSpeed={1000} glareEnable={true} glareMaxOpacity={0.1} glareColor="white" glarePosition="all">
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'var(--accent-gradient)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
                <Mail size={28} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Email Me</h4>
                <a href="mailto:chhotu6826@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                  chhotu6826@gmail.com
                </a>
              </div>
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05} transitionSpeed={1000} glareEnable={true} glareMaxOpacity={0.1} glareColor="white" glarePosition="all">
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'var(--accent-gradient)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
                <Phone size={28} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Call Me</h4>
                <a href="tel:+917766861339" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                  +91 7766861339
                </a>
              </div>
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05} transitionSpeed={1000} glareEnable={true} glareMaxOpacity={0.1} glareColor="white" glarePosition="all">
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1.5rem', border: '1px solid rgba(37, 211, 102, 0.3)' }}>
              <div style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
                <FaWhatsapp size={28} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>WhatsApp</h4>
                <a href="https://wa.me/917766861339?text=Hi%20Chhotu,%20I%20saw%20your%20portfolio!" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: '500', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={e => e.currentTarget.style.textDecoration = 'none'}>
                  +91 7766861339 (Chat Now)
                </a>
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel" 
          style={{ flex: '1 1 500px', padding: '2.5rem', borderRadius: '24px', textAlign: 'left', position: 'relative' }}
        >
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Send a Message</h3>
          
          {status.message && (
            <div style={{
              padding: '1rem',
              marginBottom: '1rem',
              borderRadius: '8px',
              background: status.type === 'success' ? 'rgba(46, 200, 102, 0.1)' : 'rgba(220, 39, 67, 0.1)',
              border: `1px solid ${status.type === 'success' ? '#2EC866' : '#dc2743'}`,
              color: status.type === 'success' ? '#2EC866' : '#dc2743'
            }}>
              {status.message}
            </div>
          )}

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }} onSubmit={handleSubmit}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white', outline: 'none', fontFamily: 'var(--font-body)' }} />
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white', outline: 'none', fontFamily: 'var(--font-body)' }} />
            </div>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white', outline: 'none', fontFamily: 'var(--font-body)' }} />
            <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Your Message" rows="5" style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white', outline: 'none', fontFamily: 'var(--font-body)', resize: 'none' }}></textarea>
            
            <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
              {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
