import './contact.css'

function Contact() {
  return (
    <main>
      <div className='form-container'>
        <form className='contact-form'>
          <h2 className='form-heading'>Contact</h2>
          <ul className='form-inputs'>
            <div className='input-items'>
              <div className='input-label-container'>
                <label className='input-label' htmlFor="name">Name</label>
              </div>
              <li>
                <input type="text" id="name" name="name" placeholder="First and last name" required />
              </li>
              <div className='input-label-container'>
                <label className='input-label' htmlFor="name">Email</label>
              </div>
              <li>
                <input type="email" id="email" name="email" placeholder="Email" required />
              </li>
              <div className='input-label-container'>
                <label className='input-label' htmlFor="message">Message</label>
              </div>
              <li>
                <textarea id="message" name="message" placeholder="Enter your message..." rows="20" required></textarea>
              </li>
              <div className='btn-container'>
                <button type='submit' className='submit-btn'>Submit</button>
              </div>
            </div>
          </ul>
        </form>
      </div>
    </main>
  )
}

export default Contact
