import AspectRatio from "@mui/joy/AspectRatio";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";

import { Link } from "react-router-dom";
import { livingRoomData } from "./data";

import Typography from "@mui/joy/Typography";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Box } from "@mui/material";

export default function ProductCard() {
  return (
    <div
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
      className="grid gap-2 justify-items-center"
    >
      {livingRoomData.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
          className="grid gap-2 justify-items-center"
        >
          <Card
            key={product.id}
            sx={{ width: 280, maxWidth: "100%", boxShadow: "lg" }}
          >
            <CardOverflow className="bg-inherit">
              <AspectRatio sx={{ minWidth: 200 }}>
                <img
                  src={product.image}
                  loading="lazy"
                  alt="product image"
                  style={{ width: "100%" }}
                  className="object-contain bg-inherit"
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Box
                href="#product-card"
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
                endDecorator={
                  <FavoriteBorderIcon className=" flex justify-end" />
                }
              >
                {product.name}
              </Box>
              <Typography
                level="title-lg"
                sx={{ mt: 1, fontWeight: "xl" }}
                endDecorator={
                  <Chip
                    component="span"
                    size="sm"
                    variant="soft"
                    color="success"
                  >
                    -{product.discount}%
                  </Chip>
                }
              >
                ksh {product.currentPrice}
              </Typography>
              <Typography level="body-sm">
                (Only <b>{product.itemsLeft}</b> left in stock!)
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

// import AspectRatio from "@mui/joy/AspectRatio";
// import Card from "@mui/joy/Card";
// import CardContent from "@mui/joy/CardContent";
// import CardOverflow from "@mui/joy/CardOverflow";
// import Chip from "@mui/joy/Chip";
// import { Link } from "react-router-dom";
// import { livingRoomData } from "./data";
// import Typography from "@mui/joy/Typography";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import { Box } from "@mui/material";

// export default function ProductCard() {
//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//       }}
//       className="grid gap-2 justify-items-center"
//     >
//       {livingRoomData.map((product) => (
//         <Link
//           key={product.id}
//           to={`/products/${product.id}`}
//           style={{ textDecoration: "none" }}
//         >
//           <Card sx={{ width: 280, maxWidth: "100%", boxShadow: "lg" }}>
//             <CardOverflow className="bg-inherit">
//               <AspectRatio sx={{ minWidth: 200 }}>
//                 <img
//                   src={product.image}
//                   loading="lazy"
//                   alt="product image"
//                   style={{ width: "100%" }}
//                   className="object-contain bg-inherit"
//                 />
//               </AspectRatio>
//             </CardOverflow>
//             <CardContent>
//               <Box
//                 component={Link}
//                 to={`/products/${product.id}`}
//                 fontWeight="md"
//                 color="neutral"
//                 textColor="text.primary"
//                 overlay
//                 endDecorator={
//                   <FavoriteBorderIcon className="flex justify-end" />
//                 }
//               >
//                 {product.name}
//               </Box>
//               <Typography
//                 level="title-lg"
//                 sx={{ mt: 1, fontWeight: "xl" }}
//                 endDecorator={
//                   <Chip
//                     component="span"
//                     size="sm"
//                     variant="soft"
//                     color="success"
//                   >
//                     -{product.discount}%
//                   </Chip>
//                 }
//               >
//                 ksh {product.currentPrice}
//               </Typography>
//               <Typography level="body-sm">
//                 (Only <b>{product.itemsLeft}</b> left in stock!)
//               </Typography>
//             </CardContent>
//           </Card>
//         </Link>
//       ))}
//     </div>
//   );
// }
