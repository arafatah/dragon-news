import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex bg-slate-400 py-3 px-2 rounded-lg">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee className="text-white" pauseOnHover={true} speed={150}>
                <Link className="mr-12" to="/"> I can be a React component, multiple React components, or just some text.......</Link>
                <Link className="mr-12" to="/"> I can be a React component, multiple React components, or just some text........</Link>
                <Link className="mr-12" to="/"> I can be a React component, multiple React components, or just some text.......</Link>
                <Link className="mr-12" to="/"> I can be a React component, multiple React components, or just some text......</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;