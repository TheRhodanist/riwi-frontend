import {useMediaQuery} from "@mui/material";

export default function useDeviceMediaType() {
    const isMobile = useMediaQuery("(max-width: 800px)");
    return {
        isMobile: isMobile
    }
}