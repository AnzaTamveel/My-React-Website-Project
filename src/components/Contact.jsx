import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
        <div>
            <label>Name</label>
            <input type="text" required placeholder="abc.." />
          </div>  
          <div>
            <label>Email</label>
            <input type="text" required placeholder="xyz@abc.com" />
          </div> 
          <div>
            <label>Message</label>
            <input type="text" required placeholder="Write your Query here..." />
          </div>
          <button type='submit'>Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
