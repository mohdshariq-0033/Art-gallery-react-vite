import React from 'react'
import { Link } from 'react-router-dom'

export default function contact() {
  return (
    <div>
      <>

  <form action="https://api.web3forms.com/submit" method="POST">
    <input
      type="hidden"
      name="access_key"
      defaultValue="c12ee6e6-6ed5-4952-8e3c-395aa25541d0"
    />
    <div className="mb-3 my-4 mx-5 mt-5">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
        type="email"
        name="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div className="mb-3 my-4 mx-5">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
        type="password"
        name="pass"
        className="form-control"
        id="exampleInputPassword1"
      />
    </div>
    <div className="mb-3 form-check my-4 mx-5">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Check me out
      </label>
    </div>
    <button type="submit" className="btn btn-primary my-4 mx-5">
      Submit
    </button>
  </form>

</>

    </div>
  )
}
