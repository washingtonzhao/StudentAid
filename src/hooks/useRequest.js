import React, { useEffect, useState } from "react";
import _ from "lodash";

export function useRequest(req, memo = []) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [updateIndex, setUpdateIndex] = useState(0);
  const forceFetch = () => setUpdateIndex(i => i + 1);

  const fetchUrl = async isMounted => {
    if (isMounted) {
      const response = await req().catch(e => {
        setErrorMessage(e);
        setError(true);
      });
      if (isMounted) {
        setData(response);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    let isMounted = true;
    fetchUrl(isMounted);

    return () => {
      isMounted = false;
    };
  }, [updateIndex, ..._.flatten(memo)]);
  return [
    data,
    loading ? () => <div /> : undefined,
    error,
    forceFetch,
    errorMessage
  ];
}

export default useRequest;
