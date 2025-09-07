import React from 'react'

const Footer = () => {
  return (
    <>
          {/* { <!-- Start of footer -->} */}

  <footer class="footer p-4 mt-5" id="footer">

    <div class="d-md-flex justify-content-between">
      <div class="col-md-4">
        <div className="logo text-light">
            <i class="bi bi-headset mx-4"></i>
            <h5 className='fw-bolder'>RHYTHM</h5>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci nostrum amet ducimus sequi
          architecto.</p>
        <p>
          <i class="bi bi-facebook mx-2 text-warning fs-4"></i>
          <i class="bi bi-instagram mx-2 text-warning fs-4"></i>
          <i class="bi bi-linkedin mx-2 text-warning fs-4"></i>
        </p>
      </div>
      <div class="col-md-3">
        <h3 class="">Contact Us</h3>
        <hr className='w-50'/>
        <p><strong class="text-warning">Address:</strong> Lorem ipsum dolor sit amet, consectetur elit.</p>
        <p><strong class="text-warning">Email:</strong>someon56@gmail.com</p>
        <p><strong class="text-warning">Phone Number:</strong>(+977)-8837834</p>
        <p><strong class="text-warning">Support:</strong>info@company.com</p>
      </div>
      <div class="col-md-3">
        <h3 class="">Help & Support</h3>
        <hr class="w-75"/>
        <p><a href="#" class="text-warning text-decoration-none">Privacy & Policy</a></p>
        <p><a href="#" class="text-warning text-decoration-none">Terms & Condition</a></p>
        <p><a href="#" class="text-warning">FAQs</a></p>
        <p><a href="#" class="text-warning">About Us</a></p>
        <p><a href="#" class="text-warning">Contact Us</a></p>
      </div>

    </div>

  </footer>

  {/* {<!-- End of footer -->} */}

      
    </>
  )
}

export default Footer
