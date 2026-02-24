import axios, { type AxiosResponse, type ResponseType } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Coin {
  asset_id_base: string,
  asset_id_quote: string,
  rate: string,
}

export default function Price() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const params = useParams();
  const symbol = params.symbol;
  axios.defaults.baseURL = "https://api-realtime.exrates.coinapi.io/v1/exchangerate"
  axios.defaults.headers.common["Authorization"] = apiKey;
  const url = `/${symbol}/USD`;

  const [coin, setCoin] = useState<Coin | null>(null);

  const getCoin = async () => {
    try {
      console.log("url", url)
      const res = await axios.get<Coin>(url);
      console.log(res.data)
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => { getCoin() }, []);

  const loaded = () => {
    if (!coin) return <h1>Coin is null</h1>
    return (
      <>
      <h1>
        {coin.asset_id_base}/{coin.asset_id_quote}
      </h1>
      <h2>{coin.rate}</h2>
      </>
    )
  }

  const loading = () => <h1>Loading...</h1>

  return coin && coin.rate ? loaded() : loading();
}