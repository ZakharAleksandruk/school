const fetchNews = async () => {
    const response = await fetch(
        `https://graph.facebook.com/v12.0/${process.env.GROUP_ID}/feed?access_token=${process.env.FB_TOKEN}&fields=id,full_picture,message`,
        { mode: "cors" }
    );
    const res = await response.json();

    return res;
};

export default fetchNews;
