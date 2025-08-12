import React from 'react';

import logo from '../../assets/image/logo-2.png'



const TransportSmallCard = ({haveAbout}) => {

const styles = {

    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // minHeight: '100vh',
        position: 'relative',
        // maxHeight:'306px'
    },
    
    card: {
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        padding: '0 20px 40px 20px',
        textAlign: 'center',
        maxWidth: '450px',
        maxHeight:'306px',
        margin: '0 10px',
        overflow:'hidden'
    },

    logo: {
        width: '180px',
    },

    description: {
        color: '#333',
        fontSize: '14px',
        // lineHeight: '2.2rem',
        margin: '0 20px 60px 20px',
        zIndex:'10'
    },

    aboutSection: {
        width: '48%',
        height: '140px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        alignItems: 'center',
        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        position:'absolute',
        bottom:'-49px',
        left:'30%',
        zIndex:0
    },
    aboutText: {
        color: '#555',
        fontSize: '12px',
        marginBottom: '8px',
    },

    arrow: {
        fontSize: '1.5rem',
        color: '#333',
    },

    };



return (

    <div style={styles.container}>
        <div v style={styles.card}>
            <img src={logo} alt="آوان سفر لوگو" style={styles.logo} />
            <p style={styles.description}>دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.
            </p>
        </div>
            {haveAbout &&
                <div style={styles.aboutSection}>
                        <span style={styles.aboutText}>درباره شرکت</span>
                        <span style={styles.arrow}>↓</span>
                </div>
            }
    </div>
    );
};



export default TransportSmallCard;