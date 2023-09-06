import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";

type ProductItemProps = {
  user: any;
};

export default function ProductItem({ user }: ProductItemProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={<Avatar alt="Cindy Baker" src={user.avatar} />}
            action={
              <IconButton aria-label="settings">
                {/* <MoreVertIcon /> */}
              </IconButton>
            }
            title={`${user.last_name} ${user.first_name}`}
            subheader={user.email}
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {user.last_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://reqres.in/api/users?page=2");
  const users = await res.json();

  const paths = users.data.map((user: any) => {
    const { id } = user;
    return {
      params: {
        id: id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const param = context.params?.id;
  console.log(context);

  const res = await fetch(`https://reqres.in/api/users/${param}`);
  const user = await res.json();

  return {
    props: {
      user: user.data,
    },
    revalidate: 10,
  };
};
