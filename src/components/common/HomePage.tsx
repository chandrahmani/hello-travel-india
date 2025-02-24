import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ImageSlider from "../core/modal/ImageSlider";
import travelPackages from "../../data/data.json";
import { useEffect, useState } from "react";
import Image from "next/image";

type travelPackage = {
  title: string;
  image: string;
  description: string;
};
const HomePage = () => {
  const [packages, setPackages] = useState<travelPackage[]>([]);

  useEffect(() => {
    setPackages(travelPackages);
  }, []);
  return (
    <div>
      <ImageSlider />
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Explore Our Exclusive Travel Packages
        </Typography>
        <Grid container spacing={5}>
          {packages.map((pkg, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ mb: 5 }}>
                <CardMedia>
                  <CardContent>
                    <img src={pkg.image} width={"500"} height={"200"} />
                    <Typography variant="h6">{pkg.title}</Typography>
                    <Typography variant="h5" color="textSecondary">
                      {pkg.description}
                    </Typography>

                    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                      Book Now
                    </Button>
                  </CardContent>
                </CardMedia>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
