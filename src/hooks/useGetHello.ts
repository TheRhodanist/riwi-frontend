import {useEffect, useState} from "react";

export default function useGetHello() {
    const [value, setValue] = useState("")
    useEffect(() => {
        fetch('http://localhost:8080/hello')
            .then(response => response.text())
            .then(data => setValue(data));
    }, []);

    return value;
}
