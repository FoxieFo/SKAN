import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setAuth } from "./actions";

export default function Token({ unauthRedirect }) {
    const isAuth = useSelector(state => state.account?.isAuth);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        let itervalId;

        execute();

        itervalId = setInterval(execute, 15000);

        function execute() {
            const now = new Date();
            const expire = new Date(localStorage.getItem("expire"));
    
            dispatch(setAuth(now < expire));
    
            if (!isAuth)
                navigate(unauthRedirect);
        }
        
        return () => {
            clearInterval(itervalId);
        }
    }, [unauthRedirect, isAuth, dispatch, navigate]);
}