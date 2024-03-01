// import { useState } from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
// import Button from "@mui/joy/Button";
// import Card from "@mui/joy/Card";
// import CardContent from "@mui/joy/CardContent";
// import IconButton from "@mui/joy/IconButton";
// import Typography from "@mui/joy/Typography";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// import { useParams } from "react-router-dom";
// import { livingRoomData } from "./data";
// import LikedProductList from "./LikedProductList"; // Import the LikedProductList component

// export default function ProductFullDetails() {
//   const { id } = useParams();
//   const product = livingRoomData.find((p) => p.id === parseInt(id));
//   const [isLiked, setIsLiked] = useState(false);
//   const [likedProducts, setLikedProducts] = useState([]); // State to store liked products

//   const handleLikeClick = () => {
//     setIsLiked(!isLiked);

//     if (isLiked) {
//       // If already liked, remove from the liked products list
//       setLikedProducts(likedProducts.filter((p) => p.id !== product.id));
//     } else {
//       // If not liked, add to the liked products list
//       setLikedProducts([...likedProducts, product]);
//     }
//   };

//   return (
//     <>
//       <LikedProductList likedProducts={likedProducts} />

//       <Card sx={{ width: 520 }}>
//         <div>
//           <Typography level="title-lg">{product.name}</Typography>

//           <IconButton
//             aria-label="bookmark Bahamas Islands"
//             variant="plain"
//             color="neutral"
//             size="sm"
//             sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
//             onClick={handleLikeClick}
//           >
//             {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
//           </IconButton>
//         </div>
//         <AspectRatio minHeight="120px" maxHeight="200px">
//           <img
//             className="object-contain bg-inherit"
//             src={product.image}
//             loading="lazy"
//             alt="product image"
//           />
//         </AspectRatio>
//         <CardContent>
//           <div>
//             <Typography>{product.description}</Typography>
//             <Typography fontSize="lg" fontWeight="lg" className="mt-2">
//               Ksh {product.currentPrice}
//             </Typography>
//           </div>
//           <Button
//             variant="solid"
//             color="primary"
//             sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
//             className="bg-orange-400 mt-2  m-auto"
//           >
//             Add to cart
//             <AddShoppingCartIcon />
//           </Button>
//         </CardContent>
//       </Card>
//     </>
//   );
// }

//import { useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
//import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
//import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useParams } from "react-router-dom";
import { livingRoomData } from "./data";
import SearchAppBar from "./SearchAppBar";
//import LikedProductList from "./LikedProductList"; // Import the LikedProductList component

export default function ProductFullDetails() {
  const { id } = useParams();
  const product = livingRoomData.find((p) => p.id === parseInt(id));
  //const [isLiked, setIsLiked] = useState(false);

  // const handleLikeClick = () => {
  //   setIsLiked(!isLiked);
  // };

  return (
    <>
      <SearchAppBar />
      <Card sx={{ width: 520 }}>
        <div>
          <Typography level="title-lg">{product.name}</Typography>

          <IconButton
            aria-label="bookmark Bahamas Islands"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
            //onClick={handleLikeClick}
          >
            {/* {isLiked ?<FavoriteIcon /> : <FavoriteBorderIcon />} */}
          </IconButton>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            className="object-contain bg-inherit"
            src={product.image}
            loading="lazy"
            alt="product image"
          />
        </AspectRatio>
        <CardContent>
          <div>
            <Typography>{product.description}</Typography>
            <Typography fontSize="lg" fontWeight="lg" className="mt-2">
              Ksh {product.currentPrice}
            </Typography>
          </div>
          <Button
            variant="solid"
            color="primary"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            className="bg-orange-400 mt-2  m-auto"
          >
            Add to cart
            <AddShoppingCartIcon />
          </Button>
        </CardContent>
      </Card>

      {/* Pass likedProducts state to LikedProductList component */}
    </>
  );
}
