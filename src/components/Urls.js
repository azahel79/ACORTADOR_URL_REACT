import { Link } from "react-router-dom";
const Urls = ({url}) => {
    return ( <div className="url__item">
    <p className="original__url">URL: <span>{url.url}</span></p>
    <p className="shortUrl">SHORT URL: <Link to={`/${url.shortUrl}`}>http://localhost:3000/{url.shortUrl}</Link></p>
    <p className="views">Views: <span>{url.views}</span></p>
   
</div> );
}
 
export default Urls;