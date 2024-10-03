import Footer from "./Footer"
import Header from "./Header"
import CalendlyBadgeWidget from "@/components/calendly"

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
      <CalendlyBadgeWidget/>
    </>
  )
}

export default Layout
