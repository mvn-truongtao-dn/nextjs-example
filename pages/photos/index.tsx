import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

type PhotoListProps = {
  data: any;
};

export default function PhotoList({ data }: PhotoListProps) {
  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        {photos.map((photo: any, index: number) => (
          <Card sx={{ minWidth: 275, maxWidth: 350 }} key={index}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={photo.avatar}
            />
            <CardContent>
              <Typography
                sx={{ fontSize: 20 }}
                color="text.secondary"
                gutterBottom
              >
                {photo.name} {photo.id}
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={`/photos/${encodeURIComponent(photo.id)}`}>
                <Button size="small">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
      <div>
        {photos.map((photo: any, index: number) => (
          <div style={{ width: 400 }} key={index}>
            {photo.name}
          </div>
        ))}
      </div> */}
      <h1>Hello</h1>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const response = await fetch("http://172.18.28.164:1337/api/products", {
      headers: {
        Authorization: `Bearer 7cdf477763a254a304c0515988d1f89c76eb90ad2179cb56e05e740646201791841ee1870615f5994a92dca0d99a45fac54b9f1cdf7b3367478837103ce1fed9c6b83be20c973e360a5bccf52b38480167f5f8ff9c49ef9cdd09a4d408d1e468ca909d249fda0f5218c5aa2617a90679e6bc85d90393ca2ab54c3f1db97344bf`,
      },
    });
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log("message");
  }
};
