import "./news.css";
import fetchNews from "../utils/fetchNews.js";
import ImgCard from "../components/imgCard/imgCard.jsx";
import { uid } from "uid";

const News = async () => {
    const res = await fetchNews();

    return (
        <div className="news-container">
            {res?.data?.map((post) => {
                const { message, full_picture, id } = post;

                const link = `https://www.facebook.com/groups/${
                    process.env.GROUP_ID
                }/permalink/${id.split("_")[1]}/`;

                return (
                    <div key={uid()}>
                        {message || full_picture ? (
                            <ImgCard
                                img={full_picture}
                                text={message}
                                link={link}
                            />
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
};

export default News;
