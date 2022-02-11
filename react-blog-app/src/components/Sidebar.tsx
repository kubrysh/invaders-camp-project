import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";

const Sidebar = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    })

    return(
        <aside className="aside-column">
            <Paper elevation={5} className="sidebar-container">
                <Typography variant="h5" component="h2" my={"0.83em"} sx={{ fontWeight: "bolder" }}>
                    {isLoading ? <Skeleton /> : "Popular Tags"}
                </Typography>
                <Typography variant="body1" my={"1em"}>
                    {isLoading ? <Skeleton /> : "No tags are here...yet"}
                </Typography>
            </Paper>
        </aside>
    )
}

export default Sidebar;
