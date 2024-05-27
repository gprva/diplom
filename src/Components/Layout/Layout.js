import "./Layout.css";
import CategoryList from "../CategoryList/CategoryList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout(props) {

  // this.deleteOrder = this.deleteOrder.bind(this)

  // deleteOrder(id) {

  // }

  return (
    <>
      <Header />
      <div className="container">
        <div className="Layout flex">
          <aside>
            <CategoryList />
          </aside>
          <main>{props.children}</main>
        </div>
      </div>
      <Footer />
    </>
  )
}