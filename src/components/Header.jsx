import React from 'react'

const Header = () => {
  return (
    <>
{/* {<!-- start of header -->} */}

  <header id="header" class="header px-5">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <div className="logo text-light">
            <i class="bi bi-headset mx-4"></i>
            <h5 className='fw-bolder'>RHYTHM</h5>
          </div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav m-auto my-2 my-lg-0 navbar-nav-scroll">
            <li class="nav-item">
              <a class={`${location.pathname== '/home' ? 'active':''}nav-link`} href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/products">Products</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/cart">Carts</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./about.html">About</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./contact.html">Contact</a>
            </li>

          </ul>

          <div class="d-flex">
            <a href="#" class="btn btn-outline-dark btn-sm me-2">Login</a>
            <a href="/register" class="btn btn-light btn-sm">Register</a>
          </div>

        </div>
      </div>
    </nav>
  </header>

   {/* { <!-- end of header -->} */}
      
    </>
  )
}

export default Header
