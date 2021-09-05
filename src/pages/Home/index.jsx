import React from 'react';

import MalevoLogo from '../../assets/logo.png';
import MalevoText from '../../assets/logo_text.png';

import ContactUs from '../../ContactUs';

const Home = () => {
    return (
        <div className='main-container'>
            <img className='logotype-image' src={MalevoLogo} alt='Malevo Logotype' />
            <p className="title">We revive NFTs</p>

            <div className='logotype-image-text-container'>
                <img className='logotype-image-text' src={MalevoText} alt='Malevo' />
            </div>
            <div className='description'>
                <p>
                    Malevo is the blockchain gallery, where NFTs can revive.
                    We represent а big range of artists in the fields of fine art,
                    digital art and photography.
                </p>
                <p>
                    On our platform, you will find both individual artworks and collectible
                    series. Only in our gallery you can buy NFT, validate and convert it into
                    real artwork.
                </p>
                <p>
                    If you want to buy collectibles in the newest way with the possibility of
                    obtaining the original artwork with a unique story behind too,
                    then Malevo is created for you.
                </p>
            </div>
            <ContactUs />
        </div>
    );
};

export default Home;