import React from 'react'


function ContactForm() {
  return (

    <div className='row'>

      <h1> Contact Us</h1>
      <form action="" method='POST'>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Name and surname</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name and surname" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

      </form>

    </div>



  )

}

export default ContactForm