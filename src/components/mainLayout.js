import React from "react"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <div style={{ margin: `0 auto`, width: `100vw` }}>
    <Header />
    {children}
    <Footer />
  </div>
)
