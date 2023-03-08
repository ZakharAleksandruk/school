import "./News.css";
import { useEffect, useState } from "react";
import ImgCard from "../../components/imgCard/imgCard.jsx";
import { uid } from "uid";

const News = () => {
    const [data, setData] = useState();

    const fetchPost = async () => {
        const response = await fetch(
            `https://graph.facebook.com/v12.0/${groupId}/feed?access_token=${token}&fields=id,full_picture,message`,
            { mode: "cors" }
        );
        const res = await response.json();

        console.log(res);
        setData(res);
    };

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <div className="news-container">
            {data?.data?.map((post) => {
                const { message, full_picture, id } = post;

                const link = `https://www.facebook.com/groups/${groupId}/permalink/${
                    id.split("_")[1]
                }/`;

                return (
                    <>
                        {message || full_picture ? (
                            <ImgCard
                                key={uid()}
                                img={full_picture}
                                text={message}
                                link={link}
                            />
                        ) : null}
                    </>
                );
            })}
        </div>
    );
};

export default News;
