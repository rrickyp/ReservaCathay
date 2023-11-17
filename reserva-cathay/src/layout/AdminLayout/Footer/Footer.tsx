import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className="footer border-top px-sm-2 py-2">
      <Container fluid className="align-items-center flex-column flex-md-row d-flex justify-content-between">
        <div>
          ReservaCathay
          {' '}
          © 2023
        </div>
        <div className="ms-md-auto">
          Powered by&nbsp;
          <a
            className="text-decoration-none"
            href="https://www.cathaypacific.com/cx/en_HK.html"
            target='_blank'
          >
            Cathay Pacific
          </a>
        </div>
      </Container>
    </footer>
  )
}
