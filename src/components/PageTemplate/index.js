import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

const PageTemplate = ({ children }) => {
  return(
    <main>
      <Banner />

      <Outlet />
      {children}
    </main>
  )
}

export default PageTemplate;