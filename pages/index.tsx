import { NextPageWithLayout } from "../model/common";
import { MainLayout } from "@/components/layout";
import { useEffect, useState } from "react";

const Home: NextPageWithLayout = () => {
  console.log(process.env.URL);
  const [tokenValue, setTokenValue] = useState("");
  const value =
    "7cdf477763a254a304c0515988d1f89c76eb90ad2179cb56e05e740646201791841ee1870615f5994a92dca0d99a45fac54b9f1cdf7b3367478837103ce1fed9c6b83be20c973e360a5bccf52b38480167f5f8ff9c49ef9cdd09a4d408d1e468ca909d249fda0f5218c5aa2617a90679e6bc85d90393ca2ab54c3f1db97344bf";
  useEffect(() => {
    const fetchData = async () => {
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
      } catch (error) {
        console.log("message");
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

Home.Layout = MainLayout;
export default Home;
