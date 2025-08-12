import React from "react"
import {ArrowIcon} from './ArticleCard.jsx'
import '../../styles/components/moreArticleCard.css'
import BlogImage from '../../assets/image/blog-5.png'
const MoreArticleCard = () => {
    return(
    <div className="more-card-component">
        <div className="more-card-header">
            <div className="more-card-header-title">
            <span>مشاهده اخبار و مقالات بیشتر</span>
            </div>
            <div className="arrow-button-more">
                <ArrowIcon />
            </div>
        </div>
        <div className="image-wrapper-more">
        <img src={BlogImage} alt={'Article Image'} />
        </div>
    </div>
    )
}
export default MoreArticleCard