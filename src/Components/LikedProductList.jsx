// import AspectRatio from "@mui/joy/AspectRatio";
// //import { useState } from "react";
// //import Link from "@mui/joy/Link";
// import Card from "@mui/joy/Card";
// import CardContent from "@mui/joy/CardContent";
// import Chip from "@mui/joy/Chip";
// import Typography from "@mui/joy/Typography";
// import DeleteIconComponent from "./DeleteIconComponent";
// import AddMinusSection from "./AddMinusSection";
// import SearchAppBar from "./SearchAppBar";

// export default function ShoppingCartItem({ likedProducts }) {
//   return (
//     <>
//       <SearchAppBar />
//       {likedProducts.map((product) => (
//         <Card
//           key={product.id}
//           variant="outlined"
//           orientation="horizontal"
//           sx={{
//             width: 720,
//             "&:hover": {
//               boxShadow: "md",
//               borderColor: "neutral.outlinedHoverBorder",
//             },
//           }}
//         >
//           <AspectRatio ratio="1" sx={{ width: 90 }}>
//             <img src={product.image} loading="lazy" alt="product image" />
//           </AspectRatio>
//           <CardContent>
//             <Typography level="title-lg" id="card-description">
//               {product.name}
//             </Typography>
//             <Typography
//               level="body-sm"
//               aria-describedby="card-description"
//               mb={1}
//             >
//               {/* Add your description content here */}
//             </Typography>
//             <Chip
//               variant="outlined"
//               color="primary"
//               size="sm"
//               sx={{ pointerEvents: "none" }}
//             >
//               In stock
//             </Chip>
//             <DeleteIconComponent />
//           </CardContent>
//           <div className="grid">
//             <p>{product.currentPrice}</p>
//             <AddMinusSection />
//           </div>
//         </Card>
//       ))}
//     </>
//   );
// }

// import { useSelector, useDispatch } from "react-redux";
// import { removeLikedProduct } from "../likedProductsSlice";
// import Card from "@mui/joy/Card";
// import CardContent from "@mui/joy/CardContent";
// import Typography from "@mui/joy/Typography";

// const LikedProductList = () => {
//   const likedProducts = useSelector((state) => state.likedProducts);
//   const dispatch = useDispatch();

//   const handleRemoveLike = (product) => {
//     dispatch(removeLikedProduct(product));
//   };

//   return (
//     <div>
//       <h2>Liked Products</h2>
//       {likedProducts.map((product) => (
//         <Card key={product.id} sx={{ width: 300, marginBottom: 2 }}>
//           <CardContent>
//             <Typography>{product.name}</Typography>
//             <Typography fontSize="lg" fontWeight="lg" className="mt-2">
//               Ksh {product.currentPrice}
//             </Typography>
//             <button onClick={() => handleRemoveLike(product)}>
//               Remove Like
//             </button>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default LikedProductList;
