import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const GridListNotices = ({ notices }) => {

    return (
        <Box>
            {
                notices.map( notice => (
                    <Card key={ notice.id } mb={5} className={ "news-card" }>
                        <CardMedia
                            className={"news-card-image"}
                            image={ notice.img }
                            title={ notice.title }
                            height={200}
                        />
                        <CardActionArea>
                            <CardContent className={"news-card-content"}>
                                <Box mb={2} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                                    <Typography component="h5" variant="h5">
                                        { notice.title }
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        { notice.author }
                                    </Typography>
                                </Box>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    { notice.body }
                                </Typography>
                                <Box mb={2} display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
                                    <IconButton><DeleteIcon/></IconButton>
                                    <IconButton><EditIcon /></IconButton>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))
            }
        </Box>
    )
}
