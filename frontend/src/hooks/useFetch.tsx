import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [post, setpost] = useState({});
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState<string | null>(null);

  const getresponse = async () => {
    try {
      setloading(true);
      let res = await fetch(url);
      if (!res || !res.ok) throw new Error("Couldn't fetch the response.");
      res = await res.json();

      setpost(res);
    } catch (err) {
      seterror(
        err instanceof Error
          ? err.message
          : "something went wrong at fetching data."
      );
      setpost({});
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    getresponse();
  }, [url]);

  return {
    post,
    loading,
    error,
    reFetch: getresponse,
  };
};
