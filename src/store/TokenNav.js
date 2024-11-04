import { useDispatch } from "react-redux";
import { setAuth } from "./actions";

export default function TokenNav() {
    const dispatch = useDispatch();

    const now = new Date();
    const expire = new Date(localStorage.getItem("expire"));

    dispatch(setAuth(now < expire));
}