// import { useEffect, useState } from "react";

// function useFetch(url) {
//   const [data, setData] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     try {
//       setIsLoading(true);
//       async function fetchData() {
//         const response = await fetch(url);
//         const data = await response.json();
//         setData(data.data);
//       }
//       fetchData();
//       setIsLoading(false);
//     } catch (error) {
//       setError(error);
//     }
//   }, [url]);

//   const reFetch = async () => {
//     setIsLoading(true);
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       setData(data.data);
//     } catch (err) {
//       setError(err);
//     }
//     setIsLoading(false);
//   };
//   return { data, isLoading, error, reFetch };
// }

// export default useFetch;

import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null); // initialize as null
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // initialize as null

  useEffect(() => {
    let isMounted = true; // to prevent state updates on unmounted component

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (isMounted) {
          setData(result.data); // assuming data is in result.data
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message || "Something went wrong"); // error handling
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // cleanup function to avoid memory leaks
    };
  }, [url]);

  const reFetch = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const result = await res.json();
      setData(result.data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, reFetch };
}

export default useFetch;
