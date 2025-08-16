import Divider from './Divider'
import arrow from '../../assets/image/arrow.png'
import towerImg from '../../assets/image/tower.png'
import '../../styles/components/transportSection.css'
import TransportSmallCard from './TransportSmallCard.jsx'

const TransportSection = () => {
    return(
        <div className="transport-section">
            <div className='tower-img'>
                <img src={towerImg} alt={'one company'} />
            </div>
            <div className='gray-box'>
                <div className='scroll-content'> 
                    <div>
                        <div className='more-section'>
                            <Divider title={'ترابری'}  itemTitle={'ترابری'}/>
                            <img src={arrow} alt={'arrow'} />
                        </div>
                        <div className='cards-wrapper'>
                            <TransportSmallCard haveAbout/>
                            <TransportSmallCard />
                            <TransportSmallCard />
                        </div>
                    </div>
                    <div>
                        <div className='more-section other-more-section'>
                            <Divider title={'مالی اعتباری'} itemTitle={'مالی اعتباری'}/>
                            <img src={arrow} alt={'arrow'} />
                        </div>
                        <div className='cards-wrapper'>
                            <TransportSmallCard haveAbout/>
                            <TransportSmallCard />
                            <TransportSmallCard />
                        </div>
                    </div>
                    <div>
                        <div className='more-section other-more-section'>
                            <Divider title={'ترابری'} itemTitle={'ترابری'}/>
                            <img src={arrow} alt={'arrow'} />
                        </div>
                        <div className='cards-wrapper'>
                            <TransportSmallCard haveAbout/>
                            <TransportSmallCard />
                            <TransportSmallCard />
                        </div>
                    </div>
                    <div>
                        <div className='more-section other-more-section'>
                            <Divider title={'مالی اعتباری'} itemTitle={'مالی اعتباری'}/>
                            <img src={arrow} alt={'arrow'} />
                        </div>
                        <div className='cards-wrapper'>
                            <TransportSmallCard haveAbout/>
                            <TransportSmallCard />
                            <TransportSmallCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TransportSection