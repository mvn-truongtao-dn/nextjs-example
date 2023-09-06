import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function Login() {
  const router = useRouter();
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    sessionStorage.setItem(
      "key",
      "7cdf477763a254a304c0515988d1f89c76eb90ad2179cb56e05e740646201791841ee1870615f5994a92dca0d99a45fac54b9f1cdf7b3367478837103ce1fed9c6b83be20c973e360a5bccf52b38480167f5f8ff9c49ef9cdd09a4d408d1e468ca909d249fda0f5218c5aa2617a90679e6bc85d90393ca2ab54c3f1db97344bf"
    );

    router.push("/products");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Email: <input type="text" ref={emailInput} />
        </label>
      </div>
      <div>
        <label>
          Password: <input type="password" ref={passwordInput} />
        </label>
      </div>
      <div>
        <button type="submit">Sign in</button>
      </div>
    </form>
  );
}
