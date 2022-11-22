import { db } from "./firebase";
import {
  collection,
  /*setDoc,*/
  getDocs,
  /*doc , onSnapshot,
  query,*/
} from "firebase/firestore";
// import { ref } from "vue";
// import ProductService from "../service/ProductService";
// import generateAutoId from "firebase-auto-ids";

export const fetchCollectionData = async () => {
  const stockRef = collection(db, "stock");
  const stockCollection = await getDocs(stockRef);
  let stockArray = [];
  stockCollection.forEach((doc) => stockArray.push(doc.data()));
 const sortedStockArray =  stockArray.sort((a, b) => {
    let statusA = a.inventoryStatus.toLowerCase(),
      statusB = b.inventoryStatus.toLowerCase();

  if(statusA < statusB)
  {
    return -1;
  }

  if(statusA > statusB)
  {
    return 1
  }
    return 0;
  })

  return sortedStockArray;
};

// export const fetchCollectionData = async () => {
//   const stock = ref([]);
//   const q = query(collection(db, "stock"));
//   const unsub = onSnapshot(q, (snapshot) => {
//     stock.value = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//   });

//   onUnmounted(unsub);
//   // const stockCollection = await getDocs(q);
//   // logResults(stockCollection);
//   return stock;
// };

// TODO: THIS CODE IS ONLY USED TO POPULATE DB WITH NEW PRODUCTS -
// UPDATE PRODUCTS.JSON WITH NEW PRODUCT INFO THEN RUN THIS IN APP.VUE

// export const prepareCollectionData = async () => {
//   const collectionRef = collection(db, "stock");
//   const productService = ref(new ProductService());
//   const products = productService.value
//     .getProducts()
//     .then((data) => (products.value = data))
//     .then((data) => data.forEach(element => {
//         console.log("I get here", element);
//         setDoc(doc(collectionRef, generateAutoId(Date.now())), {
//                     name:  element.name,
//                     inventoryStatus:  element.inventoryStatus,
//                     category:  element.category,
//                     price:  element.price,
//                     image:  element.image,
//                   });
//     }));
//   await Promise.all(
//     products.forEach(function (item) {
//         console.log(products)
//     console.log("I get here", item);
//       setDoc(doc(collectionRef, generateAutoId(Date.now())), {
//         name: item.name,
//         inventoryStatus: item.inventoryStatus,
//         category: item.category,
//         price: item.price,
//         image: item.image,
//       });
//     }));
//   console.log("Documents should be added now!");
// };
