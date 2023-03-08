import { useEffect, useState } from "react";
import { uid } from "uid";

const News = () => {
    const [data, setData] = useState();

    const fetchPost = async () => {
        const response = await fetch(
            `https://graph.facebook.com/v12.0/${id}/feed?access_token=${token}&fields=full_picture,message`,
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
        <>
            {data?.data?.map((post) => {
                const { message, full_picture } = post;

                return (
                    <div key={uid()}>
                        {message ? <p>{message}</p> : null}
                        {full_picture ? (
                            <img src={full_picture} alt="" />
                        ) : null}
                    </div>
                );
            })}
        </>
    );
};

export default News;
