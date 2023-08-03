import axios from "axios";
import React, { useEffect, useState } from "react";


interface IUseLoginProps {
  username: string;
  password: string;
}
export default function useLogin() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const login = async (data: IUseLoginProps) => {
    try {
      setIsLoading(true);

      const result = await axios.post('http://localhost:3000/api/login', {
        username: data.username,
        password: data.password
      });

      if (result.status == 200) {
        setData(result.data);
      } else {
        setError(result.statusText);
      }


      setIsLoading(false);

    } catch (error) {
      setError("Something went wrong. ");

    }
  }

  return { data, error, isLoading, login }
}





