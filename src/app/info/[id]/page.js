import "./info.css";
import fetchPages from "../../utils/fetchPages.js";
import Layout from "./layout.js";
import { uid } from "uid";

const Page = async ({ params }) => {
    const { id } = params;
    const data = await fetchPages();

    return (
        <Layout>
            {data[id] ? (
                <div className="info-container">
                    <h1>{data[id].title}</h1>
                    <div sx={{ paddingTop: "2rem" }} className="p-container">
                        {data[id].paragraphs?.map((p) => {
                            return <p key={uid()}>{p}</p>;
                        })}
                    </div>
                </div>
            ) : null}
        </Layout>
    );
};

export default Page;
