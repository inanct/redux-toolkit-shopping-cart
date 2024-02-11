import Layout from "./Components/layout/Layout";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Basket from "./Pages/Basket";
import ContactForm from "./Pages/Contact/Contact";




function App() {
  return (
    
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<ContactForm/>}/>
          <Route path="/basket" element={<Basket/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
    
    
    
  );
}

export default App;
