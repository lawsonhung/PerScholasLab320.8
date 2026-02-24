import { Link } from "react-router-dom";

interface NavProps {

}

export default function Nav(props: NavProps) {
  return (
    <div className="nav">
      <Link to="/">
        <div>CRYPTO PRICES</div>
      </Link>
      <Link to="/currencies">
        <div>CURRENCIES</div>
      </Link>
    </div>
  )
}