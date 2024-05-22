import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import Customers from "./pages/customers/Customers";
import { userInputs, productInputs } from "./formData";
import Gallery from "./pages/gallery/Gallery";
import Layout from "./components/layout/Layout";
import Notes from "./pages/notes/Notes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:userId" element={<Single />} />
          <Route path="/products/:productId" element={<Single />} />
          <Route path="/users" element={<Customers />} />
          <Route path="/products" element={<Product />} />
          <Route
            path="/users/:userId/new"
            element={<New inputs={userInputs} title={"Add New User"} />}
          />
          <Route
            path="/products/:productId/new"
            element={<New inputs={productInputs} title={"Add New Product"} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            exact
            path="/gallery"
            element={
              <Layout>
                <Gallery />
              </Layout>
            }
          />
          <Route
            exact
            path="/notes"
            element={
              <Layout>
                <Notes />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
