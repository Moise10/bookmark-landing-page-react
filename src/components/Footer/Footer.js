import { Button } from '@mui/material'
import React from 'react'

import { useForm } from "react-hook-form";


function Footer() {
  const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
  return (
    <div>
      <p className="footer__header">35,000+ Already Joined</p>
      <h2 className="footer_secondary">Stay up-to-date with what we're doing</h2>
      <form action="">
        <input type="email" />
        <Button>Contact Us</Button>
      </form>
    </div>
  )
}

export default Footer