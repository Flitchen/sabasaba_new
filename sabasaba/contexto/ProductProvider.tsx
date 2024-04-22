import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {Alert} from 'react-native';

let ProductContext = createContext({});
interface Product {
  fields: Object[string];
}

function ProductProvider({children}: PropsWithChildren) {
  // const SERVER_URL: String = 'http://api.7saba.com/';
  // const [is_selected_id, set_is_selected_id] = useState(null);
  // const [selected_product, set_selected_product] = useState({});
  // const [product_information, set_product_information] = useState({});
  // const [is_loaded, set_is_loaded] = useState(false);
  // const [random_number, set_random_number] = useState(0.0);
    // const product_link = 'https://server.7saba.com/products_details/';
  // const product_link = 'http://api.7saba.com/products_details/';
  // const [show_chat_options, setshow_chat_options] = useState(false);
  // var phoneNumber: string = '+255746297197';
  // const [productImages, set_productImages] = useState([
    // {id: 1, url: '../../assets/images/mrembo.png'},
    // {id: 2, url: '../../assets/images/mrembo.png'},
    // {id: 3, url: '../../assets/images/mrembo.png'},
  // ]);
// 
  const [author,set_author] = useState("Anonymous User");
  const [show_more, set_show_more] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
  }, []);

  function pick_language(language: string) {
    console.log(language);
  }
  return (
    <ProductContext.Provider
      value={{
        author,set_author,
        show_more, set_show_more,
        images, setImages
      }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;

export var useProduct = () => useContext(ProductContext);
