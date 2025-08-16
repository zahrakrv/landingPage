
import '../styles/components/landing.css';
import Divider from './details/Divider.jsx';
import TitleSec from './details/TitleSec.jsx';
import ContactUs from './details/ContactUs.jsx'
import TextBoxSec from './details/TextBoxSec.jsx';
import thirdImage from '../assets/image/blog-3.png'
import forthImage from '../assets/image/blog-4.png'
import ArticleCard from './details/ArticleCard.jsx'
import firstImage from '../assets/image/blog-1.png'
import secondImage from '../assets/image/blog-2.png'
import SocialSection from './details/SocialSection.jsx'
import SectionsTitle from './details/SectionsTitle.jsx';
import MoreArticleCard from './details/MoreArticleCard.jsx'
import TransportSection from './details/TransportSection.jsx'
import SecondArticleCard from './details/SecondArticleCard.jsx'

const MainSection=()=>{
      const fullArticleData = {
    imageUrl: firstImage,
    tags: ['گردشگری', 'فرودگاه', 'سفر', 'هواپیما'],
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...',
    date: '۲۴ فروردین ۱۴۰۴',
    backgroundColor:'#000',
    titleColor:'#ffffff', 
    descColor:'#ffffff'
    
  };
  const simpleArticleData = {
    imageUrl: secondImage,
    tags: ['تکنولوژی', 'بررسی'],
    title: ' عنوان برای تست',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...',
    date: '۲۵ فروردین ۱۴۰۴',
    backgroundColor:'#F5F5F5',
    titleColor:'#1f2937',
    descColor:'#4b5563'
  };
  const smallArticleData = {
    imageUrl: thirdImage,
    tags: ['لحظه تی وی', 'سینما'],
    title: 'یک عنوان دیگر برای تسلورم ایپسوم متن ساختگی!',
    date: '۲۵ فروردین ۱۴۰۴',
  };
  const secSmallArticleData = {
    imageUrl: forthImage,
    tags: ['دات وان سفر', 'تاکسی'],
    title: 'یک عنوان دیگر برای تسلورم ایپسوم متن ساختگی!',
    date: '۲۵ فروردین ۱۴۰۴',
  };
    const handleArrowClick = () => {
    alert('Button clicked!');
  }
return(
    <>
     {/* FIRST SECTION */}
      <TitleSec/>

      {/* SECOND SECTION */}
     <TextBoxSec/>

      {/* THIRD SECTION */}
    <SectionsTitle/>

    {/* BlOG SECTION */}
    <div className='divider-top'>
    <Divider title={'وبلاگ'}/>
    </div>
    <div className='article-wrapper'>
      <ArticleCard 
        imageUrl={fullArticleData.imageUrl}
        tags={fullArticleData.tags}
        title={fullArticleData.title}
        description={fullArticleData.description}
        date={fullArticleData.date}
        onArrowClick={handleArrowClick}
        backgroundColor={fullArticleData.backgroundColor}
        titleColor={fullArticleData.titleColor}
    descColor={fullArticleData.descColor}
      />
      
      <ArticleCard 
        imageUrl={simpleArticleData.imageUrl}
        tags={simpleArticleData.tags}
        title={simpleArticleData.title}
        description={simpleArticleData.description}
        date={simpleArticleData.date}
        onArrowClick={handleArrowClick}
        backgroundColor={simpleArticleData.backgroundColor}
        titleColor={simpleArticleData.titleColor}
        descColor={simpleArticleData.descColor}
      />
    </div>
    <div className='article-wrapper second-article-wrapper'>
      <SecondArticleCard 
        imageUrl={smallArticleData.imageUrl}
        tags={smallArticleData.tags}
        title={smallArticleData.title}
        date={smallArticleData.date}
        onArrowClick={handleArrowClick}
      />
      
      <SecondArticleCard 
        imageUrl={secSmallArticleData.imageUrl}
        tags={secSmallArticleData.tags}
        title={secSmallArticleData.title}
        date={secSmallArticleData.date}
        onArrowClick={handleArrowClick}
      />
      <MoreArticleCard/>
    </div>
    <TransportSection/>
    <ContactUs/>
    <SocialSection />
      </>
)
}
export default MainSection;