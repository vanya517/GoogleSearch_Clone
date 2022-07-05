import React  from "react";
import { Link } from 'react-router-dom';
import Search from "./Search"
import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/Feed';
import PhotoIcon from '@mui/icons-material/Photo';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './SearchPage.css'
import { useStateValue } from "../StateProvide";
import useGoogleSearch from "../useGoogleSearch";




const SearchPage = () => {
const [{term}] = useStateValue();
const { data } = useGoogleSearch(term);
console.log(data)

    return (
        <div className="searchPage">
          <div className="searchPage_header">
            <Link to="/">
              <img src="https://techcrunch.com/wp-content/uploads/2015/10/screen-shot-2015-10-08-at-4-20-16-pm.png" alt=" " />
            </Link>

            <div className="searchPage_headerBody">
               <Search hidebuttons/>

               <div className="searchPage_options">
                 <div className="searchPage_optionsLeft">
                 <div className="searchPage_option">
                      <SearchIcon/> 
                      <Link to="/all">All</Link>
                 </div>
                 <div className="searchPage_option">
                      <FeedIcon/>
                      <Link to="/news">News</Link>
                 </div>
                 <div className="searchPage_option">
                      <PhotoIcon/> 
                      <Link to="/images">Images</Link>
                 </div>
                 <div className="searchPage_option">
                     <LocalOfferIcon/> 
                      <Link to="/shoping">Shopping</Link>
                 </div>
                 <div className="searchPage_option">
                       <LocationOnIcon/>
                      <Link to="/maps">Maps</Link>
                 </div>
                 <div className="searchPage_option">
                     <MoreVertIcon/> 
                      <Link to="/more">More</Link>
                 </div>
              </div>

               <div className="searchPage_optionsRight">
                  <div className="searchPage_option">
                     <Link to="/settings">Settings</Link>
                  </div>
                  <div className="searchPage_option">
                     <Link to="/tools"> Tools</Link>
                 </div>
               </div>

               
          </div>
            </div>
</div>


{
  term && (
          <div className="searchPage_results">
            <p className="searchPage_resultCount"> 
               About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term}         
            </p>

            {
              data?.items.map((item,i)=>{
                    return (
                      <div className="searchPage_result" key={i}>
                      <a href={item.link} className="searchPage_resultLink">

                        {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                          <img src={item.pagemap?.cse_image[0]?.src}  className="searchPage_resultImage" alt=""/>
                        )}
                        
                        {item.displayLink}
                      </a>

                      <a href={item.link} className="searchPage_resultTitle">
                        <h2>{item.title}</h2>
                      </a>
                      <p className="searchPage_resultdescription">{item.snippet}</p>
                    </div>

                    )
              })
            }
           
          </div>
          )}
       </div>
    )
}

export default SearchPage;