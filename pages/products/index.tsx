import { MainLayout } from "@/components/layout";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";

type ProductPageProps = {
  users: any;
};

export default function ProductList({ users }: ProductPageProps) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {users.data.map((user: any, index: number) => (
          <Card sx={{ minWidth: 275 }} key={index}>
            <CardContent>
              <Avatar alt="Cindy Baker" src={user.avatar} />
              <Typography
                sx={{ fontSize: 20 }}
                color="text.secondary"
                gutterBottom
              >
                {user.email}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {user.first_name} {user.last_name}
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={`/products/${encodeURIComponent(user.id)}`}>
                <Button size="small">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://reqres.in/api/users?page=2");
  const users = await res.json();

  return {
    props: {
      users,
    },
    revalidate: 10,
  };
};

ProductList.Layout = MainLayout;
