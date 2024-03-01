import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/material/Button";

//import tableroom2 from "../Images/tableroom2.jpg";
//import tableroom3 from "../Images/tableroom3.jpg";
import tableroom from "../Images/tableroom1.jpg";
import { motion } from "framer-motion";
///import { Box } from "@mui/material";

export default function SectionOne() {
  return (
    <>
      <Card sx={{ minHeight: "480px", width: "100%" }} className="mb-6">
        <CardCover>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            src={tableroom}
            alt=""
            className="rounded-none"
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent
          sx={{ justifyContent: "flex-end" }}
          className="text-5xl text-white p-2 bg-white/0.01"
        >
          <b className="text-orange-400">Spce Living,</b> Style your
          <br></br>
          space at the<br></br> best Prices
          <Typography
            //startDecorator={<LocationOnRoundedIcon />}
            textColor="neutral.300"
          >
            Our story, Imagine... stepping into a room that creates a mood and
            reflects personality...
          </Typography>
          <div className="flex space-between">
            <Button
              variant="contained"
              href="#contained-buttons"
              className="inline-block px-3 py-2 mt-3 rounded-3xl bg-orange-400"
            >
              READ MORE
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

/* Imagine... stepping into a room that creates a mood and reflects personality. This, my friend, is the magic of awakening your space through decoration.

We, at Spce Living, are not just about decoration. We are setters of atmosphere, transforming ordinary spaces into sanctuaries of joy and self-expression. Our story began with a shared dream: to break free from the common-space homes and bring the soul to living spaces.

Customer satisfaction is a value we cherish. We source the best products ensuring quality and reliability at the best prices in the market. 

Spce Living is more than a store; it's a community. We are storytellers and partners in crafting your haven. With each curated piece, we help you paint your story onto the walls, breathe life into every corner, and awaken the magic that lies within.

So, are you ready to awaken your space? Step into our world, buy from us and let's create a home that whispers your unique melody.

Visit Spce Living today, and let the story begin. */
