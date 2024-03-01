import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/material/Avatar";

const testimonialData = [
  {
    image: "",
    name: "Kelvin Masau",
    statement:
      "the services and the products i bought are of high quality. would recommend anyone to try them out",
  },
  {
    image: "",
    name: "Kelvin Masau",
    statement:
      "the services and the products i bought are of high quality. would recommend anyone to try them out",
  },
  {
    image: "",
    name: "Kelvin Masau",
    statement:
      "the services and the products i bought are of high quality. would recommend anyone to try them out",
  },
  {
    image: "",
    name: "Kelvin Masau",
    statement:
      "the services and the products i bought are of high quality. would recommend anyone to try them out",
  },
  {
    image: "",
    name: "Kelvin Masau",
    statement:
      "the services and the products i bought are of high quality. would recommend anyone to try them out",
  },
];

export default function Testimonials() {
  return (
    <div className="grid grid-flow-col gap-x-3 overflow-x-auto ">
      {testimonialData.map((testimonial) => (
        <Card
          className="mt-20 mb-2"
          key={testimonial.name}
          variant="outlined"
          sx={{
            width: 320,
            // to make the card resizable
            overflow: "auto",
            //resize: "horizontal",
            //margin: "0 auto", centers horizontally whole component
          }}
        >
          <div className="grid ">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar src="/static/images/avatar/1.jpg" size="lg" />
            </Box>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography level="title-lg">{testimonial.name}</Typography>
              <Typography level="body-sm" className="p-6">
                <q>{testimonial.statement}</q>
              </Typography>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
