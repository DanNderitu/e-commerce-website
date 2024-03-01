import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

import bathroom from "../Images/bathroom.jpg";
import bedroom from "../Images/bedroom.jpg";
import kitchen from "../Images/kitchen.jpg";
import lighting from "../Images/lighting.jpg";
import livingroom from "../Images/livingroom.jpg";
import office from "../Images/office.jpg";
import outdoor from "../Images/outdoor.jpg";

import { Link } from "react-router-dom";

const cardData = [
  { image: bathroom, name: "Bathroom" },
  { image: bedroom, name: "Bedroom" },
  { image: kitchen, name: "Kitchen" },
  { image: lighting, name: "Lighting" },
  { image: livingroom, name: "Livingroom" },
  { image: office, name: "Office" },
  { image: outdoor, name: "Outdoor" },
];

function CategoryCardList() {
  return (
    <div className="scrollable-content overflow-x-auto whitespace-nowrap scrollbar-thin">
      {cardData.map((card) => (
        <Card
          key={card.name}
          sx={{ width: 250 }}
          className="inline-block m-2 px-1 pt-1 rounded-none "
        >
          <AspectRatio
            minHeight="140px"
            maxHeight="200px"
            className="rounded-none"
          >
            <img src={card.image} alt={card.name} />
          </AspectRatio>
          <CardContent orientation="vertical" className="text-center">
            <Typography level="body-xs" className="my-2">
              {card.name}
            </Typography>
            <Button
              variant="solid"
              size="md"
              color="primary"
              aria-label="Shop"
              sx={{ alignSelf: "center", fontWeight: 600 }}
              className="bg-orange-400"
              component={Link} // Use Link as the component for navigation
              to={`/${card.name.toLowerCase()}`} // Dynamically create the link path
            >
              Shop
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default CategoryCardList;
