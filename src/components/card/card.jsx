import "./card.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const OutlinedCard = ({ title, href }) => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card
                variant="outlined"
                sx={{ minHeight: 200, position: "relative" }}
            >
                <>
                    <CardContent>
                        <Typography
                            sx={{ fontSize: "2rem", color: "#000" }}
                            gutterBottom
                        >
                            {title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            sx={{
                                position: "absolute",
                                bottom: 10,
                            }}
                        >
                            <Link to={href} className="card-link">
                                Перейти
                            </Link>
                        </Button>
                    </CardActions>
                </>
            </Card>
        </Box>
    );
};

export default OutlinedCard;
